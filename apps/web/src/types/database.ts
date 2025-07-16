export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          avatar_url: string | null
          role: 'customer' | 'admin' | 'technician'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          phone?: string | null
          avatar_url?: string | null
          role?: 'customer' | 'admin' | 'technician'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          phone?: string | null
          avatar_url?: string | null
          role?: 'customer' | 'admin' | 'technician'
          created_at?: string
          updated_at?: string
        }
      }
      customers: {
        Row: {
          id: string
          profile_id: string
          address_line1: string
          address_line2: string | null
          city: string
          state: string
          zip_code: string
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          install_date: string | null
          package_tier: 'Light' | 'Core' | 'Aura'
          status: 'active' | 'inactive' | 'suspended'
          stripe_customer_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          address_line1: string
          address_line2?: string | null
          city: string
          state: string
          zip_code: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          install_date?: string | null
          package_tier?: 'Light' | 'Core' | 'Aura'
          status?: 'active' | 'inactive' | 'suspended'
          stripe_customer_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          address_line1?: string
          address_line2?: string | null
          city?: string
          state?: string
          zip_code?: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          install_date?: string | null
          package_tier?: 'Light' | 'Core' | 'Aura'
          status?: 'active' | 'inactive' | 'suspended'
          stripe_customer_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      devices: {
        Row: {
          id: string
          customer_id: string
          category_id: string | null
          brand: string
          model: string
          serial_number: string | null
          device_name: string
          location: string | null
          api_type: string | null
          api_device_id: string | null
          install_date: string | null
          warranty_expiry: string | null
          status: 'online' | 'offline' | 'maintenance' | 'error'
          last_ping: string | null
          battery_level: number | null
          metadata: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          category_id?: string | null
          brand: string
          model: string
          serial_number?: string | null
          device_name: string
          location?: string | null
          api_type?: string | null
          api_device_id?: string | null
          install_date?: string | null
          warranty_expiry?: string | null
          status?: 'online' | 'offline' | 'maintenance' | 'error'
          last_ping?: string | null
          battery_level?: number | null
          metadata?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          category_id?: string | null
          brand?: string
          model?: string
          serial_number?: string | null
          device_name?: string
          location?: string | null
          api_type?: string | null
          api_device_id?: string | null
          install_date?: string | null
          warranty_expiry?: string | null
          status?: 'online' | 'offline' | 'maintenance' | 'error'
          last_ping?: string | null
          battery_level?: number | null
          metadata?: Json
          created_at?: string
          updated_at?: string
        }
      }
      support_tickets: {
        Row: {
          id: string
          customer_id: string
          created_by: string
          assigned_to: string | null
          title: string
          description: string
          category: 'general' | 'device_issue' | 'installation' | 'billing' | 'emergency'
          priority: 'low' | 'medium' | 'high' | 'urgent'
          status: 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed'
          device_id: string | null
          resolution: string | null
          created_at: string
          updated_at: string
          resolved_at: string | null
        }
        Insert: {
          id?: string
          customer_id: string
          created_by: string
          assigned_to?: string | null
          title: string
          description: string
          category?: 'general' | 'device_issue' | 'installation' | 'billing' | 'emergency'
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          status?: 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed'
          device_id?: string | null
          resolution?: string | null
          created_at?: string
          updated_at?: string
          resolved_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string
          created_by?: string
          assigned_to?: string | null
          title?: string
          description?: string
          category?: 'general' | 'device_issue' | 'installation' | 'billing' | 'emergency'
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          status?: 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed'
          device_id?: string | null
          resolution?: string | null
          created_at?: string
          updated_at?: string
          resolved_at?: string | null
        }
      }
      appointments: {
        Row: {
          id: string
          customer_id: string
          technician_id: string | null
          ticket_id: string | null
          appointment_type: 'installation' | 'maintenance' | 'repair' | 'upgrade' | 'consultation'
          scheduled_start: string
          scheduled_end: string
          actual_start: string | null
          actual_end: string | null
          status: 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'no_show'
          notes: string | null
          google_calendar_event_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          technician_id?: string | null
          ticket_id?: string | null
          appointment_type?: 'installation' | 'maintenance' | 'repair' | 'upgrade' | 'consultation'
          scheduled_start: string
          scheduled_end: string
          actual_start?: string | null
          actual_end?: string | null
          status?: 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'no_show'
          notes?: string | null
          google_calendar_event_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          technician_id?: string | null
          ticket_id?: string | null
          appointment_type?: 'installation' | 'maintenance' | 'repair' | 'upgrade' | 'consultation'
          scheduled_start?: string
          scheduled_end?: string
          actual_start?: string | null
          actual_end?: string | null
          status?: 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'no_show'
          notes?: string | null
          google_calendar_event_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          customer_id: string
          plan_id: string
          stripe_subscription_id: string | null
          status: 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid'
          current_period_start: string | null
          current_period_end: string | null
          trial_end: string | null
          canceled_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          plan_id: string
          stripe_subscription_id?: string | null
          status?: 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid'
          current_period_start?: string | null
          current_period_end?: string | null
          trial_end?: string | null
          canceled_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          plan_id?: string
          stripe_subscription_id?: string | null
          status?: 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid'
          current_period_start?: string | null
          current_period_end?: string | null
          trial_end?: string | null
          canceled_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      subscription_plans: {
        Row: {
          id: string
          name: string
          description: string | null
          price_monthly: number
          price_yearly: number | null
          features: Json
          max_devices: number | null
          support_response_time: string | null
          stripe_price_id: string | null
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price_monthly: number
          price_yearly?: number | null
          features?: Json
          max_devices?: number | null
          support_response_time?: string | null
          stripe_price_id?: string | null
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price_monthly?: number
          price_yearly?: number | null
          features?: Json
          max_devices?: number | null
          support_response_time?: string | null
          stripe_price_id?: string | null
          is_active?: boolean
          created_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          customer_id: string
          recipient_id: string | null
          template_id: string | null
          title: string
          message: string
          notification_type: 'email' | 'sms' | 'push' | 'in_app'
          is_read: boolean
          sent_at: string | null
          read_at: string | null
          metadata: Json
          created_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          recipient_id?: string | null
          template_id?: string | null
          title: string
          message: string
          notification_type: 'email' | 'sms' | 'push' | 'in_app'
          is_read?: boolean
          sent_at?: string | null
          read_at?: string | null
          metadata?: Json
          created_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          recipient_id?: string | null
          template_id?: string | null
          title?: string
          message?: string
          notification_type?: 'email' | 'sms' | 'push' | 'in_app'
          is_read?: boolean
          sent_at?: string | null
          read_at?: string | null
          metadata?: Json
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 