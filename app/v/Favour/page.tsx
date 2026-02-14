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

export default function FavourPage() {
    return (
        <div className="fixed inset-0 z-[99999] w-screen h-screen bg-white overflow-hidden">
            <iframe
                src="/digibouquet/bouquet/favour.html"
                className="w-full border-none block"
                title="Bouquet for Favour"
                loading="eager"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{ width: '100vw', height: '100vh' }}
            />
        </div>
    );
}
