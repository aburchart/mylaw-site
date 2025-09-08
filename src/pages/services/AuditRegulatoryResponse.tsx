import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, FileText, Shield, Clock, Users, CheckCircle2 } from "lucide-react";

const AuditRegulatoryResponse = () => {
  const triggers = [
    {
      icon: FileText,
      text: "Received a formal notice or request for evidence"
    },
    {
      icon: Shield,
      text: "Facing a scheduled or surprise audit"
    },
    {
      icon: AlertTriangle,
      text: "Got a complaint from the ombudsman or a participant"
    },
    {
      icon: CheckCircle2,
      text: "Identified compliance issues during internal review"
    },
    {
      icon: Users,
      text: "Dealing with high staff turnover affecting documentation"
    },
    {
      icon: Clock,
      text: "Unsure how to respond to regulator timelines"
    }
  ];

  const services = [
    "Interpret notices and break down your obligations",
    "Draft official response letters and submissions", 
    "Organize your evidence and supporting documents",
    "Help identify gaps in policies or training",
    "Guide you through appeals, corrections, and follow-ups",
    "Advise on how to prevent repeat findings"
  ];

  const whyChooseUs = [
    "Deep experience in healthcare regulation",
    "Dual-qualified (Australia, NZ, Canada)",
    "Plain-English guidance, fast response times",
    "Focused on keeping your doors open and your staff calm",
    "No litigation — just clear, effective action plans"
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
            <span className="text-foreground">Audit & Regulatory Response</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Got a Notice From the Regulator? Don't Panic. We'll Guide You.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            MyLaw Solutions helps aged care and NDIS providers respond quickly and correctly to audits, complaints, and compliance investigations — with calm, clear legal support.
          </p>
          <Button size="lg" className="shadow-professional">
            Book a Compliance Call
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Same-day response guaranteed
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When a regulator shows up — or sends a notice — the clock starts ticking. Whether you're facing the Aged Care Quality and Safety Commission, the NDIS Commission, or another health oversight body, how you respond matters.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At MyLaw Solutions, we specialize in supporting Queensland providers through stressful regulatory processes. From audit prep to drafting your official response, we help you stay compliant, reduce risk, and avoid serious penalties — all in plain English.
            </p>
          </div>
        </div>
      </section>

      {/* What Triggers Contact */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Are You Dealing With Any of These?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {triggers.map((trigger, index) => {
              const IconComponent = trigger.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-primary mt-1" />
                  </div>
                  <p className="text-muted-foreground">{trigger.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How We Support You During a Regulator Response
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MyLaw Solutions */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            You Don't Need a Litigator. You Need a Compliance Ally.
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
              <CardTitle className="text-2xl mb-2">
                Free Checklist: 5 Things to Do When You Get an Audit Notice
              </CardTitle>
              <CardDescription className="text-lg">
                Don't wait until it's too late. This quick-start checklist outlines your next steps when a regulator comes knocking.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" size="lg" className="border-primary text-primary shadow-professional">
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
            Let's Take the Stress Out of Your Next Audit
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            You don't need to handle compliance crises alone. Book a call and get immediate, practical support to reduce risk and respond professionally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-professional">
              Book a Call
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Ask a Question
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Chat on WhatsApp
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Serving Brisbane & Queensland providers
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuditRegulatoryResponse;