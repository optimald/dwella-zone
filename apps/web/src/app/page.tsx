import Image from "next/image";
import Link from "next/link";
import { Shield, Home, Wifi, Phone, Clock, CheckCircle, Star, ArrowRight, Facebook } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#161C20]">
      {/* Navigation */}
      <nav className="bg-[#161C20]/95 backdrop-blur-sm border-b border-[#d18c52]/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/dwell_zone_icon.png"
                alt="Dwella Logo"
                width={48}
                height={48}
                className="w-12 h-12"
                priority
              />
              <span className="text-3xl font-bold text-white">
                Dwella
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/packages" className="text-xl text-gray-300 hover:text-[#d18c52] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d18c52] focus:ring-offset-2 focus:ring-offset-[#161C20] rounded px-2 py-1">
                Packages
              </Link>
              <Link href="/why-dwella" className="text-xl text-gray-300 hover:text-[#d18c52] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d18c52] focus:ring-offset-2 focus:ring-offset-[#161C20] rounded px-2 py-1">
                Why Dwella
              </Link>
              <Link href="/support" className="text-xl text-gray-300 hover:text-[#d18c52] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d18c52] focus:ring-offset-2 focus:ring-offset-[#161C20] rounded px-2 py-1">
                Support
              </Link>
              <Link href="/about" className="text-xl text-gray-300 hover:text-[#d18c52] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d18c52] focus:ring-offset-2 focus:ring-offset-[#161C20] rounded px-2 py-1">
                About
              </Link>
              <Link href="/portal" className="text-xl text-[#d18c52] hover:text-[#e09660] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#d18c52] focus:ring-offset-2 focus:ring-offset-[#161C20] rounded px-2 py-1">
                Client Login
              </Link>
              <Link href="/book-consultation" className="bg-[#d18c52] text-white px-8 py-3 rounded-lg text-xl hover:bg-[#e09660] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#d18c52]">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden bg-[#161C20]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="text-center">
            <div className="mb-12">
              <Image
                src="/dwell_zone_icon.png"
                alt="Dwella Shield"
                width={160}
                height={160}
                className="mx-auto mb-8 drop-shadow-lg"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
              Peace of Mind
              <span className="block text-[#d18c52]">
                at Home
              </span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Installed, Supported, Protected. Premium smart home service for those who value security, simplicity, and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/book-consultation" className="bg-[#d18c52] text-white px-12 py-6 rounded-lg text-2xl font-semibold hover:bg-[#e09660] transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
                Book a Consultation
                <ArrowRight className="ml-3 w-7 h-7" />
              </Link>
              <Link href="/packages" className="border-2 border-[#d18c52] text-[#d18c52] px-12 py-6 rounded-lg text-2xl font-semibold hover:bg-[#d18c52] hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                See Packages
              </Link>
            </div>
          </div>
        </div>
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-10 animate-pulse-slow">
          <Shield className="w-12 h-12 text-[#d18c52] opacity-60" />
        </div>
        <div className="absolute top-1/3 right-16 animate-pulse-slow delay-1000">
          <Home className="w-14 h-14 text-[#d18c52] opacity-60" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-pulse-slow delay-2000">
          <Wifi className="w-10 h-10 text-[#d18c52] opacity-60" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 border-b border-gray-700 bg-[#161C20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 text-gray-300">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-8 h-8 text-[#d18c52]" />
              <span className="text-2xl font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-[#d18c52]" />
              <span className="text-2xl font-medium">Security Verified</span>
            </div>
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-[#d18c52]" />
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
      <section className="py-24 bg-[#161C20]">
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
            <div className="bg-[#1F2937] rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#d18c52]/20">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-3">Light</h3>
                <div className="text-5xl font-bold text-[#d18c52] mb-6">
                  $49<span className="text-2xl text-gray-300">/mo</span>
                </div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">Basic home monitoring with essential devices</p>
                <ul className="text-left space-y-4 mb-10">
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">Up to 10 devices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">Basic monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">Email support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">Monthly check-ins</span>
                  </li>
                </ul>
                <Link href="/packages/light" className="block w-full bg-[#d18c52] text-white py-4 rounded-lg text-xl font-semibold hover:bg-[#e09660] transition-colors">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Core Package - Featured */}
            <div className="bg-[#1F2937] rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#d18c52] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#d18c52] text-white px-6 py-2 rounded-full text-xl font-semibold">Most Popular</span>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-3">Core</h3>
                <div className="text-5xl font-bold text-[#d18c52] mb-6">
                  $99<span className="text-2xl text-gray-300">/mo</span>
                </div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">Enhanced home automation with priority support</p>
                <ul className="text-left space-y-4 mb-10">
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">Up to 25 devices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">Advanced monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">Priority phone support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">Family sharing (3 members)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">Bi-weekly check-ins</span>
                  </li>
                </ul>
                <Link href="/packages/core" className="block w-full bg-[#d18c52] text-white py-4 rounded-lg text-xl font-semibold hover:bg-[#e09660] transition-colors">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Aura Package */}
            <div className="bg-[#1F2937] rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#d18c52]/20">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-3">Aura</h3>
                <div className="text-5xl font-bold text-[#d18c52] mb-6">
                  $199<span className="text-2xl text-gray-300">/mo</span>
                </div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">Complete concierge service with unlimited support</p>
                <ul className="text-left space-y-4 mb-10">
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">Unlimited devices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">Premium monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">24/7 concierge support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">Family sharing (5 members)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-[#d18c52] mr-4" />
                    <span className="text-xl text-white">Weekly check-ins</span>
                  </li>
                </ul>
                <Link href="/packages/aura" className="block w-full bg-[#d18c52] text-white py-4 rounded-lg text-xl font-semibold hover:bg-[#e09660] transition-colors">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#161C20]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Secure Your Home?
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of families who trust Dwella with their peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/book-consultation" className="bg-[#d18c52] text-white px-12 py-6 rounded-lg text-2xl font-semibold hover:bg-[#e09660] transition-all duration-300 inline-flex items-center justify-center">
              Schedule Free Consultation
              <Phone className="ml-3 w-7 h-7" />
            </Link>
            <Link href="/contact" className="border-2 border-[#d18c52] text-[#d18c52] px-12 py-6 rounded-lg text-2xl font-semibold hover:bg-[#d18c52] hover:text-white transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F1419] border-t border-[#d18c52]/20">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/dwell_zone_icon.png"
                  alt="Dwella"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold text-white">Dwella</span>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-md leading-relaxed">
                Premium smart home service for those who value security, simplicity, and peace of mind.
              </p>
              <div className="flex space-x-6">
                <a 
                  href="https://www.facebook.com/dwellazone" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#d18c52] transition-colors"
                >
                  <Facebook className="w-8 h-8" />
                </a>
              </div>
              <div className="mt-8">
                <p className="text-xl text-gray-300">
                  <strong>Email:</strong> <a href="mailto:hello@dwella.zone" className="text-[#d18c52] hover:underline">hello@dwella.zone</a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/packages" className="text-xl hover:text-[#d18c52] transition-colors">Packages</Link></li>
                <li><Link href="/installation" className="text-xl hover:text-[#d18c52] transition-colors">Installation</Link></li>
                <li><Link href="/support" className="text-xl hover:text-[#d18c52] transition-colors">Support</Link></li>
                <li><Link href="/monitoring" className="text-xl hover:text-[#d18c52] transition-colors">Monitoring</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="text-xl hover:text-[#d18c52] transition-colors">About</Link></li>
                <li><Link href="/why-dwella" className="text-xl hover:text-[#d18c52] transition-colors">Why Dwella</Link></li>
                <li><Link href="/careers" className="text-xl hover:text-[#d18c52] transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="text-xl hover:text-[#d18c52] transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2024 Dwella. All rights reserved. | <Link href="/privacy-policy" className="hover:text-[#d18c52] transition-colors">Privacy Policy</Link> | <Link href="/terms" className="hover:text-[#d18c52] transition-colors">Terms of Service</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
