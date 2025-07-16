import Image from "next/image";
import Link from "next/link";
import { Shield, Home, Wifi, Phone, Clock, CheckCircle, Star, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-secondary-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Dwella Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold bg-gradient-dwella bg-clip-text text-transparent">
                Dwella
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/packages" className="text-foreground-secondary hover:text-primary-600 transition-colors">
                Packages
              </Link>
              <Link href="/why-dwella" className="text-foreground-secondary hover:text-primary-600 transition-colors">
                Why Dwella
              </Link>
              <Link href="/support" className="text-foreground-secondary hover:text-primary-600 transition-colors">
                Support
              </Link>
              <Link href="/about" className="text-foreground-secondary hover:text-primary-600 transition-colors">
                About
              </Link>
              <Link href="/portal" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                Client Login
              </Link>
              <Link href="/book-consultation" className="bg-gradient-dwella text-white px-6 py-2 rounded-lg hover:shadow-dwella transition-all duration-300">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="Dwella Shield"
                width={120}
                height={120}
                className="mx-auto mb-6 drop-shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Peace of Mind
              <span className="block bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                at Home
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-300 mb-8 max-w-3xl mx-auto">
              Installed, Supported, Protected. Premium smart home service for those who value security, simplicity, and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation" className="bg-gradient-dwella text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-dwella-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/packages" className="border-2 border-primary-500 text-primary-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                See Packages
              </Link>
            </div>
          </div>
        </div>
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-10 animate-pulse-slow">
          <Shield className="w-8 h-8 text-primary-400 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-16 animate-pulse-slow delay-1000">
          <Home className="w-10 h-10 text-primary-400 opacity-60" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-pulse-slow delay-2000">
          <Wifi className="w-6 h-6 text-primary-400 opacity-60" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-secondary-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent-500" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary-600" />
              <span className="font-medium">Security Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-warning-500" />
              <span className="font-medium">5-Star Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-secondary-500" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              From basic monitoring to full concierge service, we have a plan that fits your needs and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Light Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-dwella transition-all duration-300 border border-secondary-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Light</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">
                  $49<span className="text-lg text-foreground-secondary">/mo</span>
                </div>
                <p className="text-foreground-secondary mb-6">Basic home monitoring with essential devices</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                    <span>Up to 10 devices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                    <span>Basic monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                    <span>Monthly check-ins</span>
                  </li>
                </ul>
                <button className="w-full bg-secondary-100 text-secondary-700 py-3 rounded-lg font-semibold hover:bg-secondary-200 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Core Package - Featured */}
            <div className="bg-gradient-dwella rounded-2xl p-8 shadow-dwella-lg transform scale-105 text-white relative">
              <div className="absolute top-4 right-4 bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Core</h3>
                <div className="text-4xl font-bold mb-4">
                  $99<span className="text-lg opacity-80">/mo</span>
                </div>
                <p className="opacity-90 mb-6">Enhanced home automation with priority support</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Up to 25 devices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Advanced monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Priority phone support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Family sharing (3 members)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Bi-weekly check-ins</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-primary-600 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Aura Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-dwella transition-all duration-300 border border-secondary-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Aura</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">
                  $199<span className="text-lg text-foreground-secondary">/mo</span>
                </div>
                <p className="text-foreground-secondary mb-6">Premium concierge service with full automation</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                    <span>Unlimited devices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                    <span>Premium monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                    <span>24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                    <span>Unlimited family sharing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                    <span>On-site support included</span>
                  </li>
                </ul>
                <button className="w-full bg-secondary-100 text-secondary-700 py-3 rounded-lg font-semibold hover:bg-secondary-200 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Home?</h2>
          <p className="text-xl text-secondary-300 mb-8">
            Join thousands of families who trust Dwella with their peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="bg-gradient-dwella text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-dwella-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
              Schedule Free Consultation
              <Phone className="ml-2 w-5 h-5" />
            </Link>
            <Link href="mailto:hello@dwella.zone" className="border-2 border-primary-500 text-primary-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Dwella Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold bg-gradient-dwella bg-clip-text text-transparent">
                  Dwella
                </span>
              </div>
              <p className="text-secondary-400">
                Premium smart home service for those who value security, simplicity, and peace of mind.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-secondary-400">
                <li><Link href="/packages" className="hover:text-primary-400 transition-colors">Packages</Link></li>
                <li><Link href="/installation" className="hover:text-primary-400 transition-colors">Installation</Link></li>
                <li><Link href="/support" className="hover:text-primary-400 transition-colors">Support</Link></li>
                <li><Link href="/monitoring" className="hover:text-primary-400 transition-colors">Monitoring</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-secondary-400">
                <li><Link href="/about" className="hover:text-primary-400 transition-colors">About</Link></li>
                <li><Link href="/why-dwella" className="hover:text-primary-400 transition-colors">Why Dwella</Link></li>
                <li><Link href="/careers" className="hover:text-primary-400 transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-secondary-400">
                <li><a href="mailto:hello@dwella.zone" className="hover:text-primary-400 transition-colors">hello@dwella.zone</a></li>
                <li><Link href="/portal" className="hover:text-primary-400 transition-colors">Client Portal</Link></li>
                <li><Link href="/book-consultation" className="hover:text-primary-400 transition-colors">Book Consultation</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
            <p>&copy; 2024 Dwella. All rights reserved. | <Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link> | <Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
