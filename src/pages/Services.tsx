import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, Stethoscope, FileSearch, BookOpen, Scale, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { useBookingModal } from "@/components/ui/booking-modal";

const Services = () => {
  const { open: openBookingModal } = useBookingModal();
  const services = [
    {
      title: "Aged Care Compliance Advisory",
      description: "Stay audit-ready and protect resident safety with tailored advice, documentation reviews, and staff training.",
      icon: Shield,
      href: "/services/aged-care-advisory",
      color: "text-blue-600"
    },
    {
      title: "NDIS Compliance Advisory", 
      description: "Maintain your NDIS registration and funding with comprehensive compliance support and audit preparation.",
      icon: CheckCircle,
      href: "/services/ndis-compliance-advisory",
      color: "text-green-600"
    },
    {
      title: "Healthcare Practice Support",
      description: "Legal compliance and risk management for general practitioners, clinics, and allied health professionals.",
      icon: Stethoscope,
      href: "/services/healthcare-practice-support",
      color: "text-red-600"
    },
    {
      title: "Audit & Regulatory Response",
      description: "Expert guidance through regulatory investigations, complaint responses, and audit preparation strategies.",
      icon: FileSearch,
      href: "/services/audit-and-regulatory-response",
      color: "text-purple-600"
    },
    {
      title: "Clinical Documentation & Compliance Training",
      description: "Comprehensive staff training programs and documentation systems to maintain compliance standards.",
      icon: BookOpen,
      href: "/services/clinical-documentation-training",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Legal Compliance & Advisory Services for Health, Disability, and Aged Care
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We help Queensland-based aged care facilities, NDIS providers, clinics, and health entrepreneurs meet legal and compliance standards. Explore our full range of services designed to prevent complaints, avoid funding loss, and support accreditation — with no litigation and no legal jargon.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                      <IconComponent className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 text-center">
                    <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Link to={service.href}>
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Strengthen Your Compliance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a consultation to discuss your specific compliance needs and avoid costly regulatory issues.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="shadow-professional"
            onClick={openBookingModal}
          >
            Book a Compliance Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;