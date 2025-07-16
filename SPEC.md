**Project:** Dwella.zone Website + Client Portal + Mobile App

**Objective:** Build a premium, secure, and seamless digital experience for Dwella customers and staff to manage installation requests, subscriptions, home automation insights, and service.

---

## ✨ BRAND POSITIONING

* Calm, high-trust, concierge experience
* Targeting older, affluent homeowners + their adult children
* Simple UX, readable typography, clean layout
* Responsive across web and mobile

---

## 🏠 PUBLIC WEBSITE (Next.js PWA)

### 1. Homepage

* Hero: "Peace of Mind at Home. Installed, Supported, Protected."
* CTA: \["Book a Consultation"] \["See Packages"]
* Video background or animation showing smart home in use
* Trust badges (licensed, insured, verified partners)

### 2. Packages Page

* 3 Tiers: Light / Core / Aura
* Feature comparison table
* Estimated install time
* Monthly support breakdown
* "What's Included" collapsible section

### 3. Why Dwella

* Explains PeaceTech philosophy
* Caregiver benefits: remote support, alerts
* Device quality guarantee
* Support response SLAs

### 4. Support + FAQ

* Live chat widget
* Troubleshooting common issues
* Downloadable PDF guides per package

### 5. Book Consultation

* Calendar embed (Calendly or custom)
* Form: Address, service needs, preferred time
* Optional: Upload floorplan/images

### 6. About / Trust Page

* Founder bio
* Licensing and insurance details
* Testimonials / Reviews
* Verified installer badge

### 7. Client Login

* Link to client portal

### 8. Legal Pages

* Terms of Service
* Privacy Policy
* Refund + Warranty Policy

---

## 🏦 CLIENT PORTAL (Web + iOS + Android App)

**Stack:** Supabase (auth + db), Stripe (billing), Next.js (PWA), React Native (mobile)

### 1. Auth

* Magic link or phone login
* Family sub-accounts (e.g., adult children)

### 2. Dashboard (Post-login)

* Home Summary: Connected devices, install date
* Support plan tier + expiration date
* Alerts: Low battery, offline device, scheduled checkups

### 3. Device Status (Read-only)

* Pull from supported APIs (Nest, Ring, Kasa)
* Status: Online/offline, last check-in
* QR scan to add new device to system

### 4. Request Help

* New request form
* Auto-suggested troubleshooting
* Optional photo/video upload
* Status tracker

### 5. Schedule a Visit

* Select available times (linked to field technician calendar)
* Type of visit: Maintenance, Upgrade, Repair
* Appointment reminders

### 6. Billing + Payments

* View current plan + invoice history
* Update card
* Upgrade or downgrade plan
* Add payment method (Apple Pay / GPay supported)

### 7. Documents

* Download signed contracts
* Install checklist
* Personalized device map

### 8. Family Portal

* Share access with children or trusted contacts
* Read-only or full control access levels
* Emergency contact flag

### 9. Messaging

* Async thread with Dwella support
* Escalation to phone/text if urgent
* Log of past issues

### 10. App Settings

* Notification preferences
* Auto-logout timeout
* PIN + biometrics

---

## ✨ APP REQUIREMENTS (iOS + Android)

* React Native for shared codebase
* Full parity with web portal
* Offline mode (cached instructions + PDF guides)
* Push notifications (service visits, battery alerts)

---

## ⚙️ ADMIN BACKEND

* View all client records
* View open tickets + schedule
* Manual device entry (brand, serial, install date)
* Invoice generator + Stripe integration
* Push emergency alert to specific client
* Manage support staff + permissions

---

## ✨ INTEGRATIONS

* Stripe (billing + subscriptions)
* Supabase (auth + real-time updates)
* Google Calendar API (scheduling)
* Smart device APIs (Ring, Nest, Kasa, August, etc.)
* Twilio (text support + alerts)

---

## ⌚ BUILD TIMELINE (Suggested)

* Week 1–2: Finalize copy, design mockups, domain + branding assets
* Week 3–4: PWA + portal MVP (Next.js, Supabase, Stripe, Auth)
* Week 5: iOS/Android beta build, device API scaffolding
* Week 6: Testing, internal onboarding, seed installs
* Week 7: Launch phase

---

Let me know when you want the full UI wireframes or app icon concepts mocked up.
