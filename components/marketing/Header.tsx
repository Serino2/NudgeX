import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function LinkedInIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden={true}
        >
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.22 8.09H4.78V24H.22V8.09ZM8.09 8.09H12.44V10.25H12.5C13.1 9.12 14.56 7.94 16.78 7.94 21.42 7.94 24 11.03 24 15.03V24H19.44V15.97C19.44 14.06 19.41 11.6 16.72 11.6 14 11.6 13.56 13.72 13.56 15.82V24H9V8.09H8.09Z" />
        </svg>
    );
}

export default function Header() {
    return (
        <header className="fixed top-0 z-[1000] w-full bg-black/95 backdrop-blur-md">
            <Container>
                {/* Left Side */}
                <nav className="flex items-center justify-between py-5">
                    {/* Logo */}
                    <a href="#" className="flex items-center">
                        <Image
                        src="/brand/nudgex-logo.png"
                        alt="NudgeX"
                        width={180}
                        height={44}
                        priority
                        />
                    </a>

                    {/* Right Side */}
                    <div className="flex items-center gap-5">
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/company/nudgexapp/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="NudgeX on LinkedIn"
                            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-[#00d4ff]/40 hover:text-[#00d4ff]"
                        >
                            <LinkedInIcon className="h-5 w-5" />

                            {/* subtle glow on hover */}
                            <span className="pointer-events-none absolute inset-0 rounded-full bg-[#00d4ff]/10 opacity-0 blur-md transition group-hover:opacity-100" />
                        </a>

                        {/* CTA */}
                        <Button asChild className="rounded-full px-7 py-6 font-semibold shadow-[0_4px_15px_rgba(0,212,255,0.3)] hover:-translate-y-0.5">
                            <a href="#">Join waitlist</a>
                        </Button>
                    </div>
                </nav>
            </Container>
        </header>
    );
}