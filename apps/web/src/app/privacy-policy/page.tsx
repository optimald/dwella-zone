import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#161C20]">
      {/* Navigation */}
      <nav className="border-b border-[#d18c52]/20 bg-[#161C20]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/dwell_zone_icon.png" alt="Dwella" className="h-8 w-8" />
              <span className="text-xl font-bold text-white">Dwella</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-xl text-gray-300 hover:text-[#d18c52] px-3 py-2 transition-colors">
                  Home
                </Link>
                <Link href="/#packages" className="text-xl text-gray-300 hover:text-[#d18c52] px-3 py-2 transition-colors">
                  Packages
                </Link>
                <Link href="/contact" className="text-xl text-gray-300 hover:text-[#d18c52] px-3 py-2 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-invert prose-lg mx-auto max-w-none">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="text-xl text-gray-300 mb-12">
            <p><strong>Effective Date:</strong> January 1, 2025</p>
            <p><strong>Last Updated:</strong> January 1, 2025</p>
          </div>

          <div className="space-y-12 text-gray-300">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">1. Introduction</h2>
              <div className="space-y-4 text-xl leading-relaxed">
                <p>
                  Welcome to Dwella.zone ("Dwella," "we," "us," or "our"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our smart home installation and support services, website, and mobile applications.
                </p>
                <p>
                  At Dwella, we understand that your home is your sanctuary, and we take the responsibility of protecting your privacy seriously. This policy applies to all services provided by Dwella, including our website, mobile applications, and in-home services.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">2. Information We Collect</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-[#d18c52] mb-4">2.1 Personal Information</h3>
                  <div className="space-y-3 text-xl leading-relaxed">
                    <p>We may collect the following personal information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name, email address, phone number, and mailing address</li>
                      <li>Billing and payment information (processed securely through Stripe)</li>
                      <li>Emergency contact information and family member details</li>
                      <li>Home address and property information</li>
                      <li>Service preferences and accessibility needs</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#d18c52] mb-4">2.2 Smart Home Device Information</h3>
                  <div className="space-y-3 text-xl leading-relaxed">
                    <p>With your consent, we may collect:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Device status, configuration, and usage data</li>
                      <li>Device serial numbers and model information</li>
                      <li>Network connectivity status and performance metrics</li>
                      <li>Diagnostic and troubleshooting information</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#d18c52] mb-4">2.3 Usage and Technical Information</h3>
                  <div className="space-y-3 text-xl leading-relaxed">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Website and app usage patterns and preferences</li>
                      <li>IP address, browser type, and device information</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Support ticket history and communication logs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">3. How We Use Your Information</h2>
              <div className="space-y-4 text-xl leading-relaxed">
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Provide, maintain, and improve our smart home installation and support services</li>
                  <li>Process payments and manage your subscription</li>
                  <li>Communicate with you about services, appointments, and support</li>
                  <li>Monitor device performance and provide proactive support</li>
                  <li>Ensure the security and proper functioning of your smart home devices</li>
                  <li>Comply with legal obligations and protect our rights</li>
                  <li>Improve our services based on usage patterns and feedback</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">4. Information Sharing and Disclosure</h2>
              <div className="space-y-6">
                <div className="space-y-4 text-xl leading-relaxed">
                  <p>We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#d18c52] mb-3">4.1 Service Providers</h3>
                    <p className="text-xl leading-relaxed">We work with trusted third-party service providers who assist us in operating our services, including payment processing (Stripe), database hosting (Supabase), and communication services (Twilio).</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#d18c52] mb-3">4.2 Family Members and Authorized Users</h3>
                    <p className="text-xl leading-relaxed">With your explicit consent, we may share account information with family members or caregivers you've authorized to access your account.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#d18c52] mb-3">4.3 Legal Requirements</h3>
                    <p className="text-xl leading-relaxed">We may disclose information when required by law, court order, or to protect the rights, property, or safety of Dwella, our users, or others.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">5. Data Security</h2>
              <div className="space-y-4 text-xl leading-relaxed">
                <p>
                  We implement industry-standard security measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure authentication and access controls</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Employee training on data protection practices</li>
                  <li>Compliance with applicable data protection regulations</li>
                </ul>
                <p>
                  While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to maintaining the highest standards of data protection.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">6. Data Retention</h2>
              <div className="space-y-4 text-xl leading-relaxed">
                <p>
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Specifically:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Account information: Retained while your account is active and for 7 years after closure for legal and business purposes</li>
                  <li>Device data: Retained for the duration of service and 2 years thereafter for warranty and support purposes</li>
                  <li>Communication records: Retained for 3 years for quality assurance and legal compliance</li>
                  <li>Payment information: Retained as required by financial regulations and tax laws</li>
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">7. Your Privacy Rights</h2>
              <div className="space-y-4 text-xl leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correct:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Delete:</strong> Request deletion of your personal information (subject to legal and contractual obligations)</li>
                  <li><strong>Restrict:</strong> Request restriction of processing in certain circumstances</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at <a href="mailto:privacy@dwella.zone" className="text-[#d18c52] hover:underline">privacy@dwella.zone</a> or call us at (555) 123-4567.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">8. Cookies and Tracking</h2>
              <div className="space-y-4 text-xl leading-relaxed">
                <p>
                  We use cookies and similar technologies to enhance your experience on our website and mobile applications. These technologies help us:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website usage and performance</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
                <p>
                  You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our services.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">9. Children's Privacy</h2>
              <div className="space-y-4 text-xl leading-relaxed">
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">10. Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-xl leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending an email notification to registered users</li>
                  <li>Displaying a prominent notice on our platform</li>
                </ul>
                <p>
                  Your continued use of our services after the effective date of the updated Privacy Policy constitutes acceptance of the changes.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">11. Contact Us</h2>
              <div className="space-y-4 text-xl leading-relaxed">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-[#1F2937] p-6 rounded-lg border border-[#d18c52]/20">
                  <p><strong>Email:</strong> <a href="mailto:privacy@dwella.zone" className="text-[#d18c52] hover:underline">privacy@dwella.zone</a></p>
                  <p><strong>Phone:</strong> (555) 123-4567</p>
                  <p><strong>Mail:</strong></p>
                  <p>Dwella Privacy Team<br />
                  123 Tech Street<br />
                  San Francisco, CA 94105</p>
                </div>
                <p>
                  We are committed to addressing your privacy concerns promptly and will respond to your inquiries within 30 days.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#d18c52]/20 bg-[#0F1419]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/dwell_zone_icon.png" alt="Dwella" className="h-8 w-8" />
                <span className="text-xl font-bold text-white">Dwella</span>
              </div>
              <p className="text-lg text-gray-300">
                Peace of mind at home. Professional smart home installation and lifetime support for the modern family.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-base text-gray-300">
                <li><Link href="/#packages" className="hover:text-[#d18c52] transition-colors">Light Package</Link></li>
                <li><Link href="/#packages" className="hover:text-[#d18c52] transition-colors">Core Package</Link></li>
                <li><Link href="/#packages" className="hover:text-[#d18c52] transition-colors">Aura Package</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-base text-gray-300">
                <li><Link href="/privacy-policy" className="hover:text-[#d18c52] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#d18c52] transition-colors">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-[#d18c52] transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-[#d18c52]/20">
            <p className="text-center text-base text-gray-400">
              © 2025 Dwella.zone. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 