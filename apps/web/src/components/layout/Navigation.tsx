import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-[#161C20]/95 backdrop-blur-sm border-b border-[#d18c52]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4">
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
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/configurator" className="text-xl text-gray-300 hover:text-[#d18c52] transition-colors">
              Configurator
            </Link>
            <Link href="/packages" className="text-xl text-gray-300 hover:text-[#d18c52] transition-colors">
              Solutions
            </Link>
            <Link href="/why-dwella" className="text-xl text-gray-300 hover:text-[#d18c52] transition-colors">
              Why Dwella
            </Link>
            <Link href="/support" className="text-xl text-gray-300 hover:text-[#d18c52] transition-colors">
              Support
            </Link>
            <Link href="/about" className="text-xl text-gray-300 hover:text-[#d18c52] transition-colors">
              About
            </Link>
            <Link href="/portal" className="text-xl text-[#d18c52] hover:text-[#e09660] font-medium transition-colors">
              Client Login
            </Link>
            <Link href="/book-consultation" className="bg-[#d18c52] text-white px-8 py-3 rounded-lg text-xl hover:bg-[#e09660] transition-all duration-300">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 