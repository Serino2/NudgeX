"use client";

import { motion, useInView, type Transition } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    duration?: number;
    once?: boolean;
    amount?: number;         // 0..1 (how many visible before trigger)
};

export default function RevealOnView({
                                         children,
                                         className,
                                         delay = 0,
                                         y = 18,
                                         duration = 0.6,
                                         once = true,
                                         amount = 0.25,
                                     }: Props) {
    const ref = useRef<HTMLDivElement | null>(null);

    const inView = useInView(ref, {
        once,
        amount,
        margin: "0px 0px -100px 0px", // Triggers 100px before it appears in view
    });

    const transition: Transition = {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={transition}
        >
            {children}
        </motion.div>
    );
}