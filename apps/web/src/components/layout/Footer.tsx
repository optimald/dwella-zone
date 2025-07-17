import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#161C20] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/dwell_zone_icon.png"
                alt="Dwella Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-3xl font-bold text-white">
                Dwella
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Premium smart home service for those who value security, simplicity, and peace of mind. 
              Installed, Supported, Protected.
            </p>
            <div className="flex space-x-4">
              <div className="text-gray-400">
                <p className="text-sm">Licensed & Insured</p>
                <p className="text-sm">License #SHI-2024-001</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-[#d18c52] transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/installation" className="text-gray-300 hover:text-[#d18c52] transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/monitoring" className="text-gray-300 hover:text-[#d18c52] transition-colors">
                  Monitoring
                </Link>
              </li>
              <li>
                <Link href="/why-dwella" className="text-gray-300 hover:text-[#d18c52] transition-colors">
                  Why Dwella
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-[#d18c52] transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/book-consultation" className="text-gray-300 hover:text-[#d18c52] transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#d18c52] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portal" className="text-gray-300 hover:text-[#d18c52] transition-colors">
                  Client Portal
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-[#d18c52] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link href="/terms-of-service" className="text-gray-400 hover:text-[#d18c52] transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#d18c52] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/refund-warranty" className="text-gray-400 hover:text-[#d18c52] transition-colors text-sm">
                Refund & Warranty
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Dwella.zone. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 