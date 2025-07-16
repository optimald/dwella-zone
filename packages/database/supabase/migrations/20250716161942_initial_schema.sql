-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable Row Level Security
ALTER DATABASE postgres SET row_security = on;

-- =============================================
-- USER PROFILES & AUTHENTICATION
-- =============================================

-- User profiles (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'customer' CHECK (role IN ('customer', 'admin', 'technician')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer accounts (main account holders)
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES profiles(id) NOT NULL,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  install_date DATE,
  package_tier TEXT DEFAULT 'Light' CHECK (package_tier IN ('Light', 'Core', 'Aura')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  stripe_customer_id TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Family members (sub-accounts)
CREATE TABLE family_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
  profile_id UUID REFERENCES profiles(id) NOT NULL,
  relationship TEXT, -- 'child', 'spouse', 'caregiver', etc.
  access_level TEXT DEFAULT 'read_only' CHECK (access_level IN ('read_only', 'full_control')),
  is_emergency_contact BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(customer_id, profile_id)
);

-- =============================================
-- DEVICES & SMART HOME
-- =============================================

-- Device categories
CREATE TABLE device_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Smart devices
CREATE TABLE devices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
  category_id UUID REFERENCES device_categories(id),
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  serial_number TEXT,
  device_name TEXT NOT NULL, -- User-friendly name like "Front Door Camera"
  location TEXT, -- "Living Room", "Master Bedroom", etc.
  api_type TEXT, -- 'ring', 'nest', 'kasa', 'august', etc.
  api_device_id TEXT, -- Device ID in the respective API
  install_date DATE,
  warranty_expiry DATE,
  status TEXT DEFAULT 'online' CHECK (status IN ('online', 'offline', 'maintenance', 'error')),
  last_ping TIMESTAMP WITH TIME ZONE,
  battery_level INTEGER CHECK (battery_level >= 0 AND battery_level <= 100),
  metadata JSONB DEFAULT '{}', -- Store device-specific data
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Device status history
CREATE TABLE device_status_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  device_id UUID REFERENCES devices(id) ON DELETE CASCADE NOT NULL,
  status TEXT NOT NULL,
  battery_level INTEGER,
  metadata JSONB DEFAULT '{}',
  recorded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- SUPPORT & TICKETS
-- =============================================

-- Support tickets
CREATE TABLE support_tickets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
  created_by UUID REFERENCES profiles(id) NOT NULL,
  assigned_to UUID REFERENCES profiles(id), -- Technician assigned
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT DEFAULT 'general' CHECK (category IN ('general', 'device_issue', 'installation', 'billing', 'emergency')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'waiting_customer', 'resolved', 'closed')),
  device_id UUID REFERENCES devices(id), -- Related device if applicable
  resolution TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  resolved_at TIMESTAMP WITH TIME ZONE
);

-- Support messages (ticket thread)
CREATE TABLE support_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  ticket_id UUID REFERENCES support_tickets(id) ON DELETE CASCADE NOT NULL,
  sender_id UUID REFERENCES profiles(id) NOT NULL,
  message TEXT NOT NULL,
  is_internal BOOLEAN DEFAULT FALSE, -- Internal notes only visible to staff
  attachments JSONB DEFAULT '[]', -- Array of file URLs
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- SCHEDULING & APPOINTMENTS
-- =============================================

-- Service appointments
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
  technician_id UUID REFERENCES profiles(id),
  ticket_id UUID REFERENCES support_tickets(id),
  appointment_type TEXT DEFAULT 'maintenance' CHECK (appointment_type IN ('installation', 'maintenance', 'repair', 'upgrade', 'consultation')),
  scheduled_start TIMESTAMP WITH TIME ZONE NOT NULL,
  scheduled_end TIMESTAMP WITH TIME ZONE NOT NULL,
  actual_start TIMESTAMP WITH TIME ZONE,
  actual_end TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'confirmed', 'in_progress', 'completed', 'cancelled', 'no_show')),
  notes TEXT,
  google_calendar_event_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- BILLING & SUBSCRIPTIONS
-- =============================================

