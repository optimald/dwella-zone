import { MessageCircle, Phone, Mail, Clock, Shield, Wifi, Settings, Download, Video, BookOpen, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const faqs = [
  {
    category: 'Installation & Setup',
    questions: [
      {
        question: 'How long does installation take?',
        answer: 'Installation times vary by package complexity: Basic setups (2-3 hours), Standard installations (4-6 hours), and Comprehensive systems (6-8 hours). We\'ll provide a specific timeline during your consultation.'
      },
      {
        question: 'What happens during installation?',
        answer: 'Our certified technicians will install all devices, configure your network, set up the mobile app, and provide hands-on training. We\'ll also test everything to ensure it\'s working perfectly before we leave.'
      },
      {
        question: 'Do I need to be home during installation?',
        answer: 'Yes, we require someone to be present during installation for security and to provide access to different areas of your home. We\'ll also provide training on how to use your new system.'
      },
      {
        question: 'Can I install devices myself?',
        answer: 'While some devices can be self-installed, we strongly recommend professional installation to ensure optimal performance, proper integration, and warranty coverage. Our technicians are certified and experienced.'
      }
    ]
  },
  {
    category: 'Technical Support',
    questions: [
      {
        question: 'What internet speed do I need?',
        answer: 'We recommend a minimum of 25 Mbps download and 5 Mbps upload for optimal performance. Most modern home internet connections work perfectly with our systems. We\'ll test your connection during installation.'
      },
      {
        question: 'Can I add devices later?',
        answer: 'Absolutely! Our systems are designed to be expandable. You can add cameras, sensors, or other devices at any time. We\'ll handle the installation and integration to ensure everything works seamlessly.'
      },
      {
        question: 'How secure is my data?',
        answer: 'We use enterprise-grade encryption and follow strict privacy protocols. Your data is stored securely and never shared with third parties. We\'re fully compliant with privacy regulations and regularly audit our security measures.'
      },
      {
        question: 'What happens if my internet goes down?',
        answer: 'Our systems include local storage and backup connectivity options. Critical security features continue to work, and you\'ll receive notifications when connectivity is restored. We also offer cellular backup options.'
      }
    ]
  },
  {
    category: 'Support & Maintenance',
    questions: [
      {
        question: 'How do I get help if something goes wrong?',
        answer: 'Contact us through the app, phone, or email depending on your package. Light customers get email support (24h response), Core gets phone support (4h response), and Aura gets concierge support (1h response).'
      },
      {
        question: 'Do you offer remote troubleshooting?',
        answer: 'Yes! Our technicians can diagnose and often fix issues remotely. This saves time and gets your system back online faster. We\'ll only schedule an in-person visit if remote resolution isn\'t possible.'
      },
      {
        question: 'What\'s included in the monthly support?',
        answer: 'Monthly support includes system monitoring, software updates, security patches, and basic troubleshooting. Higher-tier packages include health checks, device optimization, and priority support.'
      },
      {
        question: 'How often do you perform maintenance?',
        answer: 'We perform automated system health checks daily. For Core and Aura packages, we conduct monthly maintenance visits to ensure optimal performance and address any potential issues proactively.'
      }
    ]
  },
  {
    category: 'Billing & Account',
    questions: [
      {
        question: 'Do you offer financing options?',
        answer: 'Yes, we offer flexible financing options through our partners. Monthly payments start as low as $25/month depending on your package selection. We can discuss options during your consultation.'
      },
      {
        question: 'Can I change my package later?',
        answer: 'Yes, you can upgrade or downgrade your package at any time. We\'ll prorate any changes and ensure a smooth transition. Contact our support team to discuss your options.'
      },
      {
        question: 'What\'s your cancellation policy?',
        answer: 'You can cancel your service at any time with 30 days notice. We\'ll help you remove devices if needed and ensure a smooth transition. No long-term contracts required.'
      }
    ]
  }
]

const troubleshootingGuides = [
  {
    title: 'Camera Not Connecting',
    icon: Video,
    steps: [
      'Check that the camera is powered on and the LED indicator is lit',
      'Verify your WiFi connection is stable (minimum 25 Mbps)',
      'Restart the camera by unplugging for 30 seconds, then plugging back in',
      'Check the camera placement - ensure it\'s within WiFi range',
      'Contact support if the issue persists - we can help remotely'
    ]
  },
  {
    title: 'App Won\'t Load',
    icon: Settings,
    steps: [
      'Check your internet connection on your phone',
      'Force close and restart the Dwella app',
      'Update to the latest app version from your app store',
      'Clear app cache and data in your phone settings',
      'Try accessing from a different device or browser',
      'Contact support if the issue persists'
    ]
  },
  {
    title: 'Smart Lock Not Responding',
    icon: Shield,
    steps: [
      'Check battery level (should be above 20%)',
      'Verify the lock is properly aligned with the door frame',
      'Try manual operation first to ensure the lock mechanism works',
      'Reset the lock using the reset button on the device',
      'Check the WiFi connection near the lock',
      'Contact support if the issue persists'
    ]
  },
  {
    title: 'WiFi Connectivity Issues',
    icon: Wifi,
    steps: [
      'Check your router is powered on and working',
      'Verify your internet connection speed (minimum 25 Mbps)',
      'Restart your router by unplugging for 30 seconds',
      'Check device placement - ensure it\'s within WiFi range',
      'Consider adding a WiFi extender if signal is weak',
      'Contact support for advanced troubleshooting'
    ]
  }
]

const supportChannels = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    response: 'Immediate',
    available: '24/7',
    bestFor: 'Quick questions and basic troubleshooting'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our certified technicians',
    response: '4 hours (Core/Aura)',
    available: '8am-8pm PST',
    bestFor: 'Complex issues and detailed guidance'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a detailed message with screenshots',
    response: '24 hours',
    available: '24/7',
    bestFor: 'Non-urgent issues and documentation'
  }
]

