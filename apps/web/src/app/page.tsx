import Image from "next/image";
import Link from "next/link";
import { Shield, Home, Wifi, Phone, Clock, CheckCircle, Star, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#161C20' }}>
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-secondary-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="Dwella Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-3xl font-bold bg-gradient-dwella bg-clip-text text-transparent">
                Dwella
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/packages" className="text-xl text-foreground-secondary hover:text-primary-600 transition-colors">
                Packages
              </Link>
              <Link href="/why-dwella" className="text-xl text-foreground-secondary hover:text-primary-600 transition-colors">
                Why Dwella
              </Link>
              <Link href="/support" className="text-xl text-foreground-secondary hover:text-primary-600 transition-colors">
                Support
              </Link>
              <Link href="/about" className="text-xl text-foreground-secondary hover:text-primary-600 transition-colors">
                About
              </Link>
              <Link href="/portal" className="text-xl text-primary-600 hover:text-primary-700 font-medium transition-colors">
                Client Login
              </Link>
              <Link href="/book-consultation" className="bg-gradient-dwella text-white px-8 py-3 rounded-lg text-xl hover:shadow-dwella transition-all duration-300">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#161C20' }}>
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="text-center">
            <div className="mb-12">
              <Image
                src="/logo.png"
                alt="Dwella Shield"
                width={160}
                height={160}
                className="mx-auto mb-8 drop-shadow-lg"
              />
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
              Peace of Mind
              <span className="block bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                at Home
              </span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Installed, Supported, Protected. Premium smart home service for those who value security, simplicity, and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/book-consultation" className="bg-gradient-dwella text-white px-12 py-6 rounded-lg text-2xl font-semibold hover:shadow-dwella-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
                Book a Consultation
                <ArrowRight className="ml-3 w-7 h-7" />
              </Link>
              <Link href="/packages" className="border-2 border-primary-500 text-primary-400 px-12 py-6 rounded-lg text-2xl font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                See Packages
              </Link>
            </div>
          </div>
        </div>
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-10 animate-pulse-slow">
          <Shield className="w-12 h-12 text-primary-400 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-16 animate-pulse-slow delay-1000">
          <Home className="w-14 h-14 text-primary-400 opacity-60" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-pulse-slow delay-2000">
          <Wifi className="w-10 h-10 text-primary-400 opacity-60" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 border-b border-gray-700" style={{ backgroundColor: '#161C20' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 text-gray-300">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-8 h-8 text-accent-500" />
              <span className="text-2xl font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-medium">Security Verified</span>
            </div>
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-warning-500" />
              <span className="text-2xl font-medium">5-Star Rated</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-8 h-8 text-gray-400" />
              <span className="text-2xl font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-24" style={{ backgroundColor: '#161C20' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Choose Your Perfect Package
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From basic monitoring to full concierge service, we have a plan that fits your needs and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Light Package */}
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-dwella transition-all duration-300 border border-secondary-200">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-foreground mb-3">Light</h3>
                <div className="text-5xl font-bold text-primary-600 mb-6">
                  $49<span className="text-2xl text-foreground-secondary">/mo</span>
                </div>
                <p className="text-xl text-foreground-secondary mb-8 leading-relaxed">Basic home monitoring with essential devices</p>
                <ul className="text-left space-y-4 mb-10">
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-accent-500 mr-4" />
                    <span className="text-xl">Up to 10 devices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-accent-500 mr-4" />
                    <span className="text-xl">Basic monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-accent-500 mr-4" />
                    <span className="text-xl">Email support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-accent-500 mr-4" />
                    <span className="text-xl">Monthly check-ins</span>
                  </li>
                </ul>
                <button className="w-full bg-secondary-100 text-secondary-700 py-4 rounded-lg text-xl font-semibold hover:bg-secondary-200 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Core Package - Featured */}
            <div className="bg-gradient-dwella rounded-2xl p-10 shadow-dwella-lg transform scale-105 text-white relative">
              <div className="absolute top-6 right-6 bg-white text-primary-600 px-4 py-2 rounded-full text-lg font-bold">
                Most Popular
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-3">Core</h3>
                <div className="text-5xl font-bold mb-6">
                  $99<span className="text-2xl opacity-80">/mo</span>
                </div>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">Enhanced home automation with priority support</p>
                <ul className="text-left space-y-4 mb-10">
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 mr-4" />
                    <span className="text-xl">Up to 25 devices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 mr-4" />
                    <span className="text-xl">Advanced monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 mr-4" />
                    <span className="text-xl">Priority phone support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 mr-4" />
                    <span className="text-xl">Family sharing (3 members)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 mr-4" />
                    <span className="text-xl">Bi-weekly check-ins</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-primary-600 py-4 rounded-lg text-xl font-semibold hover:bg-secondary-50 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Aura Package */}
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-dwella transition-all duration-300 border border-secondary-200">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-foreground mb-3">Aura</h3>
                <div className="text-5xl font-bold text-primary-600 mb-6">
                  $199<span className="text-2xl text-foreground-secondary">/mo</span>
                </div>
                <p className="text-xl text-foreground-secondary mb-8 leading-relaxed">Premium concierge service with full automation</p>
                <ul className="text-left space-y-4 mb-10">
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-accent-500 mr-4" />
                    <span className="text-xl">Unlimited devices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-accent-500 mr-4" />
                    <span className="text-xl">Premium monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-accent-500 mr-4" />
                    <span className="text-xl">24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-accent-500 mr-4" />
                    <span className="text-xl">Unlimited family sharing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-accent-500 mr-4" />
                    <span className="text-xl">On-site support included</span>
                  </li>
                </ul>
                <button className="w-full bg-secondary-100 text-secondary-700 py-4 rounded-lg text-xl font-semibold hover:bg-secondary-200 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white py-24" style={{ backgroundColor: '#161C20' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Secure Your Home?</h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of families who trust Dwella with their peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/book-consultation" className="bg-gradient-dwella text-white px-12 py-6 rounded-lg text-2xl font-semibold hover:shadow-dwella-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
              Schedule Free Consultation
              <Phone className="ml-3 w-7 h-7" />
            </Link>
            <Link href="mailto:hello@dwella.zone" className="border-2 border-primary-500 text-primary-400 px-12 py-6 rounded-lg text-2xl font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-16" style={{ backgroundColor: '#0f1419' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-4 mb-6">
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
              <p className="text-xl text-gray-400 leading-relaxed">
                Premium smart home service for those who value security, simplicity, and peace of mind.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/packages" className="text-xl hover:text-primary-400 transition-colors">Packages</Link></li>
                <li><Link href="/installation" className="text-xl hover:text-primary-400 transition-colors">Installation</Link></li>
                <li><Link href="/support" className="text-xl hover:text-primary-400 transition-colors">Support</Link></li>
                <li><Link href="/monitoring" className="text-xl hover:text-primary-400 transition-colors">Monitoring</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="text-xl hover:text-primary-400 transition-colors">About</Link></li>
                <li><Link href="/why-dwella" className="text-xl hover:text-primary-400 transition-colors">Why Dwella</Link></li>
                <li><Link href="/careers" className="text-xl hover:text-primary-400 transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="text-xl hover:text-primary-400 transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="mailto:hello@dwella.zone" className="text-xl hover:text-primary-400 transition-colors">hello@dwella.zone</a></li>
                <li><Link href="/portal" className="text-xl hover:text-primary-400 transition-colors">Client Portal</Link></li>
                <li><Link href="/book-consultation" className="text-xl hover:text-primary-400 transition-colors">Book Consultation</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2024 Dwella. All rights reserved. | <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link> | <Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
