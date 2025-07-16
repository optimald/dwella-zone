'use client';

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  package: string;
  image?: string;
  video?: string;
  verified: boolean;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Beverly Hills, CA",
    rating: 5,
    text: "Dwella transformed our home security. The installation was seamless, and the 24/7 support gives us incredible peace of mind. Our adult children can also monitor everything remotely, which is perfect for our family.",
    package: "Aura Package",
    verified: true,
    date: "2024-12-15"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Palo Alto, CA",
    rating: 5,
    text: "As someone who travels frequently, I needed a reliable smart home system. Dwella's Core package exceeded my expectations. The app is intuitive, and their support team responds within minutes.",
    package: "Core Package",
    verified: true,
    date: "2024-12-10"
  },
  {
    id: 3,
    name: "Patricia Williams",
    location: "Scottsdale, AZ",
    rating: 5,
    text: "The Light package was perfect for our needs. Professional installation, clear instructions, and ongoing support. I feel much safer knowing my home is monitored 24/7.",
    package: "Light Package",
    verified: true,
    date: "2024-12-08"
  },
  {
    id: 4,
    name: "Robert Martinez",
    location: "Miami, FL",
    rating: 5,
    text: "Outstanding service from start to finish. The team was professional, knowledgeable, and patient with all our questions. The system works flawlessly and integrates perfectly with our existing smart devices.",
    package: "Aura Package",
    verified: true,
    date: "2024-12-05"
  },
  {
    id: 5,
    name: "Jennifer Davis",
    location: "Seattle, WA",
    rating: 5,
    text: "We chose Dwella for their reputation and comprehensive service. The family sharing feature allows our children to help monitor our home, which gives everyone peace of mind.",
    package: "Core Package",
    verified: true,
    date: "2024-12-01"
  },
  {
    id: 6,
    name: "David Thompson",
    location: "Austin, TX",
    rating: 5,
    text: "The consultation process was thorough and educational. They helped us choose the right package for our needs and budget. Installation was quick and clean. Highly recommend!",
    package: "Light Package",
    verified: true,
    date: "2024-11-28"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-[#161C20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See why homeowners choose Dwella for their smart home security needs
          </p>
          
          {/* Overall Rating */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#d18c52] fill-current" />
              ))}
            </div>
            <div className="text-white">
              <span className="text-3xl font-bold">4.9</span>
              <span className="text-xl text-gray-300 ml-2">/ 5.0</span>
            </div>
            <div className="text-gray-300 text-xl">
              <span className="font-semibold">1,247</span> verified reviews
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1F2937] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#d18c52]/20"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#d18c52] fill-current" />
                ))}
                {testimonial.verified && (
                  <span className="ml-2 text-sm text-[#d18c52] font-medium">✓ Verified</span>
                )}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-[#d18c52] mb-4" />
                <p className="text-lg text-gray-300 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.location}</p>
                  <p className="text-sm text-[#d18c52] font-medium">{testimonial.package}</p>
                </div>
                <div className="text-right text-sm text-gray-400">
                  {new Date(testimonial.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-r from-[#1F2937] to-[#374151] rounded-3xl p-12 shadow-2xl border border-[#d18c52]/30">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Video/Image Section */}
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <div className="relative bg-[#0F1419] rounded-2xl overflow-hidden aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-[#d18c52] hover:bg-[#e09660] text-white p-6 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  Customer Story
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#d18c52] fill-current" />
                ))}
                <span className="ml-3 text-[#d18c52] font-semibold">
                  {currentTestimonial.rating}.0/5.0
                </span>
              </div>

              <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-8">
                &ldquo;{currentTestimonial.text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentTestimonial.name}</h3>
                  <p className="text-gray-300">{currentTestimonial.location}</p>
                  <p className="text-[#d18c52] font-semibold">{currentTestimonial.package}</p>
                </div>

                {/* Navigation */}
                <div className="flex space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="bg-[#d18c52] hover:bg-[#e09660] text-white p-3 rounded-full transition-all duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="bg-[#d18c52] hover:bg-[#e09660] text-white p-3 rounded-full transition-all duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-gray-300 text-xl font-semibold">BBB A+ Rating</div>
            <div className="text-gray-300 text-xl font-semibold">Licensed & Insured</div>
            <div className="text-gray-300 text-xl font-semibold">24/7 Support</div>
            <div className="text-gray-300 text-xl font-semibold">5-Year Warranty</div>
            <div className="text-gray-300 text-xl font-semibold">Money-Back Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
} 