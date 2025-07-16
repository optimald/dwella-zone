export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dwella",
    "description": "Premium smart home security and automation services. Professional installation, monitoring, and 24/7 support for complete peace of mind.",
    "url": "https://dwella.zone",
    "logo": "https://dwella.zone/dwell_zone_logo.png",
    "image": "https://dwella.zone/dwell_zone_logo.png",
    "telephone": "+1-555-DWELLA",
    "email": "hello@dwella.zone",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "areaServed": "United States",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Smart Home Security Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Light Package",
            "description": "Basic home monitoring with essential devices"
          },
          "price": "49",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "49",
            "priceCurrency": "USD",
            "billingIncrement": "P1M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Core Package",
            "description": "Enhanced home automation with priority support"
          },
          "price": "99",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "99",
            "priceCurrency": "USD",
            "billingIncrement": "P1M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aura Package",
            "description": "Complete concierge service with unlimited devices"
          },
          "price": "199",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "199",
            "priceCurrency": "USD",
            "billingIncrement": "P1M"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Dwella transformed our home security. Professional installation and amazing 24/7 support."
      }
    ],
    "sameAs": [
      "https://twitter.com/dwella",
      "https://facebook.com/dwellazone"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 