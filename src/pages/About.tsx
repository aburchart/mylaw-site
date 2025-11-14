import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Award, MapPin, Briefcase, GraduationCap, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/components/ui/booking-modal";
import profileImage from "@/assets/mruttan-profile.jpg";
const About = () => {
  const {
    open: openBookingModal
  } = useBookingModal();
  const qualifications = [{
    icon: GraduationCap,
    title: "International Credentials",
    description: "International legal qualification and training in Australia, New Zealand and Canada."
  }, {
    icon: Briefcase,
    title: "Healthcare Industry Experience",
    description: "Former in-house legal counsel at major hospital systems"
  }, {
    icon: Award,
    title: "Compliance Specialization",
    description: "Deep expertise in aged care, NDIS, and healthcare regulations"
  }, {
    icon: MapPin,
    title: "Brisbane-Based Practice",
    description: "Local knowledge of Queensland regulatory landscape"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="heading-xl text-primary">
              Meet Myla Ruttan
            </h1>
            <p className="body-lg text-muted-foreground">In Brisbane's trusted consultant helping healthcare organizations stay compliant through proactive solutions.</p>
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
                  <p>MyLaw Solutions takes a proactive approach to regulatory legal challenges. As a former in-house hospital counsel, I understand the unique pressures facing healthcare organisations today.</p>
                  
                  <p>My mission is simple: help you avoid legal problems before they start. Through smart planning, comprehensive training, and robust systems, we work together to keep your organisations compliant and your focus on patient care.</p>
                  
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

              {/* Professional Background */}
              <div className="space-y-6">
                <h3 className="heading-sm text-primary">Professional Background</h3>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold text-primary">Healthcare Legal Counsel</h4>
                          <span className="text-sm text-muted-foreground">2018 - 2023</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Served as in-house legal counsel for major hospital systems, managing 
                          compliance, risk, and regulatory matters. Developed expertise 
                          in healthcare regulations and patient safety protocols.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold text-primary">Regulatory Compliance Advisor</h4>
                          <span className="text-sm text-muted-foreground">2015 - 2018</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Specialised in aged care and NDIS compliance across multiple jurisdictions. 
                          Built comprehensive training programs and audit response systems.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold text-primary">Corporate Legal Practice</h4>
                          <span className="text-sm text-muted-foreground">2010 - 2015</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Practiced corporate and healthcare law across Australia, New Zealand, 
                          and Canada. Developed deep understanding of international regulatory frameworks.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Professional Photo & Quick Facts */}
            <div className="space-y-8">
              {/* Professional photo */}
              <Card className="overflow-hidden">
                <div className="aspect-[3/4]">
                  <img src={profileImage} alt="Myla Ruttan - Principal Legal Advisor at MyLaw Solutions" className="w-full h-full object-cover" />
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="heading-sm">Ready to Get Started?</h3>
                  <p className="text-primary-foreground/90">
                    Book a free 15-minute consultation to discuss your compliance needs.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-secondary-warm hover:bg-secondary text-primary w-full" onClick={openBookingModal}>
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
            return <Card key={index} className="text-center hover:shadow-card transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{qual.title}</h3>
                    <p className="text-sm text-muted-foreground">{qual.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;