
import { Metadata } from 'next';

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

import Oneko from '../components/Oneko';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Oneko />
            <div className="v-layout-container">{children}</div>
        </>
    );
}
