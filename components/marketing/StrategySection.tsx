"use client";

import Container from "@/components/ui/Container";
import RevealOnView from "@/components/marketing/RevealOnView";
import StaggerOnView, { staggerItem } from "@/components/marketing/StaggerOnView";
import { motion } from "framer-motion";

const stages = [
    {
        n: 1,
        title: "Deliberately focused first version",
        text: "So your real problems don’t get buried",
        widthClass: "w-full",
        bgClass: "bg-gradient-to-br from-[#00d4ff]/20 to-[#0099ff]/10",
    },
    {
        n: 2,
        title: "Building the core",
        text: "So follow-ups work before automation",
        widthClass: "w-[85%]",
        bgClass: "bg-gradient-to-br from-[#00d4ff]/10 to-[#0099ff]/5",
    },
    {
        n: 3,
        title: "Foundation first",
        text: "So you don’t have to relearn the tool later",
        widthClass: "w-[70%]",
        bgClass: "bg-gradient-to-br from-[#00d4ff]/10 to-[#0099ff]/5",
    },
];

export default function StrategySection() {
    return (
        <section className="py-[100px] text-center" id="how">
            <Container>
                <RevealOnView>
                    <h2 className="mb-10 text-4xl font-bold md:text-[48px]">Starting with what actually matters</h2>
                </RevealOnView>

                <StaggerOnView>
                    <div className="mx-auto mt-14 max-w-[600px]">
                        {stages.map((s, idx) => (
                            <motion.div
                                key={s.n}
                                variants={staggerItem}
                                whileHover={{
                                    y: -8,
                                    borderColor: "rgba(0, 212, 255, 0.6)",
                                    boxShadow: "0 10px 40px rgba(0, 212, 255, 0.3)"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`relative mx-auto mb-5 ${s.widthClass} rounded-xl border-2 border-[#00d4ff]/30 ${s.bgClass} p-8`}
                            >
                                {idx !== 0 && (
                                    <div className="pointer-events-none absolute left-1/2 top-[-20px] h-0 w-0 -translate-x-1/2 border-l-[15px] border-r-[15px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#00d4ff]/30" />
                                )}

                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0099ff] font-bold">
                                    {s.n}
                                </div>

                                <h4 className="mb-2 text-2xl font-semibold text-white">{s.title}</h4>
                                <p className="text-base text-white/60">{s.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </StaggerOnView>

                <RevealOnView delay={0.05} y={18}>
                    <div className="relative mx-auto mt-14 max-w-[860px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-md md:p-12">
                        {/* left accent rail */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-transparent via-[#00d4ff]/70 to-transparent" />

                        {/* subtle glow */}
                        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#00d4ff]/10 blur-3xl" />
                        <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[#0099ff]/10 blur-3xl" />

                        {/* statement */}
                        <p className="text-balance text-2xl font-semibold leading-relaxed text-white md:text-[28px]">
                            We&apos;re building the core of what matters most:
                            <br />
                            <span className="bg-gradient-to-br from-white to-[#00d4ff] bg-clip-text text-transparent">
                                helping teams follow up faster, without losing control.
                            </span>
                        </p>

                        {/* faint grid texture (optional but nice) */}
                        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:22px_22px]" />
                    </div>
                </RevealOnView>

            </Container>
        </section>
    );
}