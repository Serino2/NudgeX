"use client";

import Container from "@/components/ui/Container";
import RevealOnView from "@/components/marketing/RevealOnView";
import StaggerOnView, { staggerItem } from "@/components/marketing/StaggerOnView";
import { motion } from "framer-motion";

const blocks = [
    {
        title: "Never lose track of stalled threads",
        paragraphs: [
            "Threads go quiet for many reasons — and they're easy to miss when everything lives across inboxes, CRM views, and spreadsheets.",
            "NudgeX helps you instantly see which threads need attention, where momentum is slowing down, and what deserves focus right now — so nothing slips through the cracks.",
        ],
    },
    {
        title: "Follow up at the right moment",
        paragraphs: [
            "Following up isn't just about speed — it's about timing, relevance, and context.",
            "NudgeX helps you decide how and when to follow up, so every message feels intentional and well-timed, instead of rushed or forgotten.",
            "No more guessing. No more second-guessing.",
        ],
        italicLast: true,
    },
    {
        title: "Stay fully in control",
        paragraphs: [
            "Automation should support your team — not replace judgment.",
            "With NudgeX, nothing gets sent automatically. You review every follow-up, adjust tone and wording when needed, and decide exactly what goes out. Always.",
            "You stay in control, while NudgeX does the heavy lifting.",
        ],
        boldLast: true,
    },
];

function renderWithHighlight(text: string) {
    const parts = text.split("NudgeX");
    return parts.map((p, i) => (
        <span key={i}>
      {p}
            {i < parts.length - 1 && <span className="nx-highlight">NudgeX</span>}
    </span>
    ));
}

export default function FeaturesSection() {
    return (
        <section className="py-[100px]">
            <Container>
                <RevealOnView>
                    <h2 className="mb-14 text-center text-4xl font-bold md:text-[48px]">
                        What this means in practice
                    </h2>
                </RevealOnView>

                <StaggerOnView delay={0.08} stagger={0.10}>
                    <div className="mx-auto flex max-w-[820px] flex-col gap-7">
                        {blocks.map((b) => (
                            <motion.div
                                key={b.title}
                                variants={staggerItem}
                                className="rounded-xl border-l-4 border-l-[#00d4ff] bg-gradient-to-r from-white/5 to-[#00d4ff]/10 p-10"
                            >
                                <h3 className="mb-5 text-2xl font-semibold text-[#00d4ff] md:text-[28px]">
                                    {b.title}
                                </h3>

                                {b.paragraphs.map((p, idx) => {
                                    const isLast = idx === b.paragraphs.length - 1;
                                    const extra =
                                        isLast && b.italicLast
                                            ? "italic mt-5"
                                            : isLast && b.boldLast
                                                ? "font-semibold mt-5"
                                                : "";

                                    return (
                                        <p key={idx} className={`mb-4 text-base leading-7 text-white/80 ${extra}`}>
                                            {renderWithHighlight(p)}
                                        </p>
                                    );
                                })}
                            </motion.div>
                        ))}
                    </div>
                </StaggerOnView>
            </Container>
        </section>
    );
}