-- Subscription plans
CREATE TABLE subscription_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL, -- 'Light', 'Core', 'Aura'
  description TEXT,
  price_monthly INTEGER NOT NULL, -- Price in cents
  price_yearly INTEGER, -- Price in cents (optional discount)
  features JSONB DEFAULT '[]', -- Array of features
  max_devices INTEGER,
  support_response_time TEXT, -- '24h', '4h', '1h'
  stripe_price_id TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
  plan_id UUID REFERENCES subscription_plans(id) NOT NULL,
  stripe_subscription_id TEXT UNIQUE,
  status TEXT DEFAULT 'active' CHECK (status IN ('trialing', 'active', 'past_due', 'canceled', 'unpaid')),
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  trial_end TIMESTAMP WITH TIME ZONE,
  canceled_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Invoices
CREATE TABLE invoices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
  subscription_id UUID REFERENCES subscriptions(id),
  stripe_invoice_id TEXT UNIQUE,
  amount_total INTEGER NOT NULL, -- Amount in cents
  amount_paid INTEGER DEFAULT 0,
  currency TEXT DEFAULT 'usd',
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'open', 'paid', 'void', 'uncollectible')),
  invoice_pdf TEXT, -- URL to PDF
  due_date TIMESTAMP WITH TIME ZONE,
  paid_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- DOCUMENTS & FILES
-- =============================================

-- Document storage
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  file_type TEXT, -- 'contract', 'invoice', 'guide', 'checklist', 'device_map'
  file_size INTEGER,
  mime_type TEXT,
  is_public BOOLEAN DEFAULT FALSE,
  created_by UUID REFERENCES profiles(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- NOTIFICATIONS & ALERTS
-- =============================================

-- Notification templates
CREATE TABLE notification_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  subject TEXT,
  body_text TEXT,
  body_html TEXT,
  notification_type TEXT CHECK (notification_type IN ('email', 'sms', 'push', 'in_app')),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer notifications
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
  recipient_id UUID REFERENCES profiles(id), -- Specific family member
  template_id UUID REFERENCES notification_templates(id),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  notification_type TEXT CHECK (notification_type IN ('email', 'sms', 'push', 'in_app')),
  is_read BOOLEAN DEFAULT FALSE,
  sent_at TIMESTAMP WITH TIME ZONE,
  read_at TIMESTAMP WITH TIME ZONE,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Push notification tokens
CREATE TABLE push_tokens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  token TEXT NOT NULL,
  platform TEXT CHECK (platform IN ('ios', 'android', 'web')),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(profile_id, token)
);

-- =============================================
-- ANALYTICS & TRACKING
-- =============================================

-- Activity logs
CREATE TABLE activity_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  customer_id UUID REFERENCES customers(id),
  action TEXT NOT NULL,
  resource_type TEXT, -- 'device', 'ticket', 'appointment', etc.
  resource_id UUID,
  details JSONB DEFAULT '{}',
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================

-- Profiles indexes
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_profiles_email ON profiles(email);

-- Customers indexes
CREATE INDEX idx_customers_profile_id ON customers(profile_id);
CREATE INDEX idx_customers_status ON customers(status);
CREATE INDEX idx_customers_package_tier ON customers(package_tier);

-- Devices indexes
CREATE INDEX idx_devices_customer_id ON devices(customer_id);
CREATE INDEX idx_devices_status ON devices(status);
CREATE INDEX idx_devices_api_type ON devices(api_type);
CREATE INDEX idx_devices_last_ping ON devices(last_ping);

-- Support tickets indexes
CREATE INDEX idx_support_tickets_customer_id ON support_tickets(customer_id);
CREATE INDEX idx_support_tickets_status ON support_tickets(status);
CREATE INDEX idx_support_tickets_priority ON support_tickets(priority);
CREATE INDEX idx_support_tickets_assigned_to ON support_tickets(assigned_to);
CREATE INDEX idx_support_tickets_created_at ON support_tickets(created_at);

-- Appointments indexes
CREATE INDEX idx_appointments_customer_id ON appointments(customer_id);
CREATE INDEX idx_appointments_technician_id ON appointments(technician_id);
CREATE INDEX idx_appointments_scheduled_start ON appointments(scheduled_start);
CREATE INDEX idx_appointments_status ON appointments(status);

-- Notifications indexes
CREATE INDEX idx_notifications_customer_id ON notifications(customer_id);
CREATE INDEX idx_notifications_recipient_id ON notifications(recipient_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);
CREATE INDEX idx_notifications_created_at ON notifications(created_at);

