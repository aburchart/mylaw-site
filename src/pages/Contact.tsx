import { MessageSquare, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Let's Make Compliance Simple</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Book a call, ask a question, or message us on WhatsApp — whatever works best for you. 
            We're here to help you avoid costly mistakes and stay audit-ready.
          </p>
        </section>

        {/* Booking Calendar Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">Book a Compliance Call with Myla</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a time that suits you best using the calendar below. Same-day confirmations. 
              No pressure, no commitment — just clear advice.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0 h-[70vh] min-h-[560px]">
                <iframe 
                  src="https://link.burkstreet.com/widget/booking/qccF54itA96MKyu9MnFo" 
                  style={{ width: '100%', height: '100%', border: 'none' }} 
                   
                  id="qccF54itA96MKyu9MnFo_1757295839703"
                  title="Book a Compliance Call"
                />
                <script src="https://link.burkstreet.com/js/form_embed.js" type="text/javascript"></script>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Other Contact Methods Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prefer to Send a Quick Message?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp Chat</h3>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://wa.me/61400000000" target="_blank" rel="noopener noreferrer">
                    Open WhatsApp Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Myla</h3>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:admin@mylawsolutions.com.au">
                    admin@mylawsolutions.com.au
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+61400000000">
                    +61 4XX XXX XXX
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">Here's What We'll Cover on Your First Call</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary font-medium mr-2">•</span>
                    Your current compliance challenges or risks
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-medium mr-2">•</span>
                    Questions about a notice or audit
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-medium mr-2">•</span>
                    The legal landscape for your industry (Aged Care, NDIS, GP, etc.)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-medium mr-2">•</span>
                    Next steps to stay accredited and reduce risk
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-medium mr-2">•</span>
                    How MyLaw can help — or point you to someone who can
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Service Area Note */}
        <section className="text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                MyLaw Solutions proudly supports healthcare, aged care, and disability service providers 
                across Brisbane and regional Queensland. Virtual meetings are available Australia-wide.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
