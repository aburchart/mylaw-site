import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  CheckCircle, 
  Users, 
  FileText, 
  AlertTriangle, 
  Download,
  Stethoscope,
  UserCheck,
  Building,
  Heart,
  Clipboard
} from "lucide-react";

const HealthcarePracticeSupport = () => {
  const whoWeHelp = [
    { icon: Stethoscope, title: "General Practices & GP Clinics" },
    { icon: Heart, title: "Allied Health Services (physio, speech, OT, etc.)" },
    { icon: Users, title: "Community Health Teams" },
    { icon: Building, title: "Specialist Medical Centres" },
    { icon: UserCheck, title: "Nurse Practitioners & Clinical Managers" }
  ];

  const keyServices = [
    "Clinical documentation audits & coaching",
    "Consent & capacity documentation support", 
    "Privacy law compliance (digital & paper-based)",
    "Health record management guidance",
    "Incident reporting & ombudsman response support",
    "Workplace policy drafting (HR, confidentiality, etc.)",
    "Regulatory prep (Ahpra, Ombudsman, Medicare reviews)"
  ];

  const riskTriggers = [
    { icon: FileText, text: "Confusion about documentation standards" },
    { icon: Clipboard, text: "Gaps in consent forms or policies" },
    { icon: Shield, text: "Staff unfamiliar with privacy requirements" },
    { icon: AlertTriangle, text: "Escalating patient complaints or reviews" },
    { icon: CheckCircle, text: "Preparing for regulator visits or inquiries" },
    { icon: Users, text: "New clinicians needing compliance onboarding" }
  ];

  const whyChooseUs = [
    "We've worked inside healthcare — not just beside it",
    "Dual-qualified: Australia, NZ, and Canadian legal systems",
    "Fluent in medical terminology, clinical risk, and plain English",
    "We prevent patient harm — before it leads to legal harm",
    "No litigation, no court — just smart, proactive support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-6">
        <nav className="text-sm text-muted-foreground">
          <span>Home</span> &gt; <span>Services</span> &gt; <span className="text-foreground">Healthcare Practice Support</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Protect Your License. Keep Patient Care Safe.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Legal compliance and risk management for general practitioners, clinics, and allied health professionals across Queensland.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Book a Compliance Call
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-lg space-y-6">
            <p>
              Running a medical practice or allied health service means managing clinical, legal, and regulatory obligations — all while delivering excellent care.
            </p>
            <p>
              MyLaw Solutions helps healthcare providers stay ahead of risk. From privacy law to documentation compliance and audit response, we simplify the complex legal landscape so you can focus on your patients, not paperwork.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Legal Support for Everyday Healthcare Settings
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whoWeHelp.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Support You With
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {keyServices.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Triggers */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Clinics Reach Out
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {riskTriggers.map((trigger, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                <trigger.icon className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-lg">{trigger.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Support That Speaks Your Language (Not Legalese)
          </h2>
          <div className="space-y-4">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1">✓</Badge>
                <span className="text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Free Resource: Consent Documentation Checklist</CardTitle>
              <CardDescription className="text-lg">
                Ensure your consent forms meet clinical and legal standards with this simple guide.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg">Download the Checklist</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Let's Make Compliance a Team Sport
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            If you're a clinic manager, practice owner, or health team lead, you don't have to do it all alone. Book a call and let's review your biggest risks and quick wins — together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">Book a Call</Button>
            <Button variant="outline" size="lg" className="border-primary text-primary text-lg px-8">Ask a Question</Button>
            <Button variant="outline" size="lg" className="border-primary text-primary text-lg px-8">Chat on WhatsApp</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcarePracticeSupport;