import { Shield, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const warrantyTiers = [
  {
    package: 'Light',
    duration: '1 Year',
    coverage: [
      'Hardware defects and malfunctions',
      'Software issues and bugs',
      'Installation-related problems',
      'Basic troubleshooting support'
    ],
    exclusions: [
      'Physical damage from misuse',
      'Damage from power surges',
      'Unauthorized modifications',
      'Normal wear and tear'
    ]
  },
  {
    package: 'Core',
    duration: '2 Years',
    coverage: [
      'Everything in Light warranty',
      'Extended hardware coverage',
      'Priority replacement service',
      'Advanced troubleshooting',
      'Remote diagnostics included'
    ],
    exclusions: [
      'Physical damage from misuse',
      'Damage from power surges',
      'Unauthorized modifications',
      'Normal wear and tear'
    ]
  },
  {
    package: 'Aura',
    duration: '3 Years',
    coverage: [
      'Everything in Core warranty',
      'Comprehensive system coverage',
      'Express replacement service',
      'Concierge support included',
      'Preventive maintenance visits'
    ],
    exclusions: [
      'Physical damage from misuse',
      'Damage from power surges',
      'Unauthorized modifications',
      'Normal wear and tear'
    ]
  }
]

const refundPolicies = [
  {
    type: 'Installation Services',
    policy: 'Full refund if installation cannot be completed due to technical incompatibility or our inability to provide service.',
    timeframe: 'Within 30 days of scheduled installation',
    conditions: [
      'Must be requested before installation begins',
      'Technical assessment required',
      'No refund for completed installations'
    ]
  },
  {
    type: 'Monthly Service',
    policy: 'Pro-rated refund for unused portion of monthly service if cancelled mid-cycle.',
    timeframe: 'Within 7 days of cancellation',
    conditions: [
      'Written cancellation notice required',
      'Equipment must be returned in good condition',
      'Processing fee may apply'
    ]
  },
  {
    type: 'Hardware Purchases',
    policy: '30-day return policy for unopened hardware. Opened hardware subject to 15% restocking fee.',
    timeframe: 'Within 30 days of purchase',
    conditions: [
      'Original packaging required for full refund',
      'Must be in original condition',
      'Return shipping costs customer responsibility'
    ]
  }
]

export default function RefundWarrantyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Refund &
            <span className="text-dwella-gold block">Warranty Policy</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            We stand behind our products and services with comprehensive warranties and fair refund policies.
          </p>
          <p className="text-sm text-slate-400">
            Last updated: July 16, 2024
          </p>
        </div>
      </section>

      {/* Warranty Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Warranty Coverage by Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {warrantyTiers.map((tier) => (
              <div key={tier.package} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.package} Package</h3>
                  <div className="text-dwella-gold font-semibold text-lg">{tier.duration} Warranty</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    What&apos;s Covered
                  </h4>
                  <ul className="space-y-2">
                    {tier.coverage.map((item) => (
                      <li key={item} className="text-slate-300 text-sm flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                    What&apos;s Not Covered
                  </h4>
                  <ul className="space-y-2">
                    {tier.exclusions.map((item) => (
                      <li key={item} className="text-slate-400 text-sm flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Warranty Claim Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-dwella-gold/20 p-4 rounded-xl inline-block mb-4">
                <div className="text-2xl font-bold text-dwella-gold">1</div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Report Issue</h3>
              <p className="text-slate-300 text-sm">Contact support through app, phone, or email to report the problem.</p>
            </div>
            <div className="text-center">
              <div className="bg-dwella-gold/20 p-4 rounded-xl inline-block mb-4">
                <div className="text-2xl font-bold text-dwella-gold">2</div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Remote Diagnosis</h3>
              <p className="text-slate-300 text-sm">Our technicians will attempt to diagnose and fix the issue remotely.</p>
            </div>
            <div className="text-center">
              <div className="bg-dwella-gold/20 p-4 rounded-xl inline-block mb-4">
                <div className="text-2xl font-bold text-dwella-gold">3</div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">On-Site Visit</h3>
              <p className="text-slate-300 text-sm">If remote fix isn&apos;t possible, we&apos;ll schedule an on-site visit.</p>
            </div>
            <div className="text-center">
              <div className="bg-dwella-gold/20 p-4 rounded-xl inline-block mb-4">
                <div className="text-2xl font-bold text-dwella-gold">4</div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Replacement</h3>
              <p className="text-slate-300 text-sm">If needed, we&apos;ll replace defective hardware at no cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Policies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Refund Policies</h2>
          <div className="space-y-8">
            {refundPolicies.map((policy) => (
              <div key={policy.type} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{policy.type}</h3>
                  <div className="bg-dwella-gold/20 px-3 py-1 rounded-full">
                    <span className="text-dwella-gold text-sm font-semibold">{policy.timeframe}</span>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">{policy.policy}</p>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Conditions:</h4>
                  <ul className="space-y-1">
                    {policy.conditions.map((condition) => (
                      <li key={condition} className="text-slate-400 text-sm flex items-start">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {condition}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Shield className="h-5 w-5 text-dwella-gold mr-2" />
                Warranty Transfer
              </h3>
              <p className="text-slate-300 text-sm">
                Warranties are transferable to new homeowners when you sell your property. 
                Contact us to update the warranty registration with new owner information.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Clock className="h-5 w-5 text-dwella-gold mr-2" />
                Response Times
              </h3>
              <p className="text-slate-300 text-sm">
                Warranty claims are processed according to your package level: 
                Light (24h), Core (4h), Aura (1h). Emergency issues are prioritized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Need to Make a Claim?</h2>
          <p className="text-slate-300 mb-8">
            Our support team is here to help you with warranty claims and refund requests.
          </p>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-dwella-gold font-semibold mb-2">Warranty Claims</h4>
                <p className="text-slate-300 text-sm">
                  Email: warranty@dwella.zone<br />
                  Phone: (555) 123-4567 ext. 2<br />
                  Response: Within 24 hours
                </p>
              </div>
              <div>
                <h4 className="text-dwella-gold font-semibold mb-2">Refund Requests</h4>
                <p className="text-slate-300 text-sm">
                  Email: refunds@dwella.zone<br />
                  Phone: (555) 123-4567 ext. 3<br />
                  Response: Within 48 hours
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
            Questions About
            <span className="text-dwella-gold block">Warranties?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Our team is here to help clarify any questions about our warranty and refund policies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support"
              className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/packages"
              className="border border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 