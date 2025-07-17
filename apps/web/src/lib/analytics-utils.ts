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

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
} 