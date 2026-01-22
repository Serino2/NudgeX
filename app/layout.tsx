import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MotionConfig } from "framer-motion";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://nudgex.app"),
    title: {
        default: "NudgeX — Coming Soon",
        template: "%s — NudgeX",
    },
    description:
        "NudgeX helps teams follow up with clarity, consistency, and control — across any workflow. Join early access to help shape what’s coming.",
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: "/",
        siteName: "NudgeX",
        title: "NudgeX — Coming Soon",
        description:
            "NudgeX helps teams follow up with clarity, consistency, and control — across any workflow. Join early access to help shape what’s coming.",
        images: [
            {
                url: "/og/nudgex-og.png",
                width: 1200,
                height: 630,
                alt: "NudgeX — Follow-ups with clarity, consistency, and control",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "NudgeX — Coming Soon",
        description:
            "NudgeX helps teams follow up with clarity, consistency, and control — across any workflow. Join early access to help shape what’s coming.",
        images: ["/og/nudgex-og.png"],
    },
    robots: { index: true, follow: true },

    icons: {
        icon: [
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon.ico" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png" }],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body>
        <MotionConfig reducedMotion="never">{children}</MotionConfig>
        </body>
        </html>
    );
}