'use client'

import { useState } from 'react'
import { Download, Mail, QrCode, ArrowLeft, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { useConfiguratorStore } from '@/stores/configuratorStore'

export default function ConfiguratorSummary() {
  const { 
    getConfiguration, 
    getRecommendedPlan, 
    getRecommendedPacks, 
    resetConfigurator,
    tags,
    totalMonthlyPrice,
    estimatedInstallTime
  } = useConfiguratorStore()
  
  const [emailSent, setEmailSent] = useState(false)
  const [sendingEmail, setSendingEmail] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const configuration = getConfiguration()
  const recommendedPlan = getRecommendedPlan()
  const recommendedPacks = getRecommendedPacks()

  const handleSendEmail = async () => {
    if (!email || !name) return

    setSendingEmail(true)
    try {
      const response = await fetch('/api/configurator/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          configuration: {
            recommendedPlan: recommendedPlan?.name || 'Custom Plan',
            estimatedCost: totalMonthlyPrice,
            installTime: estimatedInstallTime,
            addOnPacks: recommendedPacks.map(pack => ({
              name: pack.name,
              price: pack.monthlyPrice,
              description: pack.description
            }))
          },
          userEmail: email,
          userName: name,
        }),
      })

      if (response.ok) {
        setEmailSent(true)
      } else {
        console.error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
    } finally {
      setSendingEmail(false)
    }
  }

  const handleDownloadConfig = () => {
    const configData = {
      configuration,
      timestamp: new Date().toISOString(),
      version: '1.0',
    }

    const blob = new Blob([JSON.stringify(configData, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `dwella-config-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const generateQRCode = () => {
    // Generate a simple QR code URL for the configuration
    const configUrl = `${window.location.origin}/configurator?config=${encodeURIComponent(JSON.stringify(configuration))}`
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(configUrl)}`
  }

  if (!recommendedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">No Configuration Found</h1>
          <p className="text-slate-300 mb-6">Please complete the configurator first.</p>
          <button
            onClick={resetConfigurator}
            className="bg-dwella-gold text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors"
          >
            Start Configurator
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Smart Home
            <span className="text-dwella-gold block">Configuration</span>
          </h1>
          <p className="text-xl text-slate-300">
            Here&apos;s your personalized smart home setup based on your preferences.
          </p>
        </div>

        {/* Configuration Summary */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Configuration Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-700/50 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Recommended Plan</h3>
              <p className="text-dwella-gold text-xl font-bold">{recommendedPlan.name}</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Monthly Cost</h3>
              <p className="text-dwella-gold text-xl font-bold">${totalMonthlyPrice}</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Installation Time</h3>
              <p className="text-dwella-gold text-xl font-bold">{estimatedInstallTime}</p>
            </div>
          </div>

          {recommendedPacks.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Add-on Packs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendedPacks.map((pack, index) => (
                  <div key={index} className="bg-slate-700/50 rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-semibold">{pack.name}</h4>
                      <p className="text-slate-300 text-sm">{pack.description}</p>
                    </div>
                    <span className="text-dwella-gold font-bold">${pack.monthlyPrice}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Your Preferences</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-dwella-gold/20 text-dwella-gold px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Email Configuration */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="text-center mb-4">
              <Mail className="h-12 w-12 text-dwella-gold mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Email Configuration</h3>
              <p className="text-slate-300 text-sm">Get your configuration sent to your email</p>
            </div>
            
            {!emailSent ? (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-dwella-gold"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-dwella-gold"
                />
                <button
                  onClick={handleSendEmail}
                  disabled={!email || !name || sendingEmail}
                  className="w-full bg-dwella-gold text-slate-900 py-2 rounded-lg font-semibold hover:bg-dwella-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {sendingEmail ? 'Sending...' : 'Send Email'}
                </button>
              </div>
            ) : (
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <p className="text-green-400 text-sm">Email sent successfully!</p>
              </div>
            )}
          </div>

          {/* Download Configuration */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="text-center mb-4">
              <Download className="h-12 w-12 text-dwella-gold mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Download JSON</h3>
              <p className="text-slate-300 text-sm">Save your configuration as a file</p>
            </div>
            <button
              onClick={handleDownloadConfig}
              className="w-full bg-slate-700 text-white py-2 rounded-lg font-semibold hover:bg-slate-600 transition-colors flex items-center justify-center"
            >
              Download Configuration
            </button>
          </div>

          {/* QR Code */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="text-center mb-4">
              <QrCode className="h-12 w-12 text-dwella-gold mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">QR Code</h3>
              <p className="text-slate-300 text-sm">Scan to view this configuration</p>
            </div>
            <div className="flex justify-center">
              <Image
                src={generateQRCode()}
                alt="Configuration QR Code"
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-dwella-gold/20 p-4 rounded-xl inline-block mb-4">
                <span className="text-dwella-gold text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Review Configuration</h3>
              <p className="text-slate-300 text-sm">Our team will review your configuration and contact you within 24 hours.</p>
            </div>
            <div className="text-center">
              <div className="bg-dwella-gold/20 p-4 rounded-xl inline-block mb-4">
                <span className="text-dwella-gold text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Schedule Consultation</h3>
              <p className="text-slate-300 text-sm">Book a consultation to discuss your needs and finalize the plan.</p>
            </div>
            <div className="text-center">
              <div className="bg-dwella-gold/20 p-4 rounded-xl inline-block mb-4">
                <span className="text-dwella-gold text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Professional Installation</h3>
              <p className="text-slate-300 text-sm">Our certified technicians will install and configure your smart home system.</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetConfigurator}
            className="bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-600 transition-colors flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Start Over
          </button>
          <a
            href="/book-consultation"
            className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors text-center"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </div>
  )
} 