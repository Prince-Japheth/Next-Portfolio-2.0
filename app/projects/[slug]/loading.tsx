"use client";
import { useEffect } from 'react';

export default function Loading() {
  useEffect(() => {
    // Show the default preloader when this loading component mounts
    if (typeof window !== "undefined" && window.showPreloader) {
      window.showPreloader();
    }
  }, []);

  // Return null to let the default preloader handle the loading state
  return null;
} 