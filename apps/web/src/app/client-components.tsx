'use client';

import Analytics from "./analytics";
import ServiceWorkerRegistration from "./service-worker";
import PerformanceMonitor from "./performance-monitor";

export default function ClientComponents() {
  return (
    <>
      <Analytics />
      <ServiceWorkerRegistration />
      <PerformanceMonitor />
    </>
  );
} 