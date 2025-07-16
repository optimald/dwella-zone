# Dwella.zone - Smart Home Service Platform

A premium, secure digital experience for Dwella customers and staff to manage smart home installations, subscriptions, and support.

## 🏗️ Architecture

### Frontend Applications
- **Web App**: Next.js PWA with public website + client portal
- **Mobile App**: React Native for iOS/Android with full portal parity
- **Admin Dashboard**: Next.js admin interface for staff

### Backend Services
- **Database**: Supabase (PostgreSQL + Auth + Real-time)
- **Billing**: Stripe (subscriptions + payments)
- **Calendar**: Google Calendar API integration
- **Communications**: Twilio (SMS + voice alerts)
- **Smart Devices**: Ring, Nest, Kasa, August APIs

## 📁 Project Structure

```
dwella.zone/
├── apps/
│   ├── web/                 # Next.js PWA (public site + portal)
│   ├── mobile/              # React Native app
│   └── admin/               # Admin dashboard
├── packages/
│   ├── ui/                  # Shared UI components
│   ├── database/            # Supabase schema & migrations
│   ├── api/                 # Shared API clients
│   └── config/              # Shared configuration
├── docs/                    # Documentation
└── tools/                   # Build tools & scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm
- Supabase CLI
- Vercel CLI
- Stripe CLI
- GitHub CLI

### Setup
1. Clone and install dependencies:
```bash
git clone https://github.com/YOUR_USERNAME/dwella.zone
cd dwella.zone
pnpm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
# Fill in your API keys
```

3. Start development servers:
```bash
pnpm dev
```

## 🔧 Development Commands

- `pnpm dev` - Start all development servers
- `pnpm build` - Build all applications
- `pnpm test` - Run tests
- `pnpm lint` - Lint code
- `pnpm db:push` - Push database changes
- `pnpm db:reset` - Reset database

## 📱 Features

### Public Website
- Homepage with hero section and CTAs
- Package comparison (Light/Core/Aura tiers)
- Why Dwella & trust building
- Support & FAQ with live chat
- Consultation booking
- About page with testimonials
- Client login portal
- Legal pages

### Client Portal
- Magic link authentication
- Device status monitoring
- Support request system
- Visit scheduling
- Billing & payments
- Document access
- Family sharing
- Messaging with support
- Push notifications

### Mobile App
- Full portal feature parity
- Offline mode with cached guides
- Push notifications
- Biometric authentication
- QR code device scanning

### Admin Backend
- Client record management
- Ticket & scheduling system
- Manual device entry
- Invoice generation
- Emergency alert system
- Staff permission management

## 🔌 Integrations

- **Supabase**: Authentication, database, real-time updates
- **Stripe**: Billing, subscriptions, payment processing
- **Google Calendar**: Technician scheduling
- **Twilio**: SMS alerts and support
- **Smart Home APIs**: Ring, Nest, Kasa, August
- **Vercel**: Hosting and deployment

## 🛡️ Security

- Row-level security with Supabase
- Magic link authentication
- Family account permissions
- Encrypted data storage
- GDPR compliant

## 📞 Support

For technical support, contact the development team or check the documentation in `/docs`. 