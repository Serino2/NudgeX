"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/marketing/WaitlistForm";
import RevealOnView from "@/components/marketing/RevealOnView";

export default function Hero() {
    const heroRef = useRef<HTMLElement | null>(null);

    // optional: subtle parallax
    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;

        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                el.style.transform = `translateY(${scrolled * 0.18}px)`;
                el.style.opacity = String(Math.max(0.15, 1 - scrolled / 900));
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
            el.style.transform = "";
            el.style.opacity = "";
        };
    }, []);

    return (
        <section ref={heroRef} className="relative nx-hero-glow pt-[180px] pb-[120px] text-center">
            <Container className="relative">
                <RevealOnView delay={0.05} y={14}>
                    <div className="mb-5 text-sm uppercase tracking-[0.2em] text-white/50">
                        Coming soon — built with real recruitment teams
                    </div>
                </RevealOnView>

                <RevealOnView delay={0.12} y={28}>
                    <h1 className="mb-7 text-[40px] font-extrabold leading-[1.1] md:text-[64px]">
            <span className="bg-gradient-to-br from-white to-[#00d4ff] bg-clip-text text-transparent">
              The power of 100 recruiters
              <br />
              in a single tool.
            </span>
                    </h1>
                </RevealOnView>

                <RevealOnView delay={0.20} y={22}>
                    <p className="mx-auto mb-10 max-w-[800px] text-xl text-white/60 md:text-2xl">
                        We&apos;re building NudgeX to help recruitment teams follow up faster and more consistently.
                    </p>
                </RevealOnView>

                <RevealOnView delay={0.28} y={18}>
                    <Button
                        className="mb-14 h-12 rounded-full bg-gradient-to-br from-[#0099ff] to-[#00d4ff] px-10 text-base font-semibold shadow-[0_4px_15px_rgba(0,212,255,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,212,255,0.5)] md:h-14 md:text-lg"
                        asChild
                    >
                        <a href="#how">How NudgeX will work</a>
                    </Button>
                </RevealOnView>

                <RevealOnView delay={0.36} y={22}>
                    <div
                        id="waitlist"
                        className="mx-auto max-w-[700px] rounded-2xl border border-[#00d4ff]/20 bg-[#00d4ff]/5 p-6 md:p-10"
                    >
                        <div className="mb-5 text-center text-lg font-semibold text-[#00d4ff]">
                            Early Access
                        </div>

                        <h3 className="mb-2 text-center text-xl font-semibold md:text-[22px]">
                            Be among the first teams shaping NudgeX.
                        </h3>

                        <p className="mb-7 text-center text-white/60">
                            Join the early access list to influence the product and get priority access at launch.
                        </p>

                        <WaitlistForm source="hero" />

                        <div className="mt-5 flex flex-col items-center justify-center gap-2 text-sm text-white/50 md:flex-row md:gap-8">
                            <div className="flex items-center gap-2">
                                <span className="text-[#00d4ff]">✓</span>
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#00d4ff]">✓</span>
                                <span>Limited spots</span>
                            </div>
                        </div>
                    </div>
                </RevealOnView>
            </Container>
        </section>
    );
}