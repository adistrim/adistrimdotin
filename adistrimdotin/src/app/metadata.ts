import type { Metadata } from "next";

/**
 * Update the metadata as needed — for example, you can add
 * a high-resolution /me.webp image at 1200x630 for better social sharing previews.
 */

const DESCRIPTION = "My portfolio of projects, technical thoughts, and ongoing experiments.";
const WEB_URL = "https://adistrim.in";
const NAME = "Aditya Raj";

export const siteMetadata: Metadata = {
    title: NAME,
    description: DESCRIPTION,
    keywords: "Aditya Raj, aditya raj, aditya, raj, adistrim, Adistrim, ADISTRIM, portfolio, aditya portfolio, adistrim portfolio",
    // Favicon & icons
    icons: {
        icon: "/me.webp",
    },
    metadataBase: new URL(WEB_URL),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: WEB_URL,
        title: NAME,
        description: DESCRIPTION,
    },
    // Twitter (X) metadata
    twitter: {
        card: "summary_large_image",
        site: "@adistrim0",
        title: NAME,
        description: DESCRIPTION,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    // Canonical URL to avoid duplicate content
    alternates: {
        canonical: WEB_URL,
    },
};
