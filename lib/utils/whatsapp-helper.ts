/**
 * Generates a WhatsApp link that works reliably across mobile and desktop.
 * @param phoneNumber The phone number in international format without '+' or non-numeric characters.
 * @param message Optional message to pre-fill.
 * @param isMobile Whether the user is on a mobile device (optional).
 * @returns A robust WhatsApp link.
 */
export function getWhatsAppLink(phoneNumber: string, message?: string, isMobile?: boolean): string {
    const baseUrl = isMobile
        ? "https://api.whatsapp.com/send"
        : "https://web.whatsapp.com/send";

    const params = new URLSearchParams();
    params.set("phone", phoneNumber);

    if (message) {
        params.set("text", message);
    }

    return `${baseUrl}?${params.toString()}`;
}

/**
 * Alternative robust "Click to Chat" link using universal API.
 * This is generally more reliable than wa.me on some desktop environments.
 */
export function getUniversalWhatsAppLink(phoneNumber: string, message?: string): string {
    const baseUrl = "https://api.whatsapp.com/send";
    const params = new URLSearchParams();
    params.set("phone", phoneNumber);
    if (message) {
        params.set("text", message);
    }
    return `${baseUrl}?${params.toString()}`;
}
