import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ServicesOverview from "@/components/ui/services-overview";
import TrustSignals from "@/components/ui/trust-signals";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <TrustSignals />
      <Footer />
    </div>
  );
};

export default Index;
