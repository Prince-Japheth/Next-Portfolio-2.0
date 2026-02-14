import React from 'react';

export const metadata = {
    title: 'Bla bla bla',
    description: 'Proper name, backstory stuff',
    openGraph: {
        title: 'Bla bla bla',
        description: 'Proper name, backstory stuff',
        images: [
            {
                url: '/digibouquet/nicolette.png',
                width: 1200,
                height: 630,
                alt: 'Bouquet Preview',
            },
        ],
        type: 'website',
    },
};

export default function NicolettePage() {
    // const targetUrl = 'https://digibouquet.vercel.app/bouquet/b541fb3b-7ee0-46a2-991d-b8e041a127d3';
    // Use the proxy API to fetch and render the content with modifications
    // const proxyUrl = `/api/proxy-bouquet?url=${encodeURIComponent(targetUrl)}`;

    return (
        <div className="fixed inset-0 z-[99999] w-screen h-screen bg-white overflow-hidden">
            <iframe
                // src={proxyUrl}
                src="/digibouquet/bouquet/b541fb3b-7ee0-46a2-991d-b8e041a127d3.html"
                className="w-full border-none block"
                title="Bouquet for Nicolette"
                loading="eager"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{ width: '100vw', height: '100vh' }}
            />
        </div>
    );
}
