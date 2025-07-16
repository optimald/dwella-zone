import Image from "next/image";
import Link from "next/link";
import { Shield, Home, Wifi, Phone, Clock, CheckCircle, Star, ArrowRight, Facebook, Users, Award, Heart, Lock, Bell, Calendar, ChevronRight, Puzzle, Zap, Settings, ShieldCheck, Wrench } from "lucide-react";
import Testimonials from "../components/Testimonials";

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
                Solutions
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
              <Link href="/book-consultation" className="bg-gradient-to-r from-[#d18c52] to-[#e09660] text-white px-8 py-3 rounded-lg text-xl hover:from-[#e09660] hover:to-[#d18c52] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#d18c52] shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced with dynamic elements */}
      <section className="relative text-white overflow-hidden bg-gradient-to-br from-[#161C20] via-[#1a2328] to-[#161C20]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d18c52]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-[#d18c52]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#d18c52]/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="text-center">
            {/* Urgency Banner */}
            <div className="inline-flex items-center bg-gradient-to-r from-[#d18c52] to-[#e09660] text-white px-6 py-3 rounded-full mb-8 animate-bounce">
              <Bell className="w-5 h-5 mr-2" />
              <span className="text-lg font-semibold">Limited Time: 30-Day Free Trial + $200 Installation Credit</span>
            </div>

            <div className="mb-12">
              <Image
                src="/dwell_zone_icon.png"
                alt="Dwella Shield"
                width={160}
                height={160}
                className="mx-auto mb-8 drop-shadow-2xl animate-float"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>

            {/* Enhanced value proposition */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Peace of Mind
              </span>
              <span className="block bg-gradient-to-r from-[#d18c52] via-[#e09660] to-[#d18c52] bg-clip-text text-transparent">
                at Home
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Professional smart home installation, automation, and concierge support. 
              <span className="text-[#d18c52] font-semibold"> Your confidence, coverage, and care—on your terms.</span>
            </p>

            {/* Social proof stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
              <div className="bg-[#1F2937]/50 backdrop-blur-sm rounded-lg px-6 py-4 border border-[#d18c52]/20">
                <div className="text-3xl font-bold text-[#d18c52]">10,000+</div>
                <div className="text-lg text-gray-300">Smart Homes</div>
              </div>
              <div className="bg-[#1F2937]/50 backdrop-blur-sm rounded-lg px-6 py-4 border border-[#d18c52]/20">
                <div className="text-3xl font-bold text-[#d18c52]">99.9%</div>
                <div className="text-lg text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="bg-[#1F2937]/50 backdrop-blur-sm rounded-lg px-6 py-4 border border-[#d18c52]/20">
                <div className="text-3xl font-bold text-[#d18c52]">24/7</div>
                <div className="text-lg text-gray-300">Expert Support</div>
              </div>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/book-consultation" className="group bg-gradient-to-r from-[#d18c52] to-[#e09660] text-white px-12 py-6 rounded-xl text-2xl font-bold hover:from-[#e09660] hover:to-[#d18c52] transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-[#d18c52]/25">
                Start My Smart Home
                <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/packages" className="group border-2 border-[#d18c52] text-[#d18c52] px-12 py-6 rounded-xl text-2xl font-bold hover:bg-[#d18c52] hover:text-white transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm">
                Explore Solutions
                <ChevronRight className="ml-3 w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-[#d18c52]" />
                <span className="text-lg">BBB A+ Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-[#d18c52]" />
                <span className="text-lg">Smart Home Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-[#d18c52]" />
                <span className="text-lg">10,000+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced floating elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <Shield className="w-12 h-12 text-[#d18c52] opacity-60 drop-shadow-lg" />
        </div>
        <div className="absolute top-1/3 right-16 animate-float delay-1000">
          <Home className="w-14 h-14 text-[#d18c52] opacity-60 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float delay-2000">
          <Wifi className="w-10 h-10 text-[#d18c52] opacity-60 drop-shadow-lg" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float delay-1500">
          <Lock className="w-8 h-8 text-[#d18c52] opacity-60 drop-shadow-lg" />
        </div>
      </section>

      {/* Enhanced Trust Badges */}
      <section className="py-16 border-b border-gray-700 bg-[#161C20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#d18c52]/20 to-[#e09660]/20 rounded-xl p-6 mb-4 group-hover:scale-105 transition-transform">
                <CheckCircle className="w-12 h-12 text-[#d18c52] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Licensed & Insured</h3>
                <p className="text-gray-300">Full coverage protection</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#d18c52]/20 to-[#e09660]/20 rounded-xl p-6 mb-4 group-hover:scale-105 transition-transform">
                <Shield className="w-12 h-12 text-[#d18c52] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Security Verified</h3>
                <p className="text-gray-300">Industry certified</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#d18c52]/20 to-[#e09660]/20 rounded-xl p-6 mb-4 group-hover:scale-105 transition-transform">
                <Star className="w-12 h-12 text-[#d18c52] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">5-Star Rated</h3>
                <p className="text-gray-300">Customer satisfaction</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#d18c52]/20 to-[#e09660]/20 rounded-xl p-6 mb-4 group-hover:scale-105 transition-transform">
                <Clock className="w-12 h-12 text-[#d18c52] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Always here for you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Flexible Solutions Preview */}
      <section className="py-24 bg-[#161C20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-[#d18c52] to-[#e09660] bg-clip-text text-transparent">Flexible Solutions</span> for Your Life
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Start with our essential core foundation, then add the modules that match your priorities. 
              <span className="text-[#d18c52] font-semibold"> Peace-as-a-Service, tailored to your needs.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Core Foundation */}
            <div className="group bg-gradient-to-br from-[#1F2937] to-[#2D3748] rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#d18c52]/20 hover:border-[#d18c52] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d18c52]/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-[#d18c52] to-[#e09660] p-3 rounded-xl mr-4">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Core Foundation</h3>
                    <p className="text-lg text-gray-300">Required for all solutions</p>
                  </div>
                </div>
                <div className="text-4xl font-black text-[#d18c52] mb-4">
                  $79<span className="text-2xl text-gray-300 font-normal">/mo</span>
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Smart hub, mobile app, professional installation, training, and essential devices to get you started.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#d18c52] mr-3 flex-shrink-0" />
                    <span className="text-white">Smart home hub & mobile app</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#d18c52] mr-3 flex-shrink-0" />
                    <span className="text-white">Professional installation & training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#d18c52] mr-3 flex-shrink-0" />
                    <span className="text-white">Essential smart devices (3-5)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#d18c52] mr-3 flex-shrink-0" />
                    <span className="text-white">Basic automation setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#d18c52] mr-3 flex-shrink-0" />
                    <span className="text-white">Email & chat support</span>
                  </li>
                </ul>
                <Link href="/packages" className="block w-full bg-gradient-to-r from-[#d18c52] to-[#e09660] text-white py-4 rounded-xl text-xl font-bold hover:from-[#e09660] hover:to-[#d18c52] transition-all duration-300 transform group-hover:scale-105 text-center">
                  Start with Core
                </Link>
              </div>
            </div>

            {/* Modular Add-ons */}
            <div className="group bg-gradient-to-br from-[#1F2937] to-[#2D3748] rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#d18c52]/20 hover:border-[#d18c52] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d18c52]/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-[#d18c52] to-[#e09660] p-3 rounded-xl mr-4">
                    <Puzzle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Add-on Modules</h3>
                    <p className="text-lg text-gray-300">Choose what matters to you</p>
                  </div>
                </div>
                <div className="text-4xl font-black text-[#d18c52] mb-4">
                  $29-89<span className="text-2xl text-gray-300 font-normal">/mo each</span>
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Mix and match specialized modules to create your perfect smart home experience.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-[#374151]/50 rounded-lg p-3">
                    <Shield className="w-6 h-6 text-[#d18c52] mb-2" />
                    <div className="text-sm font-semibold text-white">Security Pack</div>
                  </div>
                  <div className="bg-[#374151]/50 rounded-lg p-3">
                    <Zap className="w-6 h-6 text-[#d18c52] mb-2" />
                    <div className="text-sm font-semibold text-white">Comfort Pack</div>
                  </div>
                  <div className="bg-[#374151]/50 rounded-lg p-3">
                    <Heart className="w-6 h-6 text-[#d18c52] mb-2" />
                    <div className="text-sm font-semibold text-white">Health & Safety</div>
                  </div>
                  <div className="bg-[#374151]/50 rounded-lg p-3">
                    <Settings className="w-6 h-6 text-[#d18c52] mb-2" />
                    <div className="text-sm font-semibold text-white">Integration</div>
                  </div>
                </div>
                <Link href="/packages" className="block w-full border-2 border-[#d18c52] text-[#d18c52] py-4 rounded-xl text-xl font-bold hover:bg-[#d18c52] hover:text-white transition-all duration-300 transform group-hover:scale-105 text-center">
                  Explore Modules
                </Link>
              </div>
            </div>
          </div>

          {/* Module Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1F2937]/50 backdrop-blur-sm rounded-xl p-6 border border-[#d18c52]/20 hover:border-[#d18c52] transition-all duration-300 group">
              <Shield className="w-12 h-12 text-[#d18c52] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Security Pack</h3>
              <p className="text-gray-300 text-sm mb-3">Cameras, sensors, smart locks, monitoring</p>
              <div className="text-[#d18c52] font-semibold">From $49/mo</div>
            </div>
            <div className="bg-[#1F2937]/50 backdrop-blur-sm rounded-xl p-6 border border-[#d18c52]/20 hover:border-[#d18c52] transition-all duration-300 group">
              <Zap className="w-12 h-12 text-[#d18c52] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Comfort Pack</h3>
              <p className="text-gray-300 text-sm mb-3">Thermostats, lighting, shades, automation</p>
              <div className="text-[#d18c52] font-semibold">From $39/mo</div>
            </div>
            <div className="bg-[#1F2937]/50 backdrop-blur-sm rounded-xl p-6 border border-[#d18c52]/20 hover:border-[#d18c52] transition-all duration-300 group">
              <Heart className="w-12 h-12 text-[#d18c52] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Health & Safety</h3>
              <p className="text-gray-300 text-sm mb-3">Air quality, fall detection, emergency alerts</p>
              <div className="text-[#d18c52] font-semibold">From $29/mo</div>
            </div>
            <div className="bg-[#1F2937]/50 backdrop-blur-sm rounded-xl p-6 border border-[#d18c52]/20 hover:border-[#d18c52] transition-all duration-300 group">
              <Wrench className="w-12 h-12 text-[#d18c52] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Care & Support</h3>
              <p className="text-gray-300 text-sm mb-3">24/7 monitoring, maintenance, concierge</p>
              <div className="text-[#d18c52] font-semibold">From $89/mo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <Testimonials />

      {/* Enhanced Call to Action */}
      <section className="py-24 bg-gradient-to-br from-[#161C20] via-[#1a2328] to-[#161C20]">
                  <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Ready to <span className="bg-gradient-to-r from-[#d18c52] to-[#e09660] bg-clip-text text-transparent">Transform Your Home</span>?
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
              Join 10,000+ families who trust Dwella with their smart home experience.
            </p>
          
          {/* Urgency elements */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-[#1F2937]/50 backdrop-blur-sm rounded-lg px-6 py-4 border border-[#d18c52]/20">
              <div className="text-2xl font-bold text-[#d18c52]">Free Installation</div>
              <div className="text-lg text-gray-300">$500 value</div>
            </div>
            <div className="bg-[#1F2937]/50 backdrop-blur-sm rounded-lg px-6 py-4 border border-[#d18c52]/20">
              <div className="text-2xl font-bold text-[#d18c52]">30-Day Trial</div>
              <div className="text-lg text-gray-300">Risk-free start</div>
            </div>
            <div className="bg-[#1F2937]/50 backdrop-blur-sm rounded-lg px-6 py-4 border border-[#d18c52]/20">
              <div className="text-2xl font-bold text-[#d18c52]">24/7 Support</div>
              <div className="text-lg text-gray-300">Always here</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/book-consultation" className="group bg-gradient-to-r from-[#d18c52] to-[#e09660] text-white px-12 py-6 rounded-xl text-2xl font-bold hover:from-[#e09660] hover:to-[#d18c52] transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-[#d18c52]/25 transform hover:scale-105">
              Schedule Free Consultation
              <Calendar className="ml-3 w-7 h-7 group-hover:scale-110 transition-transform" />
            </Link>
            <Link href="/contact" className="group border-2 border-[#d18c52] text-[#d18c52] px-12 py-6 rounded-xl text-2xl font-bold hover:bg-[#d18c52] hover:text-white transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm">
              Talk to Expert
              <Phone className="ml-3 w-7 h-7 group-hover:scale-110 transition-transform" />
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
                  aria-label="Follow Dwella on Facebook"
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
