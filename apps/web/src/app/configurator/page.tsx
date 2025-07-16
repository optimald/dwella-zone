'use client';

import { useEffect } from 'react';
import { useConfiguratorStore } from '@/stores/configuratorStore';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ConfiguratorFlow from '@/components/configurator/ConfiguratorFlow';
import ConfiguratorSummary from '@/components/configurator/ConfiguratorSummary';

export default function ConfiguratorPage() {
  const { showSummary, resetConfigurator } = useConfiguratorStore();

  useEffect(() => {
    // Reset configurator when page loads
    resetConfigurator();
  }, [resetConfigurator]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-dark via-secondary-800 to-background-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Build Your
            <span className="text-primary-500 block">Perfect Smart Home</span>
          </h1>
          <p className="text-xl text-secondary-300 mb-8 max-w-3xl mx-auto">
            Answer a few questions and we&apos;ll create a personalized smart home solution 
            that matches your lifestyle, budget, and priorities.
          </p>
        </div>
      </section>

      {/* Configurator Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {showSummary ? (
            <ConfiguratorSummary />
          ) : (
            <ConfiguratorFlow />
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 