"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
};

type ContainerCustom = { stagger: number; delay: number };

const container: Variants = {
    hidden: {},
    show: (c: ContainerCustom) => ({
        transition: {
            staggerChildren: c.stagger,
            delayChildren: c.delay,
        },
    }),
};

export default function StaggerOnView({
                                          children,
                                          className,
                                          stagger = 0.08,
                                          delay = 0.05,
                                          once = true,
                                          amount = 0.25,
                                      }: {
    children: ReactNode;
    className?: string;
    stagger?: number;
    delay?: number;
    once?: boolean;
    amount?: number;
}) {
    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once, amount }}
            custom={{ stagger, delay }}
        >
            {children}
        </motion.div>
    );
}