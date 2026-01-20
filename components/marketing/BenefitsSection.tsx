"use client";

import Container from "@/components/ui/Container";
import RevealOnView from "@/components/marketing/RevealOnView";
import StaggerOnView, { staggerItem } from "@/components/marketing/StaggerOnView";
import { motion } from "framer-motion";

const benefits = [
    {
        n: "01",
        text: (
            <>
                Be among the first to shape <span className="nx-highlight">NudgeX</span> and help define the
                future of follow-ups.
            </>
        ),
    },
    {
        n: "02",
        text: (
            <>
                Early teams don&apos;t just get notified — they help shape{" "}
                <span className="nx-highlight">NudgeX</span> around real follow-up problems.
            </>
        ),
    },
    {
        n: "03",
        text: (
            <>
                Built with sales and recruitment teams to ensure <span className="nx-highlight">NudgeX</span>{" "}
                fits real-world workflows.
            </>
        ),
    },
];

export default function BenefitsSection() {
    return (
        <section className="py-[100px] text-center">
            <Container>
                <RevealOnView>
                    <h2 className="mb-12 text-4xl font-bold md:text-[48px]">
                        Built for teams that take follow-ups seriously
                    </h2>
                </RevealOnView>

                <StaggerOnView stagger={0.10}>
                    <div className="mb-16 grid grid-cols-1 gap-7 md:grid-cols-3">
                        {benefits.map((b) => (
                            <motion.div
                                key={b.n}
                                variants={staggerItem}
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-12"
                            >
                                <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#00d4ff]/30 bg-gradient-to-br from-[#00d4ff]/20 to-[#0099ff]/20 text-sm font-bold text-[#00d4ff]">
                                    {b.n}
                                </div>

                                <h4 className="mt-6 text-lg font-semibold leading-relaxed text-white">{b.text}</h4>

                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#00d4ff] to-[#0099ff] transition-transform duration-300 group-hover:scale-x-100" />

                                {/* Hover styling zonder transform-jank */}
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.10),transparent_60%)]" />
                            </motion.div>
                        ))}
                    </div>
                </StaggerOnView>

                <RevealOnView delay={0.05} y={18}>
                    <div className="text-3xl font-bold leading-tight md:text-[36px]">
            <span className="bg-gradient-to-br from-white to-[#00d4ff] bg-clip-text text-transparent">
              This isn&apos;t about launching fast.
              <br />
              It&apos;s about getting the fundamentals right.
            </span>
                    </div>
                </RevealOnView>
            </Container>
        </section>
    );
}