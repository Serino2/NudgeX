"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
    variant?: "hero" | "final";
};

export default function WaitlistForm({ variant = "hero" }: Props) {
    const [email, setEmail] = useState("");

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        // TODO: koppel aan API route / server action
        // Voor nu: alleen UI
        setEmail("");
    }

    const inputClass =
        variant === "final"
            ? "h-12 rounded-full border border-[#00d4ff]/30 bg-black/60 px-6 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:ring-offset-0"
            : "h-12 rounded-full border-0 bg-white/10 px-6 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:ring-offset-0";

    return (
        <form
            onSubmit={onSubmit}
            className="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-4"
        >
            <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={inputClass}
                aria-label="Email address"
            />
            <Button
                type="submit"
                className="h-12 rounded-full px-7 font-semibold shadow-[0_4px_15px_rgba(0,212,255,0.3)]"
            >
                Join the waitlist
            </Button>
        </form>
    );
}