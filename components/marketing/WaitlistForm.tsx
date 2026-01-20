"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
    source: "hero" | "footer";
    className?: string;
};

export default function WaitlistForm({ source, className = "" }: Props) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setMessage("");

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, source }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setMessage(data.message || "You're on the list! 🎉");
                setEmail("");
            } else {
                setStatus("error");
                setMessage(data.error || "Something went wrong");
            }
        } catch {
            setStatus("error");
            setMessage("Network error. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={className}>
            <div className="flex flex-col gap-4 md:flex-row">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={status === "loading" || status === "success"}
                    className="flex-1 rounded-full border-2 border-[#00d4ff]/30 bg-[#0a0a14]/80 px-7 py-4 text-white placeholder:text-white/40 transition focus:border-[#00d4ff] focus:outline-none focus:ring-2 focus:ring-[#00d4ff]/20 disabled:opacity-50"
                />

                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="rounded-full bg-gradient-to-r from-[#0099ff] to-[#00d4ff] px-9 py-4 font-semibold text-white shadow-[0_4px_15px_rgba(0,212,255,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,212,255,0.5)] disabled:opacity-50 disabled:hover:translate-y-0"
                >
                    {status === "loading" ? "Joining..." : status === "success" ? "Joined! ✓" : "Join the waitlist"}
                </button>
            </div>

            {message && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-3 text-sm ${
                        status === "success" ? "text-green-400" : "text-red-400"
                    }`}
                >
                    {message}
                </motion.p>
            )}
        </form>
    );
}