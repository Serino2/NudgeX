import Container from "@/components/ui/Container";
import WaitlistForm from "@/components/marketing/WaitlistForm";
import RevealOnView from "@/components/marketing/RevealOnView";

export default function FinalCTA() {
    return (
        <section className="relative nx-final-glow py-[120px] text-center">
            <Container className="relative">
                <RevealOnView>
                    <h2 className="mb-5 text-4xl font-bold md:text-[48px]">Be part of what comes next</h2>
                </RevealOnView>

                <RevealOnView delay={0.08} y={18}>
                    <p className="mx-auto mb-14 max-w-[700px] text-lg text-white/60">
                        NudgeX is being built together with teams who deal with follow-ups on a daily.
                        <br />
                        Early partners help shape what launches and what comes after.
                    </p>
                </RevealOnView>

                <RevealOnView delay={0.14} y={26}>
                    <div className="mx-auto max-w-[800px] overflow-hidden rounded-[30px] border-2 border-[#00d4ff]/30 bg-gradient-to-br from-[#00d4ff]/10 to-[#0099ff]/10 p-8 md:p-[60px]">
            <span className="mb-8 inline-flex rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0099ff] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Early Partner Program
            </span>

                        <h3 className="mb-8 text-2xl font-semibold text-white md:text-[32px]">
                            Join as an early partner
                        </h3>

                        <h2 className="mb-8 text-2xl font-semibold text-white md:text-[26px]">If your team follows up with people, customers, candidates, or partners — we’d love your input.</h2>

                        <div className="mx-auto max-w-[520px]">
                            <WaitlistForm source="footer" className="max-w-[500px] mx-auto" />
                        </div>

                        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-white/50 md:flex-row md:gap-10">
                            <div className="flex items-center gap-2">
                                <span className="text-[#00d4ff]">✓</span>
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#00d4ff]">✓</span>
                                <span>Limited early spots</span>
                            </div>
                        </div>
                    </div>
                </RevealOnView>
            </Container>
        </section>
    );
}