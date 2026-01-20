"use client";

import Container from "@/components/ui/Container";
import RevealOnView from "@/components/marketing/RevealOnView";
import StaggerOnView, { staggerItem } from "@/components/marketing/StaggerOnView";
import { motion } from "framer-motion";

const problems = [
    "Responding too late to new leads",
    "No clear overview of open follow-ups",
    "Follow-ups slipping through the cracks",
    "Spending too much time on manual follow-ups",
];

export default function WhySection() {
    return (
        <section className="relative overflow-hidden py-[100px] text-center">
            <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#00d4ff]/30 to-transparent" />

            <Container className="relative">
                <RevealOnView>
                    <h2 className="mb-6 text-4xl font-bold md:text-[48px]">Why this exists</h2>
                </RevealOnView>

                <RevealOnView delay={0.08}>
                    <p className="mb-10 text-xl text-white/60 md:text-2xl">Does this sound familiar?</p>
                </RevealOnView>

                <StaggerOnView stagger={0.06}>
                    <div className="nx-problem-grid relative mx-auto mb-16 grid max-w-[900px] grid-cols-1 gap-[3px] rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#0099ff]/20 p-[3px] md:grid-cols-2">
                        {problems.map((text) => (
                            <motion.div
                                key={text}
                                variants={staggerItem}
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="group relative bg-black/95 px-8 py-10 text-white/60 hover:bg-[#14141e]/95 hover:text-white"
                            >
                <span className="pointer-events-none absolute right-5 top-5 text-2xl opacity-30 transition duration-300 group-hover:rotate-[10deg] group-hover:opacity-60">
                  ⚠
                </span>
                                {text}
                            </motion.div>
                        ))}
                    </div>
                </StaggerOnView>

                <RevealOnView delay={0.05}>
                    <p className="mb-14 text-2xl md:text-[28px]">
                        That&apos;s exactly why we&apos;re building <span className="nx-highlight">NudgeX</span>
                    </p>
                </RevealOnView>

                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="relative mx-auto max-w-[1000px] overflow-hidden rounded-[30px] border-2 border-[#00d4ff]/30 bg-[#0a0a14]/60 p-8 backdrop-blur-md md:p-[60px]"
                >
                    <h3 className="mb-7 text-sm font-semibold uppercase tracking-[0.25em] text-[#00d4ff]">
                        The core insight
                    </h3>

                    <div className="my-6 text-3xl font-bold leading-tight md:text-[42px]">
                        <span className="bg-gradient-to-br from-white to-[#00d4ff] bg-clip-text text-transparent">
                            Follow-ups don&apos;t fail because teams don&apos;t care
                        </span>
                    </div>

                    <p className="mb-4 text-lg text-white/80">
                        They fail because timing, context, and ownership are scattered across tools. Speed alone doesn&apos;t
                        solve that. Automation without control doesn&apos;t either.
                    </p>

                    <p className="mt-8 text-lg font-semibold text-white md:text-xl">
                        NudgeX exists to bring follow-ups back together —
                        <br />
                        with clarity first, intelligence second, and humans always in control.
                    </p>

                    {/* shimmer sweep */}
                    <div
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,transparent_35%,rgba(0,212,255,0.12)_45%,rgba(0,212,255,0.15)_50%,rgba(0,212,255,0.12)_55%,transparent_65%,transparent_100%)]"
                        style={{
                            animation: "nxShimmer 8s ease-in-out infinite",
                            animationDelay: "1s",
                            transform: "skewX(-15deg)",
                            width: "150%",
                            left: "-25%"
                        }}
                    />
                </motion.div>
            </Container>
        </section>
    );
}