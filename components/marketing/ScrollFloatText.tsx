"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = { children: ReactNode; distance?: number };

export default function ScrollFloatText({ children, distance = 24 }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90%", "start 30%"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [distance, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div ref={ref} style={{ y, opacity }}>
            {children}
        </motion.div>
    );
}