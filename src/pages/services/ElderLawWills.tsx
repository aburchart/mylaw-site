import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Shield, FileText, Scale, Home, CheckCircle2 } from "lucide-react";

const ElderLawWills = () => {
  const targetAudience = [
    {
      icon: Users,
      text: "Seniors aged 65+"
    },
    {
      icon: Heart,
      text: "Adult children caring for aging parents"
    },
    {
      icon: FileText,
      text: "Families preparing estate documents"
    },
    {
      icon: Home,
      text: "Aged care residents & facilities"
    },
    {
      icon: Shield,
      text: "People navigating capacity or guardianship issues"
    }
  ];

  const services = [
    "Simple & complex wills",
    "Enduring powers of attorney",
    "Advance health directives (QLD)",
    "Guardianship & supported decision-making",
    "Asset protection for aged care entry",
    "Advice on family disputes over care decisions",
    "Estate planning for blended families"
  ];

  const whyChooseUs = [
    "Decades of legal experience across Australia, NZ & Canada",
    "In-house hospital and aged care legal background",
    "Sensitive, culturally aware approach",
    "We explain things in plain English",
    "Flexible bookings — including after-hours and virtual sessions"
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
            <span className="text-foreground">Elder Law & Wills</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Planning for Peace of Mind Doesn't Have to Be Complicated
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Get practical legal advice for wills, powers of attorney, guardianship, and aged care transitions — from someone who speaks your language and puts your family first.
          </p>
          <Button size="lg" className="shadow-professional">
            Start Your Will Planning
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Legal planning in later life doesn't have to feel overwhelming or cold. Whether you're navigating aged care for a parent or preparing your own affairs, MyLaw Solutions offers elder-focused legal support that's clear, respectful, and grounded in real-world experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From simple wills to complex guardianship scenarios, we guide Queensland families through every step — with patience, professionalism, and a deep understanding of what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted By:
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

      {/* Services We Offer */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Elder Law & Estate Planning Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg">
                <Scale className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Myla */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            We Know Aged Care. We Know Families.
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
                Free Estate Planning Checklist: 10 Things to Do Before You Write Your Will
              </CardTitle>
              <CardDescription className="text-lg">
                Get organized and avoid common mistakes with this quick-start guide.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" size="lg" className="shadow-professional">
                Download the Checklist
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start the Conversation Today. Your Family Will Thank You.
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We make it easy to protect what matters most. Book a call to begin planning — or reach out with your questions. No pressure. Just trusted legal support when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-professional">
              Book a Call
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Ask a Question
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElderLawWills;