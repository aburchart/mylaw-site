import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, AlertTriangle, Users, FileCheck, Clock, Download, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useBookingModal } from "@/components/ui/booking-modal";
import servicesCareHero from "@/assets/services-care-hero.jpg";
const AgedCareAdvisory = () => {
  const {
    open: openBookingModal
  } = useBookingModal();
  const commonTriggers = [{
    text: "You've received a notice from the ACQSC",
    icon: AlertTriangle
  }, {
    text: "You're preparing for a scheduled or surprise audit",
    icon: FileCheck
  }, {
    text: "Staff complaints or family concerns are escalating",
    icon: Users
  }, {
    text: "You're unsure if your policies meet updated standards",
    icon: Shield
  }, {
    text: "A leadership change has exposed compliance gaps",
    icon: AlertTriangle
  }, {
    text: "You want to prevent patient harm or ombudsman complaints",
    icon: CheckCircle
  }];
  const services = ["Policy and procedure review & drafting", "Staff training on resident rights, consent, and safety", "Clinical documentation audits", "Risk assessment for regulatory gaps", "On-call support during audit season", "Preparing evidence bundles and regulator responses", "Advice on privacy, incident reporting, and governance"];
  const differentiators = ["Former hospital in-house legal counsel", "Dual-qualified (Australia, NZ, Canada)", "Fluent in clinical documentation and aged care standards", "We explain legal regulatory risk in plain English — no courtroom jargon", "We focus on preventing harm and keeping your facility running smoothly"];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumbs */}
      <div className="border-b">
        <div className="container py-3">
          <nav className="flex text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-foreground">Aged Care Compliance Advisory</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${servicesCareHero})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/60" />
        </div>
        
        {/* Content */}
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Accredited. Avoid Complaints. Focus on Quality Care.
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
            We help aged care facilities across Queensland stay compliant, prepare for audits, and protect residents — without the legal jargon.
          </p>
          <Button size="lg" className="shadow-professional" onClick={openBookingModal}>
            <Phone className="mr-2 h-5 w-5" />
            Book a Compliance Call
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="text-lg leading-relaxed mb-6">
              Operating an aged care facility comes with constant regulatory pressure — from evolving laws to last-minute audit notices. At MyLaw Solutions, we partner with Aged Care providers to deliver practical, compliance-focused legal support tailored to the aged care sector.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're updating policies, training staff, or responding to the Aged Care Quality and Safety Commission (ACQSC), we make sure you meet your obligations and stay audit-ready — without putting your accreditation or funding at risk.
            </p>
          </div>
        </div>
      </section>

      {/* Common Triggers */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">When Clients Call Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonTriggers.map((trigger, index) => {
            const IconComponent = trigger.icon;
            return <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed">{trigger.text}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Aged Care Compliance Services Include:</h2>
          </div>
          <div className="grid gap-4">
            {services.map((service, index) => <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/30 transition-colors">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{service}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Makes MyLaw Solutions Different?</h2>
          </div>
          <div className="grid gap-4">
            {differentiators.map((point, index) => <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-background border">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{point}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      

      {/* Final CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Make Your Next Audit Boring (In a Good Way)
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a compliance call today — we'll talk through your current risks and map out practical steps to keep your facility on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-professional" onClick={openBookingModal}>
              <Phone className="mr-2 h-5 w-5" />
              Book a Call
            </Button>
            
            
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default AgedCareAdvisory;