import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Clock, Shield, Users, Wrench, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professional Smart Home Installation | Dwella',
  description: 'Expert smart home installation services. Professional technicians, comprehensive setup, and thorough training. Get your smart home installed right the first time.',
  keywords: [
    'smart home installation',
    'professional installation',
    'home automation setup',
    'smart device installation',
    'home security installation',
    'smart home technician',
    'installation services',
    'home automation installation'
  ]
}

const installationSteps = [
  {
    icon: Clock,
    title: 'Pre-Installation Planning',
    description: 'We review your home layout, network setup, and device placement strategy to ensure optimal performance.',
    details: ['Home walkthrough', 'Network assessment', 'Device placement planning', 'Installation timeline']
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    description: 'Our certified technicians install and configure all devices with precision and care.',
    details: ['Device mounting & wiring', 'Network configuration', 'App setup & testing', 'Integration verification']
  },
  {
    icon: Users,
    title: 'Training & Handover',
    description: 'Comprehensive training session to ensure you\'re comfortable using your new smart home system.',
    details: ['App training', 'Device operation', 'Automation setup', 'Troubleshooting basics']
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Thorough testing and verification to ensure everything works perfectly before we leave.',
    details: ['System testing', 'Performance verification', 'Security validation', 'Documentation provided']
  }
]

const installationFeatures = [
  {
    icon: Zap,
    title: 'Same-Day Setup',
    description: 'Most installations are completed in a single day, with minimal disruption to your routine.'
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'All our technicians are licensed, bonded, and insured for your complete peace of mind.'
  },
  {
    icon: Users,
    title: 'Expert Technicians',
    description: 'Certified professionals with years of experience in smart home technology and installation.'
  },
  {
    icon: CheckCircle,
    title: 'Warranty Coverage',
    description: 'All installations come with our comprehensive warranty and ongoing support guarantee.'
  }
]

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/dwell_zone_logo.png')] bg-center bg-no-repeat bg-contain opacity-5"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional
              <span className="text-dwella-gold block">Installation</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Expert smart home installation by certified technicians. We handle everything from planning to training, 
              ensuring your smart home works perfectly from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-consultation"
                className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors text-lg"
              >
                Schedule Installation
              </Link>
              <Link 
                href="/packages"
                className="border border-dwella-gold text-dwella-gold px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold hover:text-slate-900 transition-colors text-lg"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Process */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Installation Process</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We follow a proven 4-step process to ensure your smart home installation is seamless, 
              professional, and tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationSteps.map((step, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <div className="flex items-center mb-6">
                  <div className="bg-dwella-gold/20 p-3 rounded-xl mr-4">
                    <step.icon className="h-8 w-8 text-dwella-gold" />
                  </div>
                  <span className="text-2xl font-bold text-dwella-gold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-300 mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="h-4 w-4 text-dwella-gold mr-2 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Installation Features */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Installation?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professional installation is the foundation of a reliable smart home. 
              We ensure your system is installed correctly and optimized for performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {installationFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <div className="flex items-start">
                  <div className="bg-dwella-gold/20 p-3 rounded-xl mr-4">
                    <feature.icon className="h-8 w-8 text-dwella-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Installation Timeline */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Installation Timeline</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Most installations are completed in a single day, with minimal disruption to your routine.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-dwella-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-dwella-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">2-3 Hours</h3>
                <p className="text-slate-300">Basic Package Installation</p>
                <p className="text-sm text-slate-400 mt-2">Smart hub, essential devices, basic setup</p>
              </div>
              <div className="text-center">
                <div className="bg-dwella-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-dwella-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">4-6 Hours</h3>
                <p className="text-slate-300">Standard Package Installation</p>
                <p className="text-sm text-slate-400 mt-2">Complete system with security & automation</p>
              </div>
              <div className="text-center">
                <div className="bg-dwella-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-dwella-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">6-8 Hours</h3>
                <p className="text-slate-300">Premium Package Installation</p>
                <p className="text-sm text-slate-400 mt-2">Full system with advanced features & integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-dwella-gold/10 to-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Schedule your professional smart home installation today and experience the difference 
            that expert setup makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book-consultation"
              className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors text-lg"
            >
              Book Installation
            </Link>
            <Link 
              href="/support"
              className="border border-dwella-gold text-dwella-gold px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold hover:text-slate-900 transition-colors text-lg"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 