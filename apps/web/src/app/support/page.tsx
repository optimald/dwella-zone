import { MessageCircle, FileText, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'How long does installation take?',
        answer: 'Installation times vary by package: Light (2-3 hours), Core (4-6 hours), and Aura (6-8 hours). We&apos;ll provide a specific timeline during your consultation.'
      },
      {
        question: 'Do you offer financing options?',
        answer: 'Yes, we offer flexible financing options through our partners. Monthly payments start as low as $25/month depending on your package selection.'
      },
      {
        question: 'What happens if a device stops working?',
        answer: 'All devices come with our comprehensive warranty. We&apos;ll diagnose the issue remotely first, then schedule a technician visit if needed. Replacement devices are provided free of charge during the warranty period.'
      }
    ]
  },
  {
    category: 'Technical',
    questions: [
      {
        question: 'What internet speed do I need?',
        answer: 'We recommend a minimum of 25 Mbps download and 5 Mbps upload for optimal performance. Most modern home internet connections work perfectly with our systems.'
      },
      {
        question: 'Can I add devices later?',
        answer: 'Absolutely! Our systems are designed to be expandable. You can add cameras, sensors, or other devices at any time. We&apos;ll handle the installation and integration.'
      },
      {
        question: 'How secure is my data?',
        answer: 'We use enterprise-grade encryption and follow strict privacy protocols. Your data is stored securely and never shared with third parties. We&apos;re fully compliant with privacy regulations.'
      }
    ]
  },
  {
    category: 'Support',
    questions: [
      {
        question: 'How do I get help if something goes wrong?',
        answer: 'Contact us through the app, phone, or email depending on your package. Light customers get email support (24h response), Core gets phone support (4h response), and Aura gets concierge support (1h response).'
      },
      {
        question: 'Do you offer remote troubleshooting?',
        answer: 'Yes! Our technicians can diagnose and often fix issues remotely. This saves time and gets your system back online faster. We&apos;ll only schedule an in-person visit if remote resolution isn&apos;t possible.'
      },
      {
        question: 'What&apos;s included in the monthly support?',
        answer: 'Monthly support includes system monitoring, software updates, security patches, and basic troubleshooting. Higher-tier packages include health checks, device optimization, and priority support.'
      }
    ]
  }
]

const troubleshootingGuides = [
  {
    title: 'Camera Not Connecting',
    steps: [
      'Check that the camera is powered on',
      'Verify your WiFi connection is stable',
      'Restart the camera by unplugging for 30 seconds',
      'Contact support if the issue persists'
    ]
  },
  {
    title: 'App Won&apos;t Load',
    steps: [
      'Check your internet connection',
      'Force close and restart the app',
      'Update to the latest app version',
      'Clear app cache and data',
      'Contact support if the issue persists'
    ]
  },
  {
    title: 'Smart Lock Not Responding',
    steps: [
      'Check battery level (should be above 20%)',
      'Verify the lock is properly aligned',
      'Try manual operation first',
      'Reset the lock using the reset button',
      'Contact support if the issue persists'
    ]
  }
]

const supportChannels = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    response: 'Immediate',
    available: '24/7'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our technicians',
    response: '4 hours (Core/Aura)',
    available: '8am-8pm PST'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a detailed message',
    response: '24 hours',
    available: '24/7'
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
            Get the support you need, when you need it. Our team is ready to help with any questions or issues.
          </p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel) => (
              <div key={channel.title} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 text-center">
                <div className="bg-dwella-gold/20 p-4 rounded-xl inline-block mb-6">
                  <channel.icon className="h-8 w-8 text-dwella-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                <p className="text-slate-300 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Response:</span>
                    <span className="text-white">{channel.response}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Available:</span>
                    <span className="text-white">{channel.available}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-slate-700 text-white py-3 px-4 rounded-xl hover:bg-slate-600 transition-colors">
                  Get Help
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
              Get instant help from our support team. Available 24/7 for all customers.
            </p>
            <button className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors">
              Start Chat
            </button>
          </div>
        </div>
      </section>

      {/* Troubleshooting Guides */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Troubleshooting</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {troubleshootingGuides.map((guide) => (
              <div key={guide.title} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">{guide.title}</h3>
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
                      <p className="text-slate-300">{faq.answer}</p>
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Downloadable Guides</h2>
          <p className="text-slate-300 mb-8">
            Get detailed instructions and troubleshooting guides for your specific package.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <FileText className="h-12 w-12 text-dwella-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Light Package Guide</h3>
              <p className="text-slate-400 mb-4">Complete setup and troubleshooting guide</p>
              <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
                Download PDF
              </button>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <FileText className="h-12 w-12 text-dwella-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Core Package Guide</h3>
              <p className="text-slate-400 mb-4">Advanced features and automation setup</p>
              <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
                Download PDF
              </button>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <FileText className="h-12 w-12 text-dwella-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Aura Package Guide</h3>
              <p className="text-slate-400 mb-4">Premium features and concierge services</p>
              <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need
            <span className="text-dwella-gold block">Help?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Our support team is here to help you get the most out of your Dwella system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors">
              Start Live Chat
            </button>
            <Link
              href="/book-consultation"
              className="border border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              Schedule Support Call
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 