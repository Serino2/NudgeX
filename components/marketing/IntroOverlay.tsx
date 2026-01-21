"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type IntroOverlayProps = {
    /** optional: only show once per session */
    oncePerSession?: boolean;
};

export default function IntroOverlay({ oncePerSession = true }: IntroOverlayProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // show overlay on first mount
        if (oncePerSession) {
            const seen = sessionStorage.getItem("nx_intro_seen");
            if (seen) return;
            sessionStorage.setItem("nx_intro_seen", "1");
        }

        // Defer state update to avoid sync setState in effect
        const showTimer = window.setTimeout(() => {
            setShow(true);
        }, 0);

        // lock scroll while visible
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const hideTimer = window.setTimeout(() => {
            setShow(false);
            document.body.style.overflow = prev;
        }, 1200);

        return () => {
            window.clearTimeout(showTimer);
            window.clearTimeout(hideTimer);
            document.body.style.overflow = prev;
        };
    }, [oncePerSession]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-black via-[#0b0f1a] to-[#090a0a]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.35 } }}
                >
                    {/* glow background */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00d4ff]/10 blur-3xl" />
                        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0099ff]/10 blur-3xl" />
                    </div>

                    {/* logo / wordmark */}
                    <motion.div
                        initial={{ y: 18, opacity: 0, filter: "blur(10px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative text-center"
                    >
                        <div className="text-xs font-semibold tracking-[0.35em] text-white/50">
                            COMING SOON
                        </div>

                        <div className="mt-4 text-6xl font-extrabold md:text-7xl">
                            <span className="bg-gradient-to-br from-white to-[#00d4ff] bg-clip-text text-transparent">
                                Nudge
                            </span>
                            <span className="ml-2 bg-gradient-to-br from-[#00d4ff] to-[#0048d9] bg-clip-text text-transparent">
                            X
                            </span>
                        </div>

                        <div className="mt-4 text-sm text-white/60">
                            Follow-up intelligence for serious teams
                        </div>

                        {/* loading bar */}
                        <div className="mx-auto mt-7 h-1.5 w-48 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                                className="h-full w-full bg-gradient-to-r from-[#00d4ff] to-[#0099ff]"
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 1.0, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}