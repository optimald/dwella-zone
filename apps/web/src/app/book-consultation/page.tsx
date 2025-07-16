'use client'

import { useState } from 'react'
import { Calendar, Clock, CheckCircle, Shield, Wifi, Settings, Users, Star, ArrowRight } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const consultationTypes = [
  {
    id: 'initial',
    title: 'Initial Consultation',
    description: 'Free 30-minute consultation to discuss your needs and get a personalized quote',
    duration: '30 minutes',
    price: 'Free',
    features: ['Needs assessment', 'Package recommendations', 'Rough cost estimate', 'Timeline planning']
  },
  {
    id: 'detailed',
    title: 'Detailed Assessment',
    description: 'Comprehensive 60-minute assessment including home walkthrough and detailed planning',
    duration: '60 minutes',
    price: '$99',
    features: ['Home walkthrough', 'Network assessment', 'Detailed proposal', 'Installation planning', 'Device placement strategy']
  },
  {
    id: 'virtual',
    title: 'Virtual Consultation',
    description: 'Remote consultation via video call for initial planning and package selection',
    duration: '45 minutes',
    price: 'Free',
    features: ['Video walkthrough', 'Remote assessment', 'Package selection', 'Next steps planning']
  }
]

const installationServices = [
  {
    title: 'Professional Installation',
    description: 'Certified technicians install and configure all devices',
    icon: Shield,
    features: ['Device installation', 'Network configuration', 'App setup', 'Training session']
  },
  {
    title: 'Network Optimization',
    description: 'Ensure your WiFi network supports all smart devices',
    icon: Wifi,
    features: ['Signal strength testing', 'Router optimization', 'Mesh network setup', 'Bandwidth allocation']
  },
  {
    title: 'System Integration',
    description: 'Connect all devices and create seamless automation',
    icon: Settings,
    features: ['Device pairing', 'Automation setup', 'Voice control', 'Mobile app configuration']
  },
  {
    title: 'Training & Support',
    description: 'Learn how to use your new smart home system',
    icon: Users,
    features: ['Hands-on training', 'User manual', 'Support contact info', 'Follow-up check-in']
  }
]

const monitoringServices = [
  {
    title: '24/7 System Monitoring',
    description: 'Continuous monitoring of your smart home system',
    features: ['Device status monitoring', 'Performance tracking', 'Alert notifications', 'Proactive maintenance']
  },
  {
    title: 'Security Monitoring',
    description: 'Professional monitoring of security devices',
    features: ['Motion detection alerts', 'Door/window sensors', 'Camera monitoring', 'Emergency response']
  },
  {
    title: 'Health Checks',
    description: 'Regular system health assessments',
    features: ['Weekly automated checks', 'Monthly detailed reports', 'Performance optimization', 'Update management']
  }
]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
]

export default function BookConsultationPage() {
  const [selectedType, setSelectedType] = useState('initial')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceNeeds: '',
    preferredTime: '',
    additionalNotes: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', { selectedType, ...formData })
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-md mx-auto text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
            <p className="text-slate-300 mb-6">
              Your consultation request has been submitted. We&apos;ll contact you within 24 hours to confirm your appointment.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-dwella-gold text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors"
            >
              Book Another Consultation
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Book Your
            <span className="text-dwella-gold block">Consultation</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss your smart home needs and create a personalized plan for your home. Our certified technicians will guide you through every step.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-dwella-gold" />
              <span>Certified Technicians</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-dwella-gold" />
              <span>Professional Installation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-dwella-gold" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Consultation Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border cursor-pointer transition-all ${
                  selectedType === type.id
                    ? 'border-dwella-gold shadow-lg shadow-dwella-gold/20'
                    : 'border-slate-700 hover:border-slate-600'
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-slate-300 mb-4">{type.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center text-slate-400">
                    <Clock className="h-4 w-4 mr-2" />
                    {type.duration}
                  </div>
                  <div className="text-dwella-gold font-semibold">{type.price}</div>
                </div>
                <ul className="space-y-2 text-sm">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Professional Installation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationServices.map((service) => (
              <div key={service.title} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <div className="bg-dwella-gold/20 p-3 rounded-lg inline-block mb-4">
                  <service.icon className="h-8 w-8 text-dwella-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1 text-xs text-slate-400">
                  {service.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Ongoing Monitoring & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monitoringServices.map((service) => (
              <div key={service.title} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar and Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendar Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Select Your Time</h2>
              <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-dwella-gold mr-3" />
                  <h3 className="text-lg font-semibold text-white">Available Times</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                        formData.preferredTime === time
                          ? 'bg-dwella-gold text-slate-900'
                          : 'bg-slate-600 text-white hover:bg-slate-500'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, preferredTime: time }))}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-slate-300 text-sm space-y-2">
                <p>• All consultations are conducted by certified Dwella technicians</p>
                <p>• Free consultations include basic assessment and package recommendations</p>
                <p>• Detailed assessments include home walkthrough and custom automation planning</p>
                <p>• Virtual consultations available for remote planning and package selection</p>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Your Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-dwella-gold"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-dwella-gold"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-dwella-gold"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-slate-300 mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-dwella-gold"
                    placeholder="123 Main St, City, State 12345"
                  />
                </div>

                <div>
                  <label htmlFor="serviceNeeds" className="block text-sm font-medium text-slate-300 mb-2">
                    Primary Service Need
                  </label>
                  <select
                    id="serviceNeeds"
                    name="serviceNeeds"
                    value={formData.serviceNeeds}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dwella-gold"
                  >
                    <option value="">Select your primary need</option>
                    <option value="security">Home Security</option>
                    <option value="automation">Home Automation</option>
                    <option value="monitoring">Remote Monitoring</option>
                    <option value="elderly-care">Elderly Care Support</option>
                    <option value="energy">Energy Management</option>
                    <option value="entertainment">Home Entertainment</option>
                    <option value="comprehensive">Comprehensive Smart Home</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-slate-300 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    rows={4}
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-dwella-gold"
                    placeholder="Tell us about your specific needs, concerns, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-dwella-gold text-slate-900 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors flex items-center justify-center"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 