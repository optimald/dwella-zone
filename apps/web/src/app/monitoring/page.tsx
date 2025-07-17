import { Metadata } from 'next'
import Link from 'next/link'
import { Eye, Shield, Clock, AlertTriangle, Smartphone, Zap, CheckCircle, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: '24/7 Smart Home Monitoring | Dwella',
  description: 'Professional 24/7 smart home monitoring services. Real-time alerts, proactive maintenance, and peace of mind knowing your home is always protected.',
  keywords: [
    'smart home monitoring',
    '24/7 monitoring',
    'home security monitoring',
    'remote monitoring',
    'smart home alerts',
    'home automation monitoring',
    'professional monitoring',
    'home surveillance'
  ]
}

const monitoringServices = [
  {
    icon: Shield,
    title: 'Security Monitoring',
    description: '24/7 surveillance of your security cameras, motion sensors, and entry points.',
    features: ['Motion detection alerts', 'Door/window sensor monitoring', 'Camera surveillance', 'Emergency response coordination']
  },
  {
    icon: Eye,
    title: 'System Health Monitoring',
    description: 'Continuous monitoring of all smart devices to ensure optimal performance.',
    features: ['Device status tracking', 'Performance optimization', 'Proactive maintenance alerts', 'Battery level monitoring']
  },
  {
    icon: AlertTriangle,
    title: 'Environmental Monitoring',
    description: 'Monitor air quality, temperature, humidity, and other environmental factors.',
    features: ['Air quality tracking', 'Temperature monitoring', 'Humidity control', 'CO₂ level alerts']
  },
  {
    icon: Smartphone,
    title: 'Remote Access & Control',
    description: 'Access and control your smart home from anywhere via our mobile app.',
    features: ['Remote device control', 'Real-time notifications', 'Live camera feeds', 'Automation management']
  }
]

const monitoringFeatures = [
  {
    icon: Clock,
    title: '24/7 Coverage',
    description: 'Round-the-clock monitoring with no downtime or gaps in coverage.'
  },
  {
    icon: Zap,
    title: 'Instant Alerts',
    description: 'Real-time notifications for any security events or system issues.'
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Experienced monitoring specialists available 24/7 to respond to alerts.'
  },
  {
    icon: CheckCircle,
    title: 'Proactive Maintenance',
    description: 'Identify and resolve issues before they become problems.'
  }
]

const alertTypes = [
  {
    type: 'Security Alerts',
    description: 'Immediate notifications for security events',
    examples: ['Motion detected', 'Door opened', 'Window broken', 'Camera offline']
  },
  {
    type: 'System Alerts',
    description: 'Notifications about system health and performance',
    examples: ['Device offline', 'Low battery', 'Network issues', 'Software updates']
  },
  {
    type: 'Environmental Alerts',
    description: 'Alerts about environmental conditions',
    examples: ['High temperature', 'Poor air quality', 'Water leak detected', 'Smoke detected']
  }
]

export default function MonitoringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/dwell_zone_logo.png')] bg-center bg-no-repeat bg-contain opacity-5"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              24/7 Smart Home
              <span className="text-dwella-gold block">Monitoring</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Professional monitoring services that keep your home safe and your smart devices running perfectly. 
              Get instant alerts and peace of mind knowing your home is always protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/packages"
                className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors text-lg"
              >
                View Monitoring Plans
              </Link>
              <Link 
                href="/book-consultation"
                className="border border-dwella-gold text-dwella-gold px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold hover:text-slate-900 transition-colors text-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Monitoring Services */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Monitoring Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our monitoring services cover every aspect of your smart home, from security to system health, 
              ensuring you have complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monitoringServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <div className="flex items-start mb-6">
                  <div className="bg-dwella-gold/20 p-3 rounded-xl mr-4">
                    <service.icon className="h-8 w-8 text-dwella-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-300">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="h-4 w-4 text-dwella-gold mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monitoring Features */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Monitoring?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professional monitoring provides the reliability and peace of mind that DIY solutions can't match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {monitoringFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 text-center">
                <div className="bg-dwella-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-dwella-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alert Types */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Smart Alert System</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get instant notifications about what matters most. Our intelligent alert system 
              keeps you informed without overwhelming you with unnecessary notifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alertTypes.map((alert, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">{alert.type}</h3>
                <p className="text-slate-300 mb-6">{alert.description}</p>
                <ul className="space-y-2">
                  {alert.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-slate-300">
                      <AlertTriangle className="h-4 w-4 text-dwella-gold mr-2 flex-shrink-0" />
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monitoring Dashboard Preview */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Your Monitoring Dashboard</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Access your smart home status anytime, anywhere through our intuitive mobile app and web dashboard.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-white font-semibold mb-1">All Systems Online</h4>
                <p className="text-slate-400 text-sm">12 devices active</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="text-white font-semibold mb-1">Security Active</h4>
                <p className="text-slate-400 text-sm">4 cameras recording</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-400" />
                </div>
                <h4 className="text-white font-semibold mb-1">Recent Alerts</h4>
                <p className="text-slate-400 text-sm">2 alerts today</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold mb-1">Automations</h4>
                <p className="text-slate-400 text-sm">8 automations active</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-dwella-gold/10 to-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience Peace of Mind
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of homeowners who trust Dwella for their smart home monitoring needs. 
            Get started today and never worry about your home again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/packages"
              className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors text-lg"
            >
              View Monitoring Plans
            </Link>
            <Link 
              href="/support"
              className="border border-dwella-gold text-dwella-gold px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold hover:text-slate-900 transition-colors text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 