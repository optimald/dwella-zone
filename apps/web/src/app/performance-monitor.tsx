'use client';

import { useEffect } from 'react';
import { trackEvent } from '../lib/analytics-utils';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (lastEntry) {
          const lcp = lastEntry.startTime;
          trackEvent('web_vitals', {
            metric_name: 'LCP',
            metric_value: Math.round(lcp),
            metric_rating: getRating(lcp, [2500, 4000])
          });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming;
          const fid = fidEntry.processingStart - fidEntry.startTime;
          trackEvent('web_vitals', {
            metric_name: 'FID',
            metric_value: Math.round(fid),
            metric_rating: getRating(fid, [100, 300])
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const clsEntry = entry as unknown as { hadRecentInput: boolean; value: number };
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        });
        
        trackEvent('web_vitals', {
          metric_name: 'CLS',
          metric_value: Math.round(clsValue * 1000) / 1000,
          metric_rating: getRating(clsValue, [0.1, 0.25])
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[0].startTime;
        
        trackEvent('web_vitals', {
          metric_name: 'FCP',
          metric_value: Math.round(fcp),
          metric_rating: getRating(fcp, [1800, 3000])
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Time to Interactive (TTI)
      const ttiObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const tti = entries[0].startTime;
        
        trackEvent('web_vitals', {
          metric_name: 'TTI',
          metric_value: Math.round(tti),
          metric_rating: getRating(tti, [3800, 7300])
        });
      });
      ttiObserver.observe({ entryTypes: ['measure'] });

      // Monitor resource loading performance
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.initiatorType === 'img' || resourceEntry.initiatorType === 'script' || resourceEntry.initiatorType === 'css') {
            trackEvent('resource_timing', {
              resource_type: resourceEntry.initiatorType,
              resource_name: resourceEntry.name,
              duration: Math.round(resourceEntry.duration),
              transfer_size: resourceEntry.transferSize || 0
            });
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });

      // Monitor navigation timing
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            trackEvent('navigation_timing', {
              dom_content_loaded: Math.round(navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart),
              load_complete: Math.round(navEntry.loadEventEnd - navEntry.loadEventStart),
              dom_interactive: Math.round(navEntry.domInteractive),
              redirect_count: navEntry.redirectCount,
              page_size: navEntry.transferSize || 0
            });
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Monitor user interactions
      let interactionCount = 0;
      const interactionObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          interactionCount++;
          trackEvent('interaction_timing', {
            interaction_id: interactionCount,
            interaction_type: entry.name,
            duration: Math.round(entry.duration),
            start_time: Math.round(entry.startTime)
          });
        });
      });
      interactionObserver.observe({ entryTypes: ['interaction'] });

      // Monitor memory usage
      if ('memory' in performance) {
        setInterval(() => {
          const memory = (performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
          trackEvent('memory_usage', {
            used_js_heap_size: Math.round(memory.usedJSHeapSize / 1024 / 1024),
            total_js_heap_size: Math.round(memory.totalJSHeapSize / 1024 / 1024),
            js_heap_size_limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
          });
        }, 30000); // Every 30 seconds
      }

      // Monitor network information
      if ('connection' in navigator) {
        const connection = (navigator as unknown as { connection: { effectiveType: string; downlink: number; rtt: number; saveData: boolean } }).connection;
        trackEvent('network_info', {
          effective_type: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          save_data: connection.saveData
        });
      }

      // Monitor viewport and device info
      trackEvent('device_info', {
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,
        device_pixel_ratio: window.devicePixelRatio,
        user_agent: navigator.userAgent.substring(0, 100)
      });

      // Monitor scroll depth
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        
        if (scrollPercent > maxScrollDepth) {
          maxScrollDepth = scrollPercent;
          if (maxScrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
            trackEvent('scroll_depth', {
              depth_percentage: maxScrollDepth
            });
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth, { passive: true });

      // Monitor time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Date.now() - startTime;
        trackEvent('time_on_page', {
          seconds: Math.round(timeOnPage / 1000)
        });
      };

      // Track time on page every 30 seconds
      setInterval(trackTimeOnPage, 30000);

      // Track when user leaves the page
      window.addEventListener('beforeunload', () => {
        const timeOnPage = Date.now() - startTime;
        trackEvent('page_exit', {
          time_on_page_seconds: Math.round(timeOnPage / 1000),
          max_scroll_depth: maxScrollDepth
        });
      });

      // Cleanup observers on unmount
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        ttiObserver.disconnect();
        resourceObserver.disconnect();
        navigationObserver.disconnect();
        interactionObserver.disconnect();
        window.removeEventListener('scroll', trackScrollDepth);
      };
    }
  }, []);

  return null;
}

// Helper function to determine metric rating
function getRating(value: number, thresholds: [number, number]): 'good' | 'needs-improvement' | 'poor' {
  const [good, poor] = thresholds;
  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
} 