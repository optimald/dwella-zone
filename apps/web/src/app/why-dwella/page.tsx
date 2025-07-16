import { Shield, Heart, Users, Award, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const benefits = [
  {
    icon: Shield,
    title: 'Confidence',
    description: 'Know your home is protected and your family is safe. Our systems provide reliable monitoring and instant alerts when you need them most.',
    features: [
      'Professional-grade security systems',
      '24/7 monitoring and alerts',
      'Instant mobile notifications',
      'Reliable backup systems'
    ]
  },
  {
    icon: Zap,
    title: 'Coverage',
    description: 'Complete protection for every aspect of your home - from security and safety to comfort and convenience. No gaps, no worries.',
    features: [
      'Comprehensive device coverage',
      'Multiple layers of protection',
      'Redundant systems for reliability',
      'Scalable to your needs'
    ]
  },
  {
    icon: Heart,
    title: 'Care',
    description: 'Ongoing support and maintenance that adapts to your lifestyle. We\'re here when you need us, proactive when you don\'t.',
    features: [
      'Personalized support plans',
      'Proactive system monitoring',
      'Regular maintenance visits',
      'Family-friendly interfaces'
    ]
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: 'We only install premium, reliable devices from trusted manufacturers. Every component is tested and backed by our comprehensive warranty.',
    features: [
      'Premium device selection',
      'Comprehensive testing',
      'Extended warranties',
      'Free replacements for defects'
    ]
  }
]

const stats = [
  { number: '10,000+', label: 'Homes Protected' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '<4hr', label: 'Average Response Time' },
  { number: '5★', label: 'Customer Rating' }
]

const supportTiers = [
  {
    name: 'Core Foundation',
    response: '24 hours',
    features: [
      'Email & chat support',
      'Basic troubleshooting',
      'Monthly health checks',
      'App updates',
      'Security patches'
    ]
  },
  {
    name: 'With Modules',
    response: '4 hours',
    features: [
      'Phone support',
      'Remote troubleshooting',
      'Weekly health checks',
      'Priority updates',
      'Device optimization',
      'Module-specific support'
    ]
  },
  {
    name: 'Care & Support Pack',
    response: '1 hour',
    features: [
      '24/7 dedicated support',
      'Proactive monitoring',
      'Emergency response',
      'Concierge service',
      'Family portal management',
      'Scheduled maintenance'
    ]
  }
]

export default function WhyDwellaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Why Choose
            <span className="text-dwella-gold block">Dwella?</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
            We deliver <span className="text-dwella-gold font-semibold">confidence, coverage, and care</span> through flexible smart home solutions that adapt to your life, not the other way around.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-dwella-gold" />
              <span>Confidence</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-dwella-gold" />
              <span>Coverage</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-dwella-gold" />
              <span>Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-dwella-gold mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <div className="flex items-center mb-6">
                  <div className="bg-dwella-gold/20 p-3 rounded-xl mr-4">
                    <benefit.icon className="h-8 w-8 text-dwella-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-slate-300 mb-6">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-dwella-gold mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PeaceTech Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Our
            <span className="text-dwella-gold block">PeaceTech</span>
            Philosophy
          </h2>
          <div className="text-lg text-slate-300 space-y-6">
            <p>
              In a world where technology often adds complexity and stress, we believe smart home technology should do the opposite. 
              Our PeaceTech philosophy centers around creating systems that enhance your life without demanding your attention.
            </p>
            <p>
              We focus on <span className="text-dwella-gold font-semibold">confidence, coverage, and care</span> - delivering peace of mind through flexible solutions that adapt to your unique needs and lifestyle.
            </p>
            <p>
              Every device we install, every feature we enable, and every interaction we design is guided by one simple principle: 
              technology should make your life easier, not harder.
            </p>
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Support & Care
              <span className="text-dwella-gold block">That Scales</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the level of support that matches your needs. Start simple and add more care as your life evolves.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <div key={tier.name} className={`bg-slate-800/50 rounded-2xl p-6 border ${
                index === 1 ? 'border-dwella-gold shadow-lg shadow-dwella-gold/20' : 'border-slate-700'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-2xl font-bold text-dwella-gold">{tier.response}</div>
                  <div className="text-sm text-slate-400">response time</div>
                </div>
                
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-dwella-gold mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caregiver Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Designed for
                <span className="text-dwella-gold block">Caregivers</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                We understand the unique challenges faced by families caring for elderly loved ones. 
                Our systems provide peace of mind for both the person being cared for and their family members.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-dwella-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Family Connectivity</h4>
                    <p className="text-slate-400">Share access with trusted family members for remote monitoring and support.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-dwella-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Emergency Alerts</h4>
                    <p className="text-slate-400">Instant notifications for unusual activity or potential safety concerns.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="h-6 w-6 text-dwella-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Health Monitoring</h4>
                    <p className="text-slate-400">Track daily patterns and routines to ensure everything is normal.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">What Caregivers Say</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-dwella-gold pl-4">
                  <p className="text-slate-300 italic mb-2">
                    &quot;Dwella&apos;s system gives me peace of mind knowing I can check on my mom anytime, anywhere.&quot;
                  </p>
                  <p className="text-slate-400">— Sarah M., Daughter</p>
                </div>
                <div className="border-l-4 border-dwella-gold pl-4">
                  <p className="text-slate-300 italic mb-2">
                    &quot;The emergency alerts have been a lifesaver. I know immediately if something needs attention.&quot;
                  </p>
                  <p className="text-slate-400">— Michael R., Son</p>
                </div>
                <div className="border-l-4 border-dwella-gold pl-4">
                  <p className="text-slate-300 italic mb-2">
                    &quot;The flexible modules let us start small and add what we need as my dad&apos;s needs changed.&quot;
                  </p>
                  <p className="text-slate-400">— Jennifer L., Daughter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience
            <span className="text-dwella-gold block">Peace-as-a-Service?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of families who trust Dwella to provide confidence, coverage, and care for their homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors inline-flex items-center"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/book-consultation"
              className="border border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 