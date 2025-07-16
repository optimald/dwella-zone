'use client';

import { useConfiguratorStore } from '@/stores/configuratorStore';
import { 
  ArrowLeft, 
  Check, 
  Star, 
  Shield, 
  Zap, 
  Heart, 
  Wrench, 
  Settings, 
  Wifi, 
  WifiOff,
  Download,
  Mail,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

export default function ConfiguratorSummary() {
  const {
    getRecommendedPlan,
    getRecommendedPacks,
    totalMonthlyPrice,
    totalInstallPrice,
    estimatedInstallTime,
    setShowSummary,
    resetConfigurator
  } = useConfiguratorStore();

  const recommendedPlan = getRecommendedPlan();
  const recommendedPacks = getRecommendedPacks();

  const handleBackToQuestions = () => {
    setShowSummary(false);
  };

  const handleStartOver = () => {
    resetConfigurator();
  };

  const getPackIcon = (category: string) => {
    switch (category) {
      case 'security': return Shield;
      case 'comfort': return Zap;
      case 'health': return Heart;
      case 'care': return Wrench;
      case 'integration': return Settings;
      case 'power': return WifiOff;
      case 'maintenance': return Wifi;
      default: return Star;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Your Personalized Smart Home Solution
        </h2>
        <p className="text-xl text-secondary-300">
          Based on your preferences, here&apos;s what we recommend for your home.
        </p>
      </div>

      {/* Recommended Plan */}
      {recommendedPlan && (
        <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-2xl p-8 border border-primary-500/20">
          <div className="flex items-center mb-6">
            <div className="bg-primary-500 p-3 rounded-xl mr-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{recommendedPlan.name}</h3>
              <p className="text-secondary-300">{recommendedPlan.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">What&apos;s Included:</h4>
              <ul className="space-y-2">
                {recommendedPlan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-secondary-300">
                    <Check className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                ${recommendedPlan.basePrice}<span className="text-2xl text-secondary-400 font-normal">/mo</span>
              </div>
              <p className="text-secondary-400">Base plan price</p>
            </div>
          </div>
        </div>
      )}

      {/* Recommended Packs */}
      {recommendedPacks.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Recommended Add-on Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedPacks.map((pack) => {
              const PackIcon = getPackIcon(pack.category);
              return (
                <div key={pack.id} className="bg-secondary-800/50 rounded-xl p-6 border border-secondary-700">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-500/20 p-2 rounded-lg mr-3">
                      <PackIcon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{pack.name}</h4>
                      <p className="text-secondary-400 text-sm">{pack.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <h5 className="text-sm font-semibold text-white">Includes:</h5>
                    <ul className="space-y-1">
                      {pack.devices.slice(0, 3).map((device) => (
                        <li key={device.id} className="text-sm text-secondary-300">
                          • {device.name}
                        </li>
                      ))}
                      {pack.devices.length > 3 && (
                        <li className="text-sm text-secondary-400">
                          +{pack.devices.length - 3} more devices
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary-500">
                      ${pack.monthlyPrice}<span className="text-sm text-secondary-400 font-normal">/mo</span>
                    </div>
                    <div className="text-sm text-secondary-400">
                      {pack.installTime} install
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Pricing Summary */}
      <div className="bg-secondary-800/50 rounded-2xl p-8 border border-secondary-700">
        <h3 className="text-2xl font-bold text-white mb-6">Pricing Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">
              ${totalMonthlyPrice}
            </div>
            <div className="text-secondary-400">Monthly Total</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">
              ${totalInstallPrice}
            </div>
            <div className="text-secondary-400">Installation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">
              {estimatedInstallTime}
            </div>
            <div className="text-secondary-400">Install Time</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/book-consultation"
          className="flex items-center justify-center space-x-2 px-8 py-4 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span>Book Free Consultation</span>
        </Link>
        
        <button className="flex items-center justify-center space-x-2 px-8 py-4 border border-secondary-600 text-white rounded-xl font-semibold hover:bg-secondary-800 transition-colors">
          <Download className="w-5 h-5" />
          <span>Download PDF</span>
        </button>
        
        <button className="flex items-center justify-center space-x-2 px-8 py-4 border border-secondary-600 text-white rounded-xl font-semibold hover:bg-secondary-800 transition-colors">
          <Mail className="w-5 h-5" />
          <span>Email Quote</span>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8">
        <button
          onClick={handleBackToQuestions}
          className="flex items-center space-x-2 px-6 py-3 text-secondary-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Questions</span>
        </button>
        
        <button
          onClick={handleStartOver}
          className="text-secondary-400 hover:text-white transition-colors"
        >
          Start Over
        </button>
      </div>
    </div>
  );
} 