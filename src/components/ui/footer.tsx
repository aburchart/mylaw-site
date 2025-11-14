import { Scale, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/mylaw-logo.png";
const Footer = () => {
  const serviceLinks = [{
    name: "Aged Care Risk Management & Regulatory Compliance",
    href: "/services/aged-care-advisory"
  }, {
    name: "NDIS Risk Management & Regulatory Compliance",
    href: "/services/ndis-compliance-advisory"
  }, {
    name: "Healthcare Practice Support",
    href: "/services/healthcare-practice-support"
  }, {
    name: "Audit & Regulatory Response",
    href: "/services/audit-regulatory-response"
  }, {
    name: "Training & Education",
    href: "/services/clinical-documentation-training"
  }];
  const resourceLinks = [{
    name: "Compliance Updates",
    href: "/resources"
  }, {
    name: "Free Checklists",
    href: "/resources/checklists"
  }, {
    name: "Regulatory News",
    href: "/resources/news"
  }, {
    name: "Training Materials",
    href: "/resources/training"
  }];
  return <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <img src={logoImage} alt="MyLaw Solutions Logo" className="h-10 w-auto" />
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Brisbane's trusted advisors specializing in compliance for aged care, 
              NDIS, and healthcare providers. We help you avoid litigation through smart planning.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-secondary-warm" />
                <span>Brisbane, Queensland, Australia</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-secondary-warm" />
                <a href="tel:+61700000000" className="hover:text-secondary-warm transition-colors">
                  (07) 0000 0000
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-secondary-warm" />
                <a href="mailto:admin@mylawsolutions.com.au" className="hover:text-secondary-warm transition-colors">
                  admin@mylawsolutions.com.au
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                
                
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <div className="space-y-2">
              {serviceLinks.map((link, index) => <Link key={index} to={link.href} onClick={() => window.scrollTo(0, 0)} className="block text-sm text-primary-foreground/80 hover:text-secondary-warm transition-colors">
                  {link.name}
                </Link>)}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <div className="space-y-2">
              {resourceLinks.map((link, index) => <Link key={index} to={link.href} onClick={() => window.scrollTo(0, 0)} className="block text-sm text-primary-foreground/80 hover:text-secondary-warm transition-colors">
                  {link.name}
                </Link>)}
            </div>
            
            <div className="pt-4">
              <h4 className="font-medium mb-2">Quick Help</h4>
              <Button variant="secondary" size="sm" className="bg-secondary-warm hover:bg-secondary text-primary">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get Help Now</h3>
            <p className="text-sm text-primary-foreground/80">
              Urgent compliance question? Don't wait - get expert guidance today.
            </p>
            
            <div className="space-y-3">
              <Button variant="secondary" className="w-full bg-secondary-warm hover:bg-secondary text-primary">
                Book Emergency Call
              </Button>
            </div>
            
            <div className="pt-4 text-xs text-primary-foreground/60">
              <p>Free 15-minute consultation available</p>
              <p>Same-day response for urgent matters</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-6">
          <div className="flex justify-center md:justify-end items-center">
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="text-primary-foreground/60 hover:text-secondary-warm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="text-primary-foreground/60 hover:text-secondary-warm transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" onClick={() => window.scrollTo(0, 0)} className="text-primary-foreground/60 hover:text-secondary-warm transition-colors">
                Legal Disclaimer
              </Link>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-primary-foreground/10">
            <p className="text-xs text-primary-foreground/50 text-center md:text-left">
              <strong>Disclaimer:</strong> This website contains general information only and does not constitute legal advice. 
              MyLaw Solutions does not provide litigation services. For specific legal matters, please consult with a qualified legal professional.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;