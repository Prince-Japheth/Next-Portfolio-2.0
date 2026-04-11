"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import ErrorState from "./ui/ErrorState";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class AppErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <ErrorState 
            title="Application Error"
            message={this.state.error?.message || "An unexpected error occurred while loading the application."}
            onRetry={this.handleRetry}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
