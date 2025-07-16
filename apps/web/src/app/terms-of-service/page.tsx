import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Terms of
            <span className="text-dwella-gold block">Service</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-slate-400">
            Last updated: July 16, 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
              <p className="text-slate-300 mb-6">
                By accessing and using Dwella.zone services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">2. Description of Service</h2>
              <p className="text-slate-300 mb-6">
                Dwella provides smart home installation, monitoring, and support services. Our services include but are not limited to:
              </p>
              <ul className="text-slate-300 mb-6 list-disc pl-6 space-y-2">
                <li>Smart home device installation and configuration</li>
                <li>24/7 monitoring and support services</li>
                <li>Mobile application access</li>
                <li>Technical support and troubleshooting</li>
                <li>System maintenance and updates</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">3. User Responsibilities</h2>
              <p className="text-slate-300 mb-4">You agree to:</p>
              <ul className="text-slate-300 mb-6 list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service only for lawful purposes</li>
                <li>Not interfere with or disrupt the service</li>
                <li>Maintain adequate internet connectivity for service operation</li>
                <li>Allow necessary access for installation and maintenance</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">4. Payment Terms</h2>
              <p className="text-slate-300 mb-4">
                Payment for services is due according to the terms specified in your service agreement:
              </p>
              <ul className="text-slate-300 mb-6 list-disc pl-6 space-y-2">
                <li>Installation fees are due upon completion of installation</li>
                <li>Monthly service fees are billed in advance</li>
                <li>Late payments may result in service suspension</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">5. Privacy and Data Protection</h2>
              <p className="text-slate-300 mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
                to understand our practices regarding the collection and use of your information.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">6. Service Availability</h2>
              <p className="text-slate-300 mb-6">
                While we strive to maintain high service availability, we do not guarantee uninterrupted service. 
                Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">7. Limitation of Liability</h2>
              <p className="text-slate-300 mb-6">
                Dwella shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including but not limited to loss of profits, data, or use, arising out of or relating to the service.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">8. Warranty and Support</h2>
              <p className="text-slate-300 mb-4">
                Our warranty and support terms are as follows:
              </p>
              <ul className="text-slate-300 mb-6 list-disc pl-6 space-y-2">
                <li>Hardware warranty: 1-3 years depending on package</li>
                <li>Software updates and security patches included</li>
                <li>Technical support according to your package level</li>
                <li>Remote troubleshooting and maintenance included</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">9. Termination</h2>
              <p className="text-slate-300 mb-6">
                Either party may terminate this agreement with 30 days written notice. Upon termination, 
                you will remain responsible for any outstanding payments and we will assist with service discontinuation.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">10. Governing Law</h2>
              <p className="text-slate-300 mb-6">
                This agreement shall be governed by and construed in accordance with the laws of the state of California, 
                without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">11. Changes to Terms</h2>
              <p className="text-slate-300 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. 
                Your continued use of the service constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">12. Contact Information</h2>
              <p className="text-slate-300 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
                <p className="text-slate-300">
                  <strong>Dwella.zone</strong><br />
                  Email: legal@dwella.zone<br />
                  Phone: (555) 123-4567<br />
                  Address: 123 Smart Home Way, San Francisco, CA 94102
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Our
            <span className="text-dwella-gold block">Terms?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Our team is here to help clarify any questions about our terms of service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support"
              className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/privacy-policy"
              className="border border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 