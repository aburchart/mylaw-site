import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, AlertTriangle, Users, FileCheck, Clock, Download, MessageCircle, Phone, Search } from "lucide-react";
import { Link } from "react-router-dom";

const NDISComplianceAdvisory = () => {
  const commonTriggers = [
    { text: "A surprise or scheduled NDIS Commission audit", icon: Search },
    { text: "A request for evidence or service documentation", icon: FileCheck },
    { text: "Uncertainty about compliance obligations", icon: AlertTriangle },
    { text: "Policy or incident management issues", icon: Shield },
    { text: "Complaints from participants, families, or staff", icon: Users },
    { text: "Concerns about gaps in training or governance", icon: Clock }
  ];

  const services = [
    "Interpreting NDIS Practice Standards",
    "Preparing for NDIS audits or spot checks",
    "Responding to Commission notices",
    "Reviewing and drafting policies and procedures",
    "Training staff on compliance-related responsibilities",
    "Clarifying privacy, consent, and reporting obligations",
    "Building internal audit and risk frameworks"
  ];

  const differentiators = [
    "We understand the operational realities of NDIS delivery",
    "Dual-qualified (Australia, NZ, Canada) legal counsel",
    "Trusted by disability support businesses and sole providers",
    "Clear, practical advice — no overwhelming legal talk",
    "Focused on helping you keep services running, not on litigation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumbs */}
      <div className="border-b">
        <div className="container py-3">
          <nav className="flex text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-foreground">NDIS Compliance Advisory</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Don't Risk Your NDIS Funding. We Keep You Compliant.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Practical legal support for NDIS providers across Queensland — so you stay accredited, avoid clawbacks, and deliver quality support safely.
          </p>
          <Button size="lg" className="shadow-professional">
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
              NDIS providers operate in a highly regulated environment — and falling behind on compliance can mean serious consequences, including funding loss or deregistration.
            </p>
            <p className="text-lg leading-relaxed">
              At MyLaw Solutions, we provide practical, clear advice to help you meet your obligations under the NDIS Practice Standards. Whether you're facing an audit, a complaint, or just want to reduce risk, we help you respond confidently — with zero legal jargon.
            </p>
          </div>
        </div>
      </section>

      {/* Common Triggers */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">You're Not Alone If You're Dealing With:</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonTriggers.map((trigger, index) => {
              const IconComponent = trigger.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed">{trigger.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our NDIS Compliance Services Include:</h2>
          </div>
          <div className="grid gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/30 transition-colors">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why NDIS Providers Trust MyLaw Solutions</h2>
          </div>
          <div className="grid gap-4">
            {differentiators.map((point, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-background border">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Free Guide: How to Stay NDIS Audit-Ready</CardTitle>
              <CardDescription className="text-lg">
                Get our checklist covering documentation, training, and incident response essentials.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" variant="outline" className="border-primary text-primary shadow-professional">
                <Download className="mr-2 h-5 w-5" />
                Download the Free Checklist
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Get Your NDIS House in Order
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Compliance doesn't have to be scary. Book a call today and let's walk through your concerns, policies, or audit prep — so you can focus on delivering excellent participant care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-professional">
              <Phone className="mr-2 h-5 w-5" />
              Book a Call
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <MessageCircle className="mr-2 h-5 w-5" />
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

export default NDISComplianceAdvisory;