import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Award, MapPin, Briefcase, GraduationCap, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "International Legal Credentials",
      description: "Licensed to practice law in Australia, New Zealand, and Canada"
    },
    {
      icon: Briefcase,
      title: "Healthcare Industry Experience",
      description: "Former in-house legal counsel at major hospital systems"
    },
    {
      icon: Award,
      title: "Compliance Specialization",
      description: "Deep expertise in aged care, NDIS, and healthcare regulations"
    },
    {
      icon: MapPin,
      title: "Brisbane-Based Practice",
      description: "Local knowledge of Queensland regulatory landscape"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="heading-xl text-primary">
              Meet Myla Ruttan
            </h1>
            <p className="body-lg text-muted-foreground">
              Brisbane's trusted legal advisor helping healthcare organizations 
              stay compliant and avoid litigation through proactive solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="heading-lg text-primary">
                  A Different Kind of Legal Practice
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Unlike traditional law firms that focus on litigation, MyLaw Solutions takes a 
                    proactive approach to legal challenges. As a former in-house hospital counsel, 
                    I understand the unique pressures facing healthcare organizations today.
                  </p>
                  
                  <p>
                    My mission is simple: help you avoid legal problems before they start. Through 
                    smart planning, comprehensive training, and robust documentation systems, we 
                    work together to keep your organization compliant and your focus on patient care.
                  </p>
                  
                  <p>
                    With credentials across three countries and deep experience in healthcare 
                    regulation, I bring both international perspective and local Queensland 
                    expertise to every client relationship.
                  </p>
                </div>
              </div>

              {/* Professional Philosophy */}
              <Card className="bg-trust border-primary/20">
                <CardContent className="p-6">
                  <h3 className="heading-sm text-primary mb-4">Our Philosophy</h3>
                  <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4">
                    "The best legal outcome is the one you never need. By staying ahead of 
                    compliance requirements and regulatory changes, we help our clients focus 
                    on what they do best - providing exceptional care."
                  </blockquote>
                  <cite className="text-sm text-primary font-medium mt-4 block">
                    - Myla Ruttan, Principal
                  </cite>
                </CardContent>
              </Card>
            </div>

            {/* Professional Photo & Quick Facts */}
            <div className="space-y-8">
              {/* Professional photo */}
              <Card className="overflow-hidden">
                <div className="aspect-[3/4]">
                  <img 
                    src="/src/assets/myla-portrait.jpeg" 
                    alt="Myla Ruttan - Principal Legal Advisor at MyLaw Solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="heading-sm">Ready to Get Started?</h3>
                  <p className="text-primary-foreground/90">
                    Book a free 15-minute consultation to discuss your compliance needs.
                  </p>
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-secondary-warm hover:bg-secondary text-primary w-full"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-primary mb-4">
              Credentials & Experience
            </h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Bringing together international legal expertise with deep healthcare 
              industry knowledge to serve Brisbane's care providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((qual, index) => {
              const IconComponent = qual.icon;
              return (
                <Card key={index} className="text-center hover:shadow-card transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{qual.title}</h3>
                    <p className="text-sm text-muted-foreground">{qual.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-primary text-center mb-12">
              Professional Background
            </h2>
            
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Healthcare Legal Counsel</h3>
                      <p className="text-sm text-muted-foreground">2018 - 2023</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground">
                        Served as in-house legal counsel for major hospital systems, managing 
                        compliance, risk assessment, and regulatory matters. Developed expertise 
                        in healthcare regulations and patient safety protocols.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Regulatory Compliance Advisor</h3>
                      <p className="text-sm text-muted-foreground">2015 - 2018</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground">
                        Specialized in aged care and NDIS compliance across multiple jurisdictions. 
                        Helped organizations navigate regulatory changes and implement best practices 
                        for sustainable compliance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Legal Practice Foundation</h3>
                      <p className="text-sm text-muted-foreground">2010 - 2015</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground">
                        Established legal practice across Australia, New Zealand, and Canada. 
                        Built expertise in cross-jurisdictional compliance and international 
                        regulatory frameworks.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;