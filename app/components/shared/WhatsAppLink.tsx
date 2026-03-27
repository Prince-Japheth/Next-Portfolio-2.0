"use client";

import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { getWhatsAppLink } from '@/lib/utils/whatsapp-helper';
import { CONTACT_NUMBERS } from '@/lib/constants/contact';

interface WhatsAppLinkProps {
    children?: React.ReactNode;
    className?: string;
    phoneNumber?: string;
    message?: string;
    target?: string;
    rel?: string;
}

/**
 * A robust WhatsApp link component that automatically switches between 
 * api.whatsapp.com (mobile) and web.whatsapp.com (desktop) for maximum compatibility.
 */
const WhatsAppLink: React.FC<WhatsAppLinkProps> = ({
    children,
    className = "",
    phoneNumber = CONTACT_NUMBERS.WHATSAPP,
    message,
    target = "_blank",
    rel = "noopener noreferrer",
}) => {
    const isMobile = useIsMobile();

    // We use a state for the href to avoid hydration mismatch 
    // because useIsMobile uses window.innerWidth
    const [href, setHref] = React.useState<string>(`https://api.whatsapp.com/send?phone=${phoneNumber}${message ? `&text=${encodeURIComponent(message)}` : ""}`);

    React.useEffect(() => {
        setHref(getWhatsAppLink(phoneNumber, message, isMobile));
    }, [isMobile, phoneNumber, message]);

    return (
        <a
            href={href}
            className={className}
            target={target}
            rel={rel}
            aria-label="Contact via WhatsApp"
        >
            {children || <i className="iconoir-whatsapp" />}
        </a>
    );
};

export default WhatsAppLink;
