import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ServicesOverview from "@/components/ui/services-overview";
import TrustSignals from "@/components/ui/trust-signals";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <TrustSignals />
      <Footer />
    </div>
  );
}
