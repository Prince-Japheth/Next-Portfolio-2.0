"use client";

import React from 'react';
import { AlertCircle, RefreshCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ErrorStateProps {
    message?: string;
    onRetry?: () => void;
    className?: string;
    title?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({
    message = "Something went wrong. Please try again later.",
    onRetry,
    className = "",
    title = "Error Occurred"
}) => {
    return (
        <div className={cn(
            "error-state-container shadow-box p-8 text-center bg-[#1e1e1e]/50 backdrop-blur-md border border-white/10 rounded-[30px]",
            className
        )}>
            <div className="flex flex-col items-center justify-center gap-6">
                <div className="relative">
                    <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full" />
                    <div className="relative bg-red-500/10 p-5 rounded-full border border-red-500/20">
                        <AlertCircle className="w-10 h-10 text-red-500" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent italic leading-tight">
                        {title}
                    </h3>
                    <p className="text-gray-400 max-w-xs mx-auto text-sm leading-relaxed">
                        {message}
                    </p>
                </div>

                {onRetry && (
                    <button
                        onClick={onRetry}
                        className="theme-btn group flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-400 hover:from-red-500 hover:to-red-300 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-500/20"
                    >
                        <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                        <span>Try Again</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default ErrorState;
