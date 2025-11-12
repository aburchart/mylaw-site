import { useState, useEffect } from "react";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/components/ui/booking-modal";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const { open: openBookingModal } = useBookingModal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const trustPoints = ["No litigation - we help you avoid it", "Brisbane-based with international credentials", "Specialized in aged care & NDIS compliance"];
  
  // Calculate opacity based on scroll (fade out after 300px of scrolling)
  const opacity = Math.max(1 - scrollY / 500, 0);

  return <section 
    className="relative min-h-[90vh] flex items-center overflow-hidden transition-opacity duration-300"
    style={{ opacity }}
  >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto lg:mx-0">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4 my-[20px]">
              <div className="inline-flex items-center space-x-2 bg-trust/60 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                <Shield className="h-4 w-4" />
                <span>Compliance-Focused Advisory</span>
              </div>
              
              <h1 className="heading-xl text-white">
                Protect Your Practice.{" "}
                <span className="text-secondary-warm"></span>
              </h1>
              
              <p className="body-lg text-white/90 max-w-lg">
                Brisbane's trusted advisors for aged care facilities, NDIS providers, 
                and healthcare practices. We help you stay compliant, reduce risk, and 
                focus on what matters - caring for your clients.
              </p>
            </div>

            {/* Trust Points */}
            <div className="space-y-3">
              {trustPoints.map((point, index) => <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-warm flex-shrink-0" />
                  <span className="text-white/90">{point}</span>
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="bg-secondary-warm hover:bg-secondary text-primary shadow-elevated" onClick={openBookingModal}>
                Book a Compliance Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Quick Help */}
            <div className="pt-4 border-t border-white/20">
              <p className="text-sm text-white/80">
                <strong>Urgent compliance question?</strong> Book a call above or email:{" "}
                <a href="mailto:admin@mylawsolutions.com.au" className="text-secondary-warm hover:underline">
                  admin@mylawsolutions.com.au
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;