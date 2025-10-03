import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useBookingModal } from "@/components/ui/booking-modal";
const HeroSection = () => {
  const {
    open: openBookingModal
  } = useBookingModal();
  const trustPoints = ["No litigation - we help you avoid it", "Brisbane-based with international credentials", "Specialized in aged care & NDIS compliance"];
  return <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-10" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-0">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-trust/60 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                <Shield className="h-4 w-4" />
                <span>Compliance-Focused Advisory</span>
              </div>
              
              <h1 className="heading-xl text-primary-foreground">
                Protect Your Practice.{" "}
                <span className="text-secondary-warm">Avoid Litigation.</span>
              </h1>
              
              <p className="body-lg text-primary-foreground/90 max-w-lg">
                Brisbane's trusted legal advisors for aged care facilities, NDIS providers, 
                and healthcare practices. We help you stay compliant, reduce risk, and 
                focus on what matters - caring for your clients.
              </p>
            </div>

            {/* Trust Points */}
            <div className="space-y-3">
              {trustPoints.map((point, index) => <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-warm flex-shrink-0" />
                  <span className="text-primary-foreground/90">{point}</span>
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="bg-secondary-warm hover:bg-secondary text-primary shadow-elevated" onClick={openBookingModal}>
                Book a Compliance Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Download Compliance Guide
              </Button>
            </div>

            {/* Quick Help */}
            <div className="pt-4 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/80">
                <strong>Urgent compliance question?</strong> Call us directly at{" "}
                <a href="tel:+61700000000" className="text-secondary-warm hover:underline">
                  (07) 0000 0000
                </a>
              </p>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-slide-up">
            <Card className="p-8 bg-card/95 backdrop-blur shadow-elevated mx-[24px] my-[24px]">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="heading-sm text-primary mb-2">Worried About Compliance?</h3>
                  <p className="text-muted-foreground">
                    Get peace of mind with our comprehensive audit checklist
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-trust rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Aged Care Act compliance</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-trust rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">NDIS audit preparation</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-trust rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Documentation standards</span>
                  </div>
                </div>
                
                <Button className="w-full shadow-professional">
                  Get Your Free Checklist
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;