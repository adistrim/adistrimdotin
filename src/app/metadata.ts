import type { Metadata } from "next";

/**
 * Update the metadata as needed — for example, you can add
 * a high-resolution /me.webp image at 1200x630 for better social sharing previews.
 */
export const siteMetadata: Metadata = {
    title: "Aditya Raj",
    description:
        "A digital space where I share my passions without social media algorithms",
    keywords:
        "Aditya Raj, aditya raj, aditya, raj, adistrim, Adistrim, ADISTRIM, portfolio, aditya portfolio, adistrim portfolio",
    // Favicon & icons
    icons: {
        icon: "/me.webp",
    },
    // Open Graph for social sharing
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://adistrim.in",
        title: "Aditya Raj",
        description:
            "A digital space where I share my passions without social media algorithms",
        images: [
            {
                url: "/og_image.webp",
                width: 1200,
                height: 630,
                alt: "Aditya Raj - Portfolio Cover",
            },
        ],
    },
    // Twitter (X) metadata
    twitter: {
        card: "summary_large_image",
        site: "@_adistrim_",
        title: "Aditya Raj",
        description:
            "A digital space where I share my passions without social media algorithms",
        images: ["/og_image.webp"],
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
        canonical: "https://adistrim.in",
    },
};
