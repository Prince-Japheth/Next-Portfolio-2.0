import React from 'react';

// Minimal type for ToastActionElement
export type ToastActionElement = React.ReactNode;

// Minimal type for ToastProps
export type ToastProps = {
  id: string;
  title?: string;
  description?: string;
  action?: ToastActionElement;
};

// Placeholder Toast component (expand as needed)
export function Toast(props: ToastProps) {
  return null;
} 