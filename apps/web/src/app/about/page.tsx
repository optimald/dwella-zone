import { Shield, Heart, Zap, Home, MapPin } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const values = [
  {
    icon: Shield,
    title: 'Trust & Reliability',
    description: 'Building lasting relationships through dependable service.'
  },
  {
    icon: Heart,
    title: 'Community Focus',
    description: 'Deeply rooted in Half Moon Bay, serving our neighbors.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Embracing cutting-edge technology for modern living.'
  },
  {
    icon: Home,
    title: 'Quality Craftsmanship',
    description: 'Every installation reflects our commitment to excellence.'
  }
]

const credentials = [
  {
    name: 'Licensed & Insured',
    description: 'Fully licensed contractor with comprehensive insurance coverage'
  },
  {
    name: 'BBB Accredited',
    description: 'A+ rating with Better Business Bureau for outstanding service'
  },
  {
    name: 'Local Business',
    description: 'Proud member of the Half Moon Bay Chamber of Commerce'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="text-dwella-gold block">Dwella</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            A trusted name in smart home technology, serving the Bay Area from our roots in Half Moon Bay. 
            We bring professional expertise and innovative solutions to every home we serve.
          </p>
          <div className="flex items-center justify-center space-x-6 text-slate-400">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-dwella-gold" />
              <span>Half Moon Bay, CA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Story</h2>
          <div className="text-lg text-slate-300 space-y-6">
            <p>
              Founded in Half Moon Bay, Dwella was born from a simple belief: 
              that every family deserves access to professional smart home technology that enhances their 
              daily lives.
            </p>
            <p>
              We serve families throughout the Bay Area, always maintaining the personal touch and 
              community focus that sets us apart. We&apos;re not just installing technology—we&apos;re building 
              lasting relationships with our neighbors.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 text-center">
                <div className="bg-dwella-gold/20 p-3 rounded-xl inline-block mb-4">
                  <value.icon className="h-8 w-8 text-dwella-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Trust & Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credentials.map((cred) => (
              <div key={cred.name} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 text-center">
                <h3 className="text-xl font-bold text-white mb-3">{cred.name}</h3>
                <p className="text-slate-300">{cred.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience
            <span className="text-dwella-gold block">Professional Service?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join Bay Area families who trust Dwella for their smart home needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/configurator"
              className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors"
            >
              Start Your Configuration
            </Link>
            <Link
              href="/book-consultation"
              className="border border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 