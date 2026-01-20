import Header from "@/components/marketing/Header";
import Hero from "@/components/marketing/Hero";
import WhySection from "@/components/marketing/WhySection";
import BenefitsSection from "@/components/marketing/BenefitsSection";
import StrategySection from "@/components/marketing/StrategySection";
import FeaturesSection from "@/components/marketing/FeaturesSection";
import FinalCTA from "@/components/marketing/FinalCTA";
import IntroOverlay from "@/components/marketing/IntroOverlay";

export default function Page() {
    return (
        <>
            <IntroOverlay />
            <Header />
            <main>
                <Hero />
                <WhySection />
                <BenefitsSection />
                <StrategySection />
                <FeaturesSection />
                <FinalCTA />
            </main>
        </>
    );
}