const downloadableGuides = [
  {
    title: 'Quick Start Guide',
    description: 'Get up and running with your new smart home system',
    icon: BookOpen,
    format: 'PDF',
    size: '2.3 MB'
  },
  {
    title: 'Troubleshooting Manual',
    description: 'Comprehensive guide for common issues and solutions',
    icon: AlertCircle,
    format: 'PDF',
    size: '4.1 MB'
  },
  {
    title: 'Advanced Features Guide',
    description: 'Learn about automation, scheduling, and advanced settings',
    icon: Settings,
    format: 'PDF',
    size: '3.7 MB'
  },
  {
    title: 'Security Best Practices',
    description: 'Tips for keeping your smart home secure',
    icon: Shield,
    format: 'PDF',
    size: '1.8 MB'
  }
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            We&apos;re Here to
            <span className="text-dwella-gold block">Help</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Get the support you need, when you need it. Our certified technicians are ready to help with any questions or issues.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-slate-300">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-dwella-gold" />
              <span>24/7 Support Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-dwella-gold" />
              <span>Certified Technicians</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-dwella-gold" />
              <span>Remote & On-Site Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel) => (
              <div key={channel.title} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 text-center hover:border-dwella-gold/50 transition-colors">
                <div className="bg-dwella-gold/20 p-4 rounded-xl inline-block mb-6">
                  <channel.icon className="h-8 w-8 text-dwella-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                <p className="text-slate-300 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Response:</span>
                    <span className="text-white font-semibold">{channel.response}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Available:</span>
                    <span className="text-white font-semibold">{channel.available}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-xs mb-4">{channel.bestFor}</p>
                <button className="w-full bg-slate-700 text-white py-3 px-4 rounded-xl hover:bg-slate-600 transition-colors font-semibold">
                  Get Help Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat Widget */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <MessageCircle className="h-16 w-16 text-dwella-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Live Chat Support</h2>
            <p className="text-slate-300 mb-6">
              Get instant help from our support team. Available 24/7 for all customers. No waiting, no queues.
            </p>
            <button className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors inline-flex items-center">
              Start Chat
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Troubleshooting Guides */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Troubleshooting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {troubleshootingGuides.map((guide) => (
              <div key={guide.title} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="bg-dwella-gold/20 p-2 rounded-lg mr-3">
                    <guide.icon className="h-6 w-6 text-dwella-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{guide.title}</h3>
                </div>
                <ol className="space-y-3">
                  {guide.steps.map((step, index) => (
                    <li key={index} className="flex items-start text-slate-300">
                      <span className="bg-dwella-gold text-slate-900 text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((category) => (
              <div key={category.category}>
                <h3 className="text-2xl font-bold text-dwella-gold mb-6">{category.category}</h3>
                <div className="space-y-6">
                  {category.questions.map((faq, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                      <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                      <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Downloadable Guides</h2>
          <p className="text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Get detailed instructions, troubleshooting guides, and best practices for your smart home system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloadableGuides.map((guide) => (
              <div key={guide.title} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center hover:border-dwella-gold/50 transition-colors">
                <div className="bg-dwella-gold/20 p-3 rounded-lg inline-block mb-4">
                  <guide.icon className="h-8 w-8 text-dwella-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span>{guide.format}</span>
                  <span>{guide.size}</span>
                </div>
                <button className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors font-semibold flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Our support team is here to help you get the most out of your smart home system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-consultation"
              className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors"
            >
              Schedule Support Visit
            </Link>
            <button className="border border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors">
              Call Support: (650) 555-0123
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 