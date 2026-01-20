import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 z-[1000] w-full bg-black/95 backdrop-blur-md">
            <Container>
                <nav className="flex items-center justify-between py-5">
                    <a href="#" className="flex items-center">
                        <Image
                        src="/brand/nudgex-logo.png"
                        alt="NudgeX"
                        width={180}
                        height={44}
                        priority
                        />
                    </a>

                    <Button asChild className="rounded-full px-7 py-6 font-semibold shadow-[0_4px_15px_rgba(0,212,255,0.3)] hover:-translate-y-0.5">
                        <a href="#">Join waitlist</a>
                    </Button>
                </nav>
            </Container>
        </header>
    );
}