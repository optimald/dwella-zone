# 🚀 Dwella.zone Deployment Guide

## ✅ Current Status

### 🗃️ Database (Supabase)
- **Project ID**: `zknzknbeyotdqymoullk`
- **Project URL**: https://supabase.com/dashboard/project/zknzknbeyotdqymoullk
- **Status**: ✅ **DEPLOYED** - Schema successfully pushed
- **Tables Created**: 15+ tables with Row Level Security
- **Features**: Authentication, subscriptions, devices, support tickets, notifications

### 🌐 Frontend (Vercel)
- **Status**: ✅ **DEPLOYED**
- **Production URL**: https://web-ox45aiq12-optimaldev.vercel.app
- **Project**: optimaldev/web
- **Settings**: https://vercel.com/optimaldev/web/settings

### 📂 Repository Setup
- **Status**: ⚠️ **PENDING** - GitHub CLI authentication needed
- **Local Git**: ✅ Configured with commits ready
- **Email**: badger@slickrockholdings.com

---

## 🔧 Environment Variables Needed

### For Supabase Project
```bash
# Get these from: https://supabase.com/dashboard/project/zknzknbeyotdqymoullk/settings/api
NEXT_PUBLIC_SUPABASE_URL=https://zknzknbeyotdqymoullk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_from_supabase
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_from_supabase
```

### For Vercel Deployment
Add these environment variables in Vercel dashboard:
- **Dashboard**: https://vercel.com/optimaldev/web/settings/environment-variables
- **Contact Email**: `hello@dwella.zone`

---

## 📋 Next Steps to Complete Setup

### 1. GitHub Repository Setup
Since GitHub CLI authentication was interrupted, you can:

**Option A: Manual GitHub Setup**
1. Go to https://github.com/new
2. Create repository named `dwella-zone`
3. Set description: "Smart Home Service Platform - Premium digital experience for Dwella customers and staff"
4. Make it public
5. Run these commands:
```bash
git remote add origin https://github.com/YOUR_USERNAME/dwella-zone.git
git branch -M main
git push -u origin main
```

**Option B: Complete GitHub CLI Auth**
```bash
gh auth login --web
# Complete the browser authentication
gh repo create dwella-zone --public --description "Smart Home Service Platform"
git remote add origin https://github.com/YOUR_USERNAME/dwella-zone.git
git push -u origin main
```

### 2. Configure Environment Variables

**In Supabase Dashboard**:
1. Go to https://supabase.com/dashboard/project/zknzknbeyotdqymoullk/settings/api
2. Copy your project URL and anon key
3. Update Vercel environment variables

**In Vercel Dashboard**:
1. Go to https://vercel.com/optimaldev/web/settings/environment-variables
2. Add the Supabase environment variables
3. Add other service keys as needed

### 3. Set Up Custom Domain (Optional)
1. In Vercel dashboard, go to Domains section
2. Add `dwella.zone` domain
3. Configure DNS settings

### 4. Configure Supabase Auth Settings
1. Go to https://supabase.com/dashboard/project/zknzknbeyotdqymoullk/auth/url-configuration
2. Set Site URL to your Vercel domain
3. Add redirect URLs for auth callbacks

---

## 🎨 Design Features Implemented

### ✅ Brand Integration
- **Logo**: Integrated throughout the application
- **Color Palette**: Gold/bronze theme matching the shield logo
- **Typography**: Inter font family for premium feel
- **PWA**: Manifest and meta tags configured

### ✅ Homepage Features
- Hero section with logo and brand messaging
- Three-tier package cards (Light/Core/Aura)
- Trust badges and social proof
- Contact forms with hello@dwella.zone
- Responsive design with premium animations

### ✅ Database Schema
- Complete customer management system
- Device monitoring and status tracking
- Support ticket system with threading
- Family account sharing
- Subscription billing integration
- Notification system
- Document storage
- Activity logging

---

## 🔗 Important Links

- **Supabase Dashboard**: https://supabase.com/dashboard/project/zknzknbeyotdqymoullk
- **Vercel Dashboard**: https://vercel.com/optimaldev/web
- **Production Site**: https://web-ox45aiq12-optimaldev.vercel.app
- **Contact Email**: hello@dwella.zone

---

## 📱 Mobile App Setup (Next Phase)

The React Native mobile app structure is ready in `apps/mobile/`. To set it up:

1. Install React Native CLI
2. Set up iOS/Android development environment  
3. Configure push notifications
4. Add biometric authentication
5. Implement offline mode

---

## 🔧 Additional Integrations (Future)

### Stripe Setup
1. Create Stripe account
2. Set up products for Light/Core/Aura plans
3. Configure webhooks
4. Add environment variables

### Smart Device APIs
- Ring API integration
- Nest/Google API setup  
- Kasa/TP-Link integration
- August locks API

### Communication Services
- Twilio for SMS notifications
- Resend for email templates
- Google Calendar for scheduling

---

## 🆘 Support

For technical issues, check:
1. Supabase logs in dashboard
2. Vercel deployment logs
3. Browser console for client errors

Contact: badger@slickrockholdings.com 