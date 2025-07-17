import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "./structured-data";
import ClientComponents from "./client-components";

export const metadata: Metadata = {
  title: "Dwella - Smart Home Security & Automation | 24/7 Monitoring",
  description: "Professional smart home security installation and monitoring. Licensed, insured, 24/7 support. Get peace of mind with complete home automation and security.",
  keywords: [
    "smart home security",
    "home automation installation", 
    "smart home monitoring",
    "home security systems",
    "smart home support",
    "home automation services",
    "smart home technology",
    "home security installation",
    "smart home maintenance",
    "home automation support",
    "smart home consultation",
    "home security monitoring",
    "smart home packages",
    "home automation packages"
  ],
  authors: [{ name: "Dwella", url: "https://dwella.zone" }],
  creator: "Dwella",
  publisher: "Dwella",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dwella.zone'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dwella - Premium Smart Home Security & Automation Services",
    description: "Professional smart home installation, monitoring, and support services. Licensed, insured, and trusted by homeowners for complete home security and automation.",
    url: "https://dwella.zone",
    siteName: "Dwella",
    images: [
      {
        url: "/dwell_zone_logo.png",
        width: 1200,
        height: 630,
        alt: "Dwella - Professional Smart Home Security Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwella - Premium Smart Home Security & Automation Services",
    description: "Professional smart home installation, monitoring, and support services. Get peace of mind with 24/7 support.",
    images: ["/dwell_zone_logo.png"],
    creator: "@dwella",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/dwell_zone_icon.png", sizes: "32x32", type: "image/png" },
      { url: "/dwell_zone_icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/dwell_zone_icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/dwell_zone_icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dwella",
  },
  other: {
    "theme-color": "#161C20",
    "msapplication-TileColor": "#161C20",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <ClientComponents />
        {children}
      </body>
    </html>
  );
}
