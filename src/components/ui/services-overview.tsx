import { 
  Shield, 
  FileCheck, 
  Users, 
  Heart, 
  BookOpen, 
  FileText,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: Shield,
      title: "Aged Care Compliance",
      description: "Stay audit-ready with comprehensive compliance support for aged care facilities under the new Aged Care Act.",
      features: ["Audit preparation", "Staff training", "Documentation review"],
      href: "/services/aged-care-advisory"
    },
    {
      icon: Users,
      title: "NDIS Compliance",
      description: "Protect your NDIS funding with proactive compliance strategies and regulatory support.",
      features: ["Quality standards", "Incident reporting", "Policy development"],
      href: "/services/ndis-compliance-advisory"
    },
    {
      icon: Heart,
      title: "Healthcare Practice Support",
      description: "Comprehensive legal support for medical practices, clinics, and healthcare providers.",
      features: ["Clinical governance", "Risk management", "Regulatory compliance"],
      href: "/services/healthcare-practice-support"
    },
    {
      icon: FileCheck,
      title: "Audit & Regulatory Response",
      description: "Expert guidance when you receive notices from regulators or need to respond to audits.",
      features: ["Rapid response", "Documentation", "Compliance planning"],
      href: "/services/audit-regulatory-response"
    },
    {
      icon: BookOpen,
      title: "Training & Education",
      description: "Practical compliance training for your team to prevent issues before they arise.",
      features: ["Staff workshops", "Policy training", "Best practices"],
      href: "/services/clinical-documentation-training"
    },
    {
      icon: FileText,
      title: "Wills & Estate Planning",
      description: "Compassionate legal support for elder clients and their families with estate planning needs.",
      features: ["Will drafting", "Power of attorney", "Estate administration"],
      href: "/services/elder-law-wills"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg text-primary">
            Comprehensive Compliance Solutions
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just solve problems - we prevent them. Our proactive approach helps you 
            maintain compliance, reduce risk, and focus on providing exceptional care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-professional transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="heading-sm">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <Link to={service.href} aria-label={`Learn more about ${service.title}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="heading-md mb-4">Not Sure Which Service You Need?</h3>
              <p className="body-lg mb-6 opacity-90">
                Book a free 15-minute consultation and we'll help you identify the best 
                compliance strategy for your organization.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-secondary-warm hover:bg-secondary text-primary shadow-elevated"
              >
                Book Free Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;