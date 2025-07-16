'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Custom event tracking
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Conversion tracking
export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
    });
  }
};

// Enhanced ecommerce tracking
export const trackPurchase = (transactionId: string, value: number, currency: string = 'USD') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
    });
  }
};

// Custom dimensions and metrics
export const setCustomDimension = (dimensionIndex: number, value: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      [`custom_dimension${dimensionIndex}`]: value,
    });
  }
};

// User engagement tracking
export const trackEngagement = (engagementTime: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'user_engagement', {
      engagement_time_msec: engagementTime,
    });
  }
};

// Form tracking
export const trackFormSubmission = (formName: string, formId?: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    form_id: formId,
    event_category: 'engagement',
    event_label: formName,
  });
};

// Button click tracking
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
    event_category: 'engagement',
    event_label: `${buttonLocation} - ${buttonName}`,
  });
};

// Page view tracking with enhanced parameters
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Analytics Content Component
function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Track user engagement time
    let startTime = Date.now();
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const engagementTime = Date.now() - startTime;
        trackEngagement(engagementTime);
      } else {
        startTime = Date.now();
      }
    };

    const handleBeforeUnload = () => {
      const engagementTime = Date.now() - startTime;
      trackEngagement(engagementTime);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
            custom_map: {
              'custom_dimension1': 'user_type',
              'custom_dimension2': 'package_tier',
              'custom_dimension3': 'device_type'
            }
          });
        `}
      </Script>
      
      {/* Enhanced Ecommerce Tracking */}
      <Script id="enhanced-ecommerce" strategy="afterInteractive">
        {`
          gtag('config', '${GA_MEASUREMENT_ID}', {
            'enhanced_ecommerce': true
          });
        `}
      </Script>
      
      {/* Conversion Tracking */}
      <Script id="conversion-tracking" strategy="afterInteractive">
        {`
          // Track form submissions
          document.addEventListener('submit', function(e) {
            const form = e.target;
            if (form.tagName === 'FORM') {
              gtag('event', 'form_submit', {
                'form_name': form.name || form.id || 'unknown_form',
                'event_category': 'engagement',
                'event_label': form.name || form.id || 'unknown_form'
              });
            }
          });
          
          // Track button clicks
          document.addEventListener('click', function(e) {
            const button = e.target.closest('button, a[href], [role="button"]');
            if (button) {
              const buttonText = button.textContent?.trim() || button.getAttribute('aria-label') || 'unknown';
              const buttonLocation = button.closest('section, nav, div')?.className || 'unknown';
              
              gtag('event', 'button_click', {
                'button_name': buttonText,
                'button_location': buttonLocation,
                'event_category': 'engagement',
                'event_label': buttonLocation + ' - ' + buttonText
              });
            }
          });
        `}
      </Script>
    </>
  );
}

// Enhanced Analytics Component with Suspense
export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  );
}

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
} 