-- =============================================
-- ROW LEVEL SECURITY POLICIES
-- =============================================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE family_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE device_status_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE push_tokens ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR ALL USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'technician')
    )
  );

-- Customers policies  
CREATE POLICY "Customers can view own data" ON customers
  FOR ALL USING (
    profile_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM family_members fm
      WHERE fm.customer_id = customers.id AND fm.profile_id = auth.uid()
    )
  );

CREATE POLICY "Staff can view all customers" ON customers
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'technician')
    )
  );

-- Family members policies
CREATE POLICY "Family members can view related data" ON family_members
  FOR ALL USING (
    profile_id = auth.uid() OR
    customer_id IN (
      SELECT customer_id FROM family_members WHERE profile_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'technician')
    )
  );

-- Devices policies
CREATE POLICY "Customers can view own devices" ON devices
  FOR ALL USING (
    customer_id IN (
      SELECT id FROM customers WHERE profile_id = auth.uid()
      UNION
      SELECT customer_id FROM family_members WHERE profile_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'technician')
    )
  );

-- Support tickets policies
CREATE POLICY "Customers can view own tickets" ON support_tickets
  FOR ALL USING (
    customer_id IN (
      SELECT id FROM customers WHERE profile_id = auth.uid()
      UNION
      SELECT customer_id FROM family_members WHERE profile_id = auth.uid()
    ) OR
    assigned_to = auth.uid() OR
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'technician')
    )
  );

-- =============================================
-- FUNCTIONS & TRIGGERS
-- =============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_devices_updated_at BEFORE UPDATE ON devices
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_support_tickets_updated_at BEFORE UPDATE ON support_tickets
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON appointments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to handle user registration
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ language 'plpgsql' security definer;

-- Trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- =============================================
-- SEED DATA
-- =============================================

-- Insert device categories
INSERT INTO device_categories (name, description, icon) VALUES
  ('Security Camera', 'Indoor and outdoor security cameras', '📹'),
  ('Smart Lock', 'Electronic door locks and access control', '🔒'),
  ('Thermostat', 'Smart temperature control systems', '🌡️'),
  ('Smoke Detector', 'Fire and smoke detection devices', '🚨'),
  ('Motion Sensor', 'Movement detection sensors', '👀'),
  ('Smart Switch', 'Light switches and electrical controls', '💡'),
  ('Hub', 'Central control hubs and bridges', '🏠'),
  ('Doorbell', 'Video doorbells and intercoms', '🔔');

-- Insert subscription plans
INSERT INTO subscription_plans (name, description, price_monthly, price_yearly, features, max_devices, support_response_time, is_active) VALUES
  (
    'Light',
    'Basic home monitoring with essential devices',
    4900, -- $49/month
    49000, -- $490/year (2 months free)
    '["Basic device monitoring", "Email support", "Monthly check-ins", "Basic troubleshooting guides"]',
    10,
    '24h',
    TRUE
  ),
  (
    'Core',
    'Enhanced home automation with priority support',
    9900, -- $99/month
    99000, -- $990/year
    '["Advanced device monitoring", "Priority email/phone support", "Bi-weekly check-ins", "Remote troubleshooting", "Family sharing (up to 3 members)", "Device health alerts"]',
    25,
    '4h',
    TRUE
  ),
  (
    'Aura',
    'Premium concierge service with full automation',
    19900, -- $199/month
    199000, -- $1990/year
    '["Premium device monitoring", "24/7 phone support", "Weekly check-ins", "On-site support included", "Unlimited family sharing", "Proactive maintenance", "Emergency response", "Smart home optimization"]',
    100,
    '1h',
    TRUE
  );

-- Insert notification templates
INSERT INTO notification_templates (name, subject, body_text, notification_type, is_active) VALUES
  ('welcome_email', 'Welcome to Dwella!', 'Welcome to Dwella! Your smart home is now protected and monitored 24/7.', 'email', TRUE),
  ('device_offline', 'Device Offline Alert', 'One of your devices has gone offline. We''re monitoring the situation.', 'push', TRUE),
  ('low_battery', 'Low Battery Warning', 'Device battery is running low and needs attention.', 'sms', TRUE),
  ('appointment_reminder', 'Upcoming Service Appointment', 'You have a service appointment scheduled tomorrow.', 'email', TRUE),
  ('support_ticket_created', 'Support Request Received', 'We''ve received your support request and will respond soon.', 'email', TRUE);
