import { Shield, Heart, Clock, Users, Award, Zap } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const benefits = [
  {
    icon: Shield,
    title: 'PeaceTech Philosophy',
    description: 'We believe technology should enhance your life, not complicate it. Our approach focuses on creating calm, reliable systems that work seamlessly in the background.',
    features: [
      'Intuitive, simple interfaces',
      'Reliable, always-on systems',
      'Privacy-first design',
      'Minimal maintenance required'
    ]
  },
  {
    icon: Heart,
    title: 'Caregiver Benefits',
    description: 'Give peace of mind to family members who care for you. Remote monitoring and alerts help everyone stay connected and safe.',
    features: [
      'Remote access for family members',
      'Emergency alert systems',
      'Health and safety monitoring',
      'Family portal with shared access'
    ]
  },
  {
    icon: Award,
    title: 'Device Quality Guarantee',
    description: 'We only install premium, reliable devices from trusted manufacturers. Every component is tested and backed by our comprehensive warranty.',
    features: [
      'Premium device selection',
      'Comprehensive testing',
      'Extended warranties',
      'Free replacements for defects'
    ]
  },
  {
    icon: Clock,
    title: 'Support Response SLAs',
    description: 'When you need help, we&apos;re there. Our tiered support system ensures you get the right level of assistance when you need it.',
    features: [
      'Light: 24-hour email response',
      'Core: 4-hour phone response',
      'Aura: 1-hour concierge response',
      'Proactive monitoring and alerts'
    ]
  }
]

const stats = [
  { number: '500+', label: 'Homes Protected' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '<4hr', label: 'Average Response Time' },
  { number: '5★', label: 'Customer Rating' }
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
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            We&apos;re not just another smart home company. We&apos;re your partner in creating a safer, more peaceful home environment.
          </p>
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
                      <div className="w-2 h-2 bg-dwella-gold rounded-full mr-3"></div>
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
              We focus on reliability, simplicity, and peace of mind. Our systems work quietly in the background, 
              protecting your home and family while you focus on what matters most.
            </p>
            <p>
              Every device we install, every feature we enable, and every interaction we design is guided by one simple principle: 
              technology should make your life easier, not harder.
            </p>
          </div>
        </div>
      </section>

      {/* Caregiver Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="text-dwella-gold block">Peace of Mind?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of families who trust Dwella to protect and enhance their homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors"
            >
              View Packages
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