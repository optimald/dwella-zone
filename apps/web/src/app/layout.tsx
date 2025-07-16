import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dwella - Peace of Mind at Home",
  description: "Premium smart home service for those who value security, simplicity, and peace of mind. Installed, Supported, Protected.",
  keywords: ["smart home", "home security", "home automation", "monitoring", "installation", "support"],
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
    title: "Dwella - Peace of Mind at Home",
    description: "Premium smart home service for those who value security, simplicity, and peace of mind.",
    url: "https://dwella.zone",
    siteName: "Dwella",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Dwella - Smart Home Security",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwella - Peace of Mind at Home",
    description: "Premium smart home service for those who value security, simplicity, and peace of mind.",
    images: ["/logo.png"],
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
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dwella",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
