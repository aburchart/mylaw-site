import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/mylaw-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceItems = [
    { name: "Aged Care Compliance Advisory", href: "/services/aged-care-advisory" },
    { name: "NDIS Compliance Advisory", href: "/services/ndis-compliance-advisory" },
    { name: "Healthcare Practice Support", href: "/services/healthcare-practice-support" },
    { name: "Audit & Regulatory Response", href: "/services/audit-and-regulatory-response" },
    { name: "Clinical Documentation & Training", href: "/services/clinical-documentation-training" },
    { name: "Elder Law & Wills", href: "/services/elder-law-and-wills" },
    { name: "Small Business Legal Advisory", href: "/services/small-business-legal-advisory" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src={logoImage} 
            alt="MyLaw Solutions Logo" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(item.href)
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              location.pathname.startsWith('/services')
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-muted-foreground"
            )}>
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64 bg-background border shadow-lg z-50">
              <DropdownMenuItem asChild>
                <Link to="/services" className="w-full font-medium">
                  All Services
                </Link>
              </DropdownMenuItem>
              {serviceItems.map((service) => (
                <DropdownMenuItem key={service.name} asChild>
                  <Link to={service.href} className="w-full">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="default" size="sm" className="shadow-professional">
            <Phone className="mr-2 h-4 w-4" />
            Book a Call
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services Section */}
            <div className="py-2 border-t">
              <Link
                to="/services"
                className={cn(
                  "block py-2 text-sm font-medium transition-colors",
                  location.pathname === '/services'
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <div className="ml-4 space-y-2 mt-2">
                {serviceItems.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className={cn(
                      "block py-1 text-xs transition-colors",
                      isActive(service.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Button variant="default" size="sm" className="w-full shadow-professional">
              <Phone className="mr-2 h-4 w-4" />
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;