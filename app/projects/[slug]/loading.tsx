"use client";
import { useEffect, useState } from 'react';

export default function Loading() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300); // 300ms delay
    return () => clearTimeout(timer);
  }, []);
  if (!show) return null;
  return (
    <div style={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="spinner" style={{ width: 40, height: 40, border: '4px solid #eee', borderTop: '4px solid #ffbc5e', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );
} 