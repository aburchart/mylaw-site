import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  const recommendedResources = [
    {
      title: "The 3 C's of Informed Consent",
      description: "Essential guide for healthcare practitioners",
      downloadUrl: "https://storage.googleapis.com/msgsndr/SqRRlnoJ5Ppx0A0Tk8z2/media/6914055f9af9065c5c0a674a.png",
    },
    {
      title: "Common Pitfalls in Clinical Documentation",
      description: "Protect your practice with proper documentation",
      downloadUrl: "https://storage.googleapis.com/msgsndr/SqRRlnoJ5Ppx0A0Tk8z2/media/6914055f2f19bcae8a4fc2a9.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-20 w-20 text-green-500" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Thank You for Subscribing!
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              You're now part of our community! We'll keep you updated with the latest compliance insights, 
              legal tips, and resources tailored for healthcare and aged care providers in Queensland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/resources">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Browse Resources
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What to Expect Next</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Welcome Email</CardTitle>
                  <CardDescription>
                    Check your inbox for a welcome message with links to our most popular resources.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Updates</CardTitle>
                  <CardDescription>
                    Receive curated compliance tips and legal insights delivered straight to your inbox.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Exclusive Content</CardTitle>
                  <CardDescription>
                    Get early access to new guides, checklists, and training materials.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">While You're Here...</h2>
            <p className="text-center text-muted-foreground mb-12">
              Download these popular resources to get started right away
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {recommendedResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full"
                      variant="outline"
                      onClick={() => window.open(resource.downloadUrl, "_blank")}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Immediate Legal Support?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Don't wait for the next newsletter. Schedule a consultation today to discuss your specific compliance needs.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Contact Us Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
