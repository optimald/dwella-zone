import { Award, Shield, Users, Star, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const certifications = [
  {
    name: 'Licensed & Insured',
    description: 'Fully licensed smart home installation contractor with comprehensive liability insurance',
    icon: Shield
  },
  {
    name: 'Certified Installer',
    description: 'Certified by leading smart home manufacturers including Ring, Nest, and August',
    icon: Award
  },
  {
    name: 'BBB Accredited',
    description: 'A+ rating with Better Business Bureau for outstanding customer service',
    icon: Star
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'Dwella transformed our home into a smart, secure environment. The installation was seamless and the support has been exceptional. I feel so much safer knowing my elderly mother is being monitored when I&apos;m at work.',
    package: 'Aura Package'
  },
  {
    name: 'Michael Chen',
    role: 'Family Caregiver',
    location: 'Seattle, WA',
    rating: 5,
    text: 'As someone caring for aging parents, Dwella&apos;s system has been a game-changer. The family portal allows me to check on my parents remotely, and the emergency alerts give me peace of mind.',
    package: 'Core Package'
  },
  {
    name: 'Patricia Williams',
    role: 'Retired Teacher',
    location: 'Portland, OR',
    rating: 5,
    text: 'I was hesitant about smart home technology, but Dwella made it so simple and user-friendly. The interface is intuitive, and their support team is incredibly patient and helpful.',
    package: 'Light Package'
  }
]

const team = [
  {
    name: 'David Rodriguez',
    role: 'Founder & CEO',
    bio: 'With over 15 years in smart home technology, David founded Dwella with a simple mission: make smart homes accessible and beneficial for everyone, especially families caring for elderly loved ones.',
    image: '/team/david.jpg'
  },
  {
    name: 'Jennifer Park',
    role: 'Head of Operations',
    bio: 'Jennifer brings 12 years of operations experience from the healthcare technology sector, ensuring our systems meet the highest standards of reliability and customer service.',
    image: '/team/jennifer.jpg'
  },
  {
    name: 'Robert Thompson',
    role: 'Lead Technician',
    bio: 'Robert is a certified smart home installer with expertise in all major platforms. He leads our installation team and ensures every system is perfectly configured.',
    image: '/team/robert.jpg'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="text-dwella-gold block">Dwella</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            We&apos;re a team of passionate professionals dedicated to making smart home technology accessible, reliable, and beneficial for families.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
          <div className="text-lg text-slate-300 space-y-6">
            <p>
              At Dwella, we believe that smart home technology should enhance your life, not complicate it. 
              Our mission is to provide peace of mind through reliable, intuitive smart home solutions that 
              work seamlessly in the background.
            </p>
            <p>
              We specialize in serving families who need extra support, whether that&apos;s monitoring an 
              elderly loved one, providing security for a busy household, or creating a more comfortable 
              living environment. Our systems are designed with both the user and their caregivers in mind.
            </p>
            <p>
              Every installation, every feature, and every interaction is guided by our PeaceTech philosophy: 
              technology should make your life easier, safer, and more peaceful.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 text-center">
                <div className="w-24 h-24 bg-slate-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-dwella-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-dwella-gold font-semibold mb-4">{member.role}</p>
                <p className="text-slate-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Trust & Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 text-center">
                <div className="bg-dwella-gold/20 p-4 rounded-xl inline-block mb-6">
                  <cert.icon className="h-8 w-8 text-dwella-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cert.name}</h3>
                <p className="text-slate-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing & Insurance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Licensing & Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Licenses</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  Smart Home Installation License #SHI-2024-001
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  Electrical Contractor License #EC-2024-045
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  Security System Installer License #SSI-2024-023
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Insurance</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  General Liability: $2,000,000
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  Professional Liability: $1,000,000
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  Workers&apos; Compensation: Full Coverage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="border-t border-slate-600 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role} • {testimonial.location}</p>
                  <p className="text-dwella-gold text-sm font-medium">{testimonial.package}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-dwella-gold mb-2">500+</div>
              <div className="text-slate-400">Homes Protected</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-dwella-gold mb-2">99.9%</div>
              <div className="text-slate-400">Uptime</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-dwella-gold mb-2">4.9★</div>
              <div className="text-slate-400">Customer Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-dwella-gold mb-2">24/7</div>
              <div className="text-slate-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Trust
            <span className="text-dwella-gold block">Dwella?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of families who trust us to protect and enhance their homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-dwella-gold text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-dwella-gold/90 transition-colors"
            >
              View Packages
            </Link>
            <Link
              href="/book-consultation"
              className="border border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 