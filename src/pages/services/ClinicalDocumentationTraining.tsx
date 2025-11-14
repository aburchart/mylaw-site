import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Stethoscope, Shield, BookOpen, Clock, CheckCircle2, AlertCircle, FileText } from "lucide-react";
import { useBookingModal } from "@/components/ui/booking-modal";
import servicesCareHero from "@/assets/services-care-hero.jpg";

const ClinicalDocumentationTraining = () => {
  const { open: openBookingModal } = useBookingModal();
  const targetAudience = [
    {
      icon: Stethoscope,
      text: "Registered Nurses (RNs)"
    },
    {
      icon: Users,
      text: "Allied Health Professionals"
    },
    {
      icon: Shield,
      text: "Aged Care & NDIS Support Workers"
    },
    {
      icon: BookOpen,
      text: "Practice Managers & Compliance Leads"
    },
    {
      icon: Clock,
      text: "New Staff Onboarding Teams"
    }
  ];

  const trainingTopics = [
    "Clinical documentation best practices",
    "What regulators look for in notes & forms",
    "Incident documentation & risk flagging",
    "Resident rights & informed consent",
    "Aged Care Quality Standards documentation",
    "NDIS worker responsibilities & reporting",
    "When to escalate — and how to record it"
  ];

  const howItWorks = [
    "Delivered in-person (Brisbane) or virtually across Queensland",
    "Customised to your facility's procedures and risk areas",
    "Includes real case scenarios, roleplay, and sample records",
    "1-hour, half-day, or full-day options available",
    "Post-training report with recommendations for improvement"
  ];

  const whyItMatters = [
    "Protects your staff during investigations",
    "Prevents patient harm due to poor handover",
    "Demonstrates compliance during audits",
    "Supports clear communication in care teams",
    "Builds a safety-first culture"
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
            <span className="text-foreground">Clinical Documentation & Compliance Training</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${servicesCareHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/60" />
        </div>
        
        {/* Content */}
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Training That Prevents Patient Harm (and Protects Your Staff)
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
            Equip your care team with clear, compliant, and defensible documentation practices — delivered by a legal advisor who understands the frontline.
          </p>
          <Button size="lg" className="shadow-professional" onClick={openBookingModal}>
            Book a Training Session
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In aged care, disability support, and healthcare, poor documentation isn't just a paperwork issue — it's a legal risk. Incomplete or unclear records can lead to regulatory breaches, funding loss, or even patient harm.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              That's why we deliver practical, compliance-focused training that empowers nurses, support staff, and clinical managers to document accurately, professionally, and defensibly. No legal jargon. Just real examples, clear steps, and proven systems.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Training Designed for Real-World Care Teams
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

      {/* What We Cover */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Documentation & Compliance Topics We Teach
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {trainingTopics.map((topic, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Flexible, Practical Training That Fits Your Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Documentation Is Your Legal Lifeline
          </h2>
          <div className="space-y-4">
            {whyItMatters.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resource Download */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">
                Free Guide: The 7 Most Common Documentation Mistakes (And How to Avoid Them)
              </CardTitle>
              <CardDescription className="text-lg">
                A must-have for care teams — this quick guide helps you reduce risk immediately.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" size="lg" className="border-primary text-primary shadow-professional">
                Download the Free Guide
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Turn Documentation From a Liability Into a Strength
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're booking team-wide training or just need help improving your forms, we'll tailor a session that protects your people — and your patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-professional" onClick={openBookingModal}>
              Book a Training Session
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

export default ClinicalDocumentationTraining;