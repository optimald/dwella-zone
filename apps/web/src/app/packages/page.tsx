import { Check, Shield, Zap, Heart, Wrench, Settings, Wifi, Users, Star, ShieldCheck, Home, Phone, MessageSquare, WifiOff } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const coreFoundation = {
  name: 'Core Foundation',
  description: 'Required foundation for all smart home solutions',
  price: '$79',
  installTime: '3-4 hours',
  features: [
    'Smart home hub & mobile app',
    'Professional installation & training',
    'Essential smart devices (3-5)',
    'Basic automation setup',
    'Email & chat support',
    'Monthly system health check',
    '1-year warranty',
    'Family sharing (up to 4 members)'
  ],
  icon: ShieldCheck
}

const modules = [
  {
    name: 'Security Pack',
    description: 'Complete home protection & monitoring',
    price: '$49',
    installTime: '2-3 hours',
    icon: Shield,
    features: [
      '4K outdoor security cameras (2-4)',
      'Smart doorbell with video',
      'Smart locks for all exterior doors',
      'Glass break & window sensors',
      'Motion detection & alerts',
      '24/7 professional monitoring',
      'Mobile app notifications',
      'Cloud video storage (30 days)'
    ],
    addOns: [
      'Indoor cameras',
      'Advanced motion analytics',
      'Facial recognition',
      'Extended video storage'
    ]
  },
  {
    name: 'Comfort Pack',
    description: 'Climate control & lighting automation',
    price: '$39',
    installTime: '2-3 hours',
    icon: Zap,
    features: [
      'Smart thermostat with scheduling',
      'Smart lighting (5-8 rooms)',
      'Automated shades & blinds',
      'Smart plugs for appliances',
      'Voice control integration',
      'Energy usage monitoring',
      'Automated scenes (morning/evening)',
      'Vacation mode automation'
    ],
    addOns: [
      'Whole-home lighting',
      'Advanced climate zones',
      'Energy optimization',
      'Custom automation rules'
    ]
  },
  {
    name: 'Health & Safety Pack',
    description: 'Wellness monitoring & emergency alerts',
    price: '$29',
    installTime: '1-2 hours',
    icon: Heart,
    features: [
      'Air quality monitoring (CO₂, VOCs)',
      'Temperature & humidity sensors',
      'Water leak detection',
      'Smoke & CO detectors',
      'Fall detection sensors',
      'Emergency button system',
      'Health alerts & notifications',
      'Family member tracking'
    ],
    addOns: [
      'Advanced health monitoring',
      'Medical device integration',
      'Caregiver notifications',
      'Wellness reporting'
    ]
  },
  {
    name: 'Integration & Setup Pack',
    description: 'Device integration & tech support',
    price: '$59',
    installTime: '3-4 hours',
    icon: Settings,
    features: [
      'Smart TV & entertainment setup',
      'Voice assistant integration',
      'Mobile device optimization',
      'WiFi network optimization',
      'Data backup setup',
      'Password manager onboarding',
      'App training & configuration',
      'Multi-user setup'
    ],
    addOns: [
      'Custom integrations',
      'Advanced automation',
      'Third-party device support',
      'API development'
    ]
  },
  {
    name: 'Data & Device Care Pack',
    description: 'Ongoing maintenance & optimization',
    price: '$39',
    installTime: '1 hour',
    icon: Wifi,
    features: [
      'Automatic firmware updates',
      'Device health monitoring',
      'Battery level tracking',
      'Performance optimization',
      'Data backup management',
      'Security patch deployment',
      'Usage analytics & insights',
      'Quarterly system tune-ups'
    ],
    addOns: [
      'Advanced analytics',
      'Predictive maintenance',
      'Custom reporting',
      'Performance optimization'
    ]
  },
  {
    name: 'Power & Network Resilience Pack',
    description: 'Backup power & connectivity',
    price: '$69',
    installTime: '2-3 hours',
    icon: WifiOff,
    features: [
      'UPS backup for critical devices',
      'Mesh WiFi network setup',
      'Cellular backup internet',
      'Battery backup for sensors',
      'Network redundancy',
      'Power monitoring',
      'Automatic failover',
      'Emergency power alerts'
    ],
    addOns: [
      'Solar integration',
      'Whole-home backup',
      'Advanced networking',
      'Starlink integration'
    ]
  },
  {
    name: 'Maintenance & Monitoring Pack',
    description: '24/7 concierge support & care',
    price: '$89',
    installTime: 'Ongoing',
    icon: Wrench,
    features: [
      '24/7 dedicated support line',
      'Weekly system health checks',
      'Proactive issue detection',
      'Remote troubleshooting',
      'Scheduled maintenance visits',
      'Emergency response team',
      'Family portal management',
      'Concierge service coordination'
    ],
    addOns: [
      'Dedicated account manager',
      'Custom service agreements',
      'Priority response times',
      'Extended support hours'
    ]
  }
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background-dark via-secondary-800 to-background-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-primary-500">Flexible Solutions</span> for Your Life
          </h1>
          <p className="text-xl text-secondary-300 mb-8 max-w-4xl mx-auto">
            Start with our essential core foundation, then add the modules that match your priorities. 
            <span className="text-primary-500 font-semibold"> Peace-as-a-Service, tailored to your needs.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-secondary-300">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary-500" />
              <span>Confidence</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary-500" />
              <span>Coverage</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-primary-500" />
              <span>Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Foundation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-2xl shadow-primary-500/10">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-3 rounded-xl mr-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">{coreFoundation.name}</h2>
                <p className="text-secondary-400">{coreFoundation.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary-500 mb-2">{coreFoundation.price}<span className="text-2xl text-secondary-400 font-normal">/mo</span></div>
                <div className="text-sm text-secondary-500 mb-6">Install time: {coreFoundation.installTime}</div>
                
                <div className="space-y-3 mb-8">
                  {coreFoundation.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0" />
                      <span className="text-secondary-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-secondary-700/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">What&apos;s Included:</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Home className="w-5 h-5 text-primary-500 mr-3" />
                    <span className="text-secondary-300">Smart home hub</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary-500 mr-3" />
                    <span className="text-secondary-300">Mobile app access</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary-500 mr-3" />
                    <span className="text-secondary-300">Professional installation</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-primary-500 mr-3" />
                    <span className="text-secondary-300">Email & chat support</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Link
              href="/book-consultation"
              className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-6 rounded-xl font-bold text-center hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg mt-8"
            >
              Start with Core Foundation
            </Link>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Add-on Modules</h2>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
              Choose the modules that match your lifestyle and priorities. Mix and match to create your perfect smart home experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => (
              <div
                key={module.name}
                className="bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-2 rounded-lg mr-3">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{module.name}</h3>
                    <p className="text-sm text-secondary-400">{module.description}</p>
                  </div>
                </div>

                <div className="text-3xl font-bold text-primary-500 mb-2">{module.price}<span className="text-lg text-secondary-400 font-normal">/mo</span></div>
                <div className="text-sm text-secondary-500 mb-4">Install time: {module.installTime}</div>

                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Includes:</h4>
                  {module.features.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-secondary-300">{feature}</span>
                    </div>
                  ))}
                  {module.features.length > 4 && (
                    <div className="text-sm text-secondary-400 mt-2">
                      +{module.features.length - 4} more features
                    </div>
                  )}
                </div>

                {module.addOns && module.addOns.length > 0 && (
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Optional Add-ons:</h4>
                    {module.addOns.slice(0, 2).map((addon) => (
                      <div key={addon} className="flex items-center">
                        <Star className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-secondary-400">{addon}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href="/book-consultation"
                  className="block w-full bg-secondary-700 text-white py-3 px-4 rounded-xl font-semibold text-center hover:bg-secondary-600 transition-colors"
                >
                  Add {module.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary-800/50 rounded-xl p-6">
              <div className="bg-primary-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Start with Core</h3>
              <p className="text-secondary-300">Begin with our essential foundation - smart hub, app, installation, and basic devices.</p>
            </div>
            <div className="bg-secondary-800/50 rounded-xl p-6">
              <div className="bg-primary-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Choose Modules</h3>
              <p className="text-secondary-300">Add specialized modules that match your priorities - security, comfort, health, or support.</p>
            </div>
            <div className="bg-secondary-800/50 rounded-xl p-6">
              <div className="bg-primary-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enjoy Peace</h3>
              <p className="text-secondary-300">Experience confidence, coverage, and care with your personalized smart home solution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Support & Care Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary-500 mb-4">Core Foundation</h3>
              <ul className="text-secondary-300 space-y-2 text-left">
                <li>• Email support (24h response)</li>
                <li>• Basic troubleshooting</li>
                <li>• Monthly health checks</li>
                <li>• App updates</li>
                <li>• Security patches</li>
              </ul>
            </div>
            <div className="bg-secondary-800/50 rounded-xl p-6 border border-primary-500">
              <h3 className="text-xl font-semibold text-primary-500 mb-4">With Modules</h3>
              <ul className="text-secondary-300 space-y-2 text-left">
                <li>• Phone support (4h response)</li>
                <li>• Remote troubleshooting</li>
                <li>• Weekly health checks</li>
                <li>• Priority updates</li>
                <li>• Device optimization</li>
                <li>• Module-specific support</li>
              </ul>
            </div>
            <div className="bg-secondary-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary-500 mb-4">Care & Support Pack</h3>
              <ul className="text-secondary-300 space-y-2 text-left">
                <li>• 24/7 dedicated support</li>
                <li>• Weekly health checks</li>
                <li>• Proactive monitoring</li>
                <li>• Emergency response</li>
                <li>• Concierge service</li>
                <li>• Family portal management</li>
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
            <span className="text-primary-500 block">Peace-as-a-Service?</span>
          </h2>
          <p className="text-xl text-secondary-300 mb-8">
            Book a free consultation to discuss your needs and create your personalized smart home solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-consultation"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/why-dwella"
              className="border border-secondary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary-800 transition-colors"
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