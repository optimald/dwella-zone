import { Check, X } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const packages = [
  {
    name: 'Light',
    description: 'Essential smart home security',
    price: '$299',
    installTime: '2-3 hours',
    features: [
      'Smart doorbell with video',
      '2 outdoor security cameras',
      'Smart locks (2 doors)',
      'Mobile app access',
      '24/7 monitoring',
      'Basic support (email)',
      '1-year warranty'
    ],
    notIncluded: [
      'Indoor cameras',
      'Smart thermostats',
      'Lighting automation',
      'Voice assistant integration',
      'Advanced analytics'
    ],
    popular: false
  },
  {
    name: 'Core',
    description: 'Complete home automation',
    price: '$599',
    installTime: '4-6 hours',
    features: [
      'Everything in Light',
      '4 outdoor cameras',
      '2 indoor cameras',
      'Smart thermostat',
      'Smart lighting (5 rooms)',
      'Voice assistant setup',
      'Priority support (phone)',
      '2-year warranty',
      'Monthly health check'
    ],
    notIncluded: [
      'Advanced analytics',
      'Custom automation rules',
      'Professional monitoring'
    ],
    popular: true
  },
  {
    name: 'Aura',
    description: 'Premium concierge experience',
    price: '$999',
    installTime: '6-8 hours',
    features: [
      'Everything in Core',
      'Unlimited cameras',
      'Whole-home lighting',
      'Advanced automation',
      'Professional monitoring',
      'Concierge support',
      '3-year warranty',
      'Weekly health checks',
      'Custom integrations',
      'Family portal access'
    ],
    notIncluded: [],
    popular: false
  }
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your
            <span className="text-dwella-gold block">Peace of Mind</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            From essential security to complete home automation, we have a package that fits your lifestyle and budget.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  pkg.popular
                    ? 'border-dwella-gold shadow-2xl shadow-dwella-gold/20'
                    : 'border-slate-700'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-dwella-gold text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-slate-400 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-dwella-gold mb-2">{pkg.price}</div>
                  <div className="text-sm text-slate-500">Install time: {pkg.installTime}</div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {pkg.notIncluded.length > 0 && (
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">Not Included:</h4>
                    {pkg.notIncluded.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <X className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                        <span className="text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href="/book-consultation"
                  className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-dwella-gold text-slate-900 hover:bg-dwella-gold/90'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Breakdown */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Monthly Support Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-dwella-gold mb-4">Light</h3>
              <ul className="text-slate-300 space-y-2 text-left">
                <li>• Email support (24h response)</li>
                <li>• Basic troubleshooting</li>
                <li>• App updates</li>
                <li>• Security patches</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-dwella-gold">
              <h3 className="text-xl font-semibold text-dwella-gold mb-4">Core</h3>
              <ul className="text-slate-300 space-y-2 text-left">
                <li>• Phone support (4h response)</li>
                <li>• Remote troubleshooting</li>
                <li>• Monthly health checks</li>
                <li>• Priority updates</li>
                <li>• Device optimization</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-dwella-gold mb-4">Aura</h3>
              <ul className="text-slate-300 space-y-2 text-left">
                <li>• Concierge support (1h response)</li>
                <li>• Weekly health checks</li>
                <li>• Custom automation setup</li>
                <li>• Family portal management</li>
                <li>• Proactive monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience
            <span className="text-dwella-gold block">Peace of Mind?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Book a free consultation to discuss your needs and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-consultation"
              className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/why-dwella"
              className="border border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              Learn More About Dwella
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 