"use client";

import { useEffect, useRef } from 'react';
import { useBrowser } from '../context/BrowserContext';
import { useRouter } from 'next/navigation';

interface UrlHandlerProps {
    slug: string[];
}

const UrlHandler: React.FC<UrlHandlerProps> = ({ slug }) => {
    const { openBrowser } = useBrowser();
    const router = useRouter();
    const hasHandledRef = useRef(false);

    useEffect(() => {
        if (slug && slug.length > 0 && !hasHandledRef.current) {
            hasHandledRef.current = true;

            // Construct the URL from the slug array
            let url = slug.join('/');

            // Basic validation/normalization
            if (!url.startsWith('http')) {
                url = `https://${url}`;
            }

            // Open the browser
            openBrowser({
                id: `external-${url}`,
                title: url,
                url: url,
                position: { x: 0, y: 0 } // Position will be handled by context
            });

            // Redirect to home to show the background
            router.replace('/');
        }
    }, [slug, openBrowser, router]);

    return null;
};

export default UrlHandler;
