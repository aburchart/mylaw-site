import { Award, MapPin, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const TrustSignals = () => {
  const credentials = [{
    icon: Award,
    title: "International Credentials",
    description: "Licensed in Australia, New Zealand & Canada"
  }, {
    icon: Users,
    title: "In-House Hospital Counsel",
    description: "Former legal counsel with deep healthcare experience"
  }, {
    icon: MapPin,
    title: "Brisbane Based",
    description: "Local expertise with Queensland regulatory knowledge"
  }, {
    icon: Clock,
    title: "Proactive Approach",
    description: "Prevention-focused, not litigation-driven"
  }];
  const testimonials = [{
    quote: "MyLaw Solutions helped us navigate the new Aged Care Act changes seamlessly. Their proactive approach saved us from potential compliance issues.",
    author: "Sarah Mitchell",
    role: "Facility Manager, Brisbane Aged Care"
  }, {
    quote: "Finally, legal advice that makes sense for healthcare providers. They understand our industry and speak our language.",
    author: "Dr. James Chen",
    role: "Medical Director, Southside Clinic"
  }, {
    quote: "The NDIS compliance training was invaluable. Our team now feels confident about documentation and quality standards.",
    author: "Maria Santos",
    role: "Operations Manager, Ability Plus"
  }];
  return <section className="py-20 bg-background">
      <div className="container">
        {/* Credentials */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">
            Trusted by Brisbane's Healthcare Community
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            With international credentials and deep healthcare experience, we understand 
            the unique challenges facing your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {credentials.map((credential, index) => {
          const IconComponent = credential.icon;
          return <Card key={index} className="text-center hover:shadow-card transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{credential.title}</h3>
                  <p className="text-sm text-muted-foreground">{credential.description}</p>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Recognition */}
        
      </div>
    </section>;
};
export default TrustSignals;