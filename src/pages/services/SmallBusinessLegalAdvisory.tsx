import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Stethoscope, FileText, Shield, CheckCircle2, Briefcase } from "lucide-react";
import { useBookingModal } from "@/components/ui/booking-modal";

const SmallBusinessLegalAdvisory = () => {
  const { open: openBookingModal } = useBookingModal();
  const targetAudience = [
    {
      icon: Stethoscope,
      text: "Allied health startups"
    },
    {
      icon: Users,
      text: "Mobile care service providers"
    },
    {
      icon: Shield,
      text: "NDIS business owners"
    },
    {
      icon: Building,
      text: "GPs launching solo practices"
    },
    {
      icon: Briefcase,
      text: "Aged care contractors or consultants"
    }
  ];

  const services = [
    "ABN setup and legal registration",
    "Choosing the right business structure",
    "Drafting client agreements and service terms",
    "Employment contracts and HR policies",
    "Privacy law and data handling compliance",
    "Incident reporting protocols",
    "General compliance health check"
  ];

  const whyChooseUs = [
    "No litigation — just practical, risk-prevention advice",
    "Legal support tailored to health and care industries",
    "Experience across Australia, NZ & Canada",
    "Friendly, plain-English guidance",
    "Bookable by call, email, or WhatsApp"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumbs */}
      <div className="border-b bg-muted/30">
        <div className="container py-3">
          <nav className="text-sm text-muted-foreground">
            <span>Home</span>
            <span className="mx-2">&gt;</span>
            <span>Services</span>
            <span className="mx-2">&gt;</span>
            <span className="text-foreground">Small Business Legal Advisory</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Starting a Healthcare Business? Avoid Mistakes That Cost Thousands.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            From startup setup to compliance checklists, MyLaw Solutions helps you build your business on solid legal ground — without courtrooms, jargon, or expensive surprises.
          </p>
          <Button size="lg" className="shadow-professional">
            Get a Free Business Advisory Checklist
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Starting or running a small healthcare business comes with more legal obligations than most founders realize. One overlooked policy or compliance gap can put your license — or your reputation — at risk.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MyLaw Solutions offers practical legal support for new and growing businesses in aged care, NDIS, allied health, and general practice. We'll help you meet your obligations, protect your staff, and avoid costly mistakes.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Legal Guidance for Health-Related Entrepreneurs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((audience, index) => {
              const IconComponent = audience.icon;
              return (
                <div key={index} className="flex items-center space-x-4 p-6 bg-background rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{audience.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Startup & Compliance Services Include:
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MyLaw */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Compliance, Not Court
          </h2>
          <div className="space-y-4">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-background rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resource Download */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">
                Free Guide: Legal Essentials for Starting a Health Business in QLD
              </CardTitle>
              <CardDescription className="text-lg">
                Avoid the 5 most common compliance mistakes health startups make.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" size="lg" className="border-primary text-primary shadow-professional">
                Download the Guide
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Build Your Business Right — From Day One
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're just getting started or fixing gaps in your existing business, we're here to help you grow legally and confidently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-professional" onClick={openBookingModal}>
              Book a Call
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Ask a Question
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmallBusinessLegalAdvisory;