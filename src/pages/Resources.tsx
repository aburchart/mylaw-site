import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Download, FileText, Calendar, ArrowRight, Mail } from "lucide-react";
import { SubscriptionModal } from "@/components/ui/subscription-modal";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import LatestPosts from "@/components/blog/LatestPosts";

const Resources = () => {
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);

  const downloadableResources = [
    {
      title: "The 3 C's of Informed Consent",
      description: "For: Healthcare practitioners and clinical staff",
      use: "Understand capacity, communication, and consent requirements for adult and minor patients",
      category: "Healthcare",
      downloadUrl: "https://storage.googleapis.com/msgsndr/SqRRlnoJ5Ppx0A0Tk8z2/media/6914055f9af9065c5c0a674a.png",
    },
    {
      title: "Common Pitfalls in Clinical Documentation",
      description: "For: Health practitioners and clinical teams",
      use: "Avoid documentation mistakes and protect your professional practice",
      category: "Clinical",
      downloadUrl: "https://storage.googleapis.com/msgsndr/SqRRlnoJ5Ppx0A0Tk8z2/media/6914055f2f19bcae8a4fc2a9.png",
    },
    /*{
      title: "10 Things to Do Before You Write Your Will",
      description: "For: Elder clients and families planning estates",
      use: "Organize personal info before seeing a lawyer",
      category: "Elder Law",
      downloadUrl: ""
    },
    {
      title: "Legal Essentials for Starting a Health Business in QLD",
      description: "For: Startups and small business owners in care sectors",
      use: "Understand key compliance areas from day one",
      category: "Business",
      downloadUrl: ""
    },*/
  ];

  /*
  const blogPosts = [
    {
      title: "What to Do If You Receive a Notice From the Regulator",
      date: "March 15, 2024",
      excerpt: "A step-by-step guide to responding professionally and protecting your reputation.",
    },
    {
      title: "New Aged Care Act: What It Means for Your Facility",
      date: "March 10, 2024",
      excerpt: "Key changes every aged care provider needs to understand before implementation.",
    },
    {
      title: "Is Your Clinical Documentation Putting You at Risk?",
      date: "March 5, 2024",
      excerpt: "Common documentation gaps that lead to compliance issues and how to fix them.",
    },
    {
      title: "5 Red Flags That May Trigger an NDIS Audit",
      date: "February 28, 2024",
      excerpt: "Early warning signs that your NDIS service may be flagged for review.",
    },
    {
      title: "How to Build a Legally Safe Health Startup in Queensland",
      date: "February 20, 2024",
      excerpt: "Essential legal foundations for new healthcare and aged care businesses.",
    },
  ];
*/
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Resources</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Stay Ahead of Compliance Changes in Queensland
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Free checklists, audit prep guides, and practical legal tips for aged care, NDIS, and healthcare providers
              — written in plain English and updated regularly.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setIsSubscribeModalOpen(true)}>
              <Mail className="mr-2 h-5 w-5" />
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Downloadable Resources Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Free Resources You Can Start Using Today</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {downloadableResources.map((resource, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">{resource.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Use:</strong> {resource.use}
                  </p>
                  <Button
                    className="w-full"
                    variant="default"
                    onClick={() => resource.downloadUrl && window.open(resource.downloadUrl, "_blank")}
                    disabled={!resource.downloadUrl}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <LatestPosts />

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Want Resources Like These Sent to Your Inbox?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get practical legal tips, compliance updates, and new tools delivered monthly — written by a qualified
              legal advisor, not a marketer.
            </p>
            <Button size="lg" variant="secondary" onClick={() => setIsSubscribeModalOpen(true)}>
              <Mail className="mr-2 h-5 w-5" />
              Subscribe to Compliance Updates
            </Button>
          </div>
        </div>
      </section>

      <SubscriptionModal open={isSubscribeModalOpen} onOpenChange={setIsSubscribeModalOpen} />

      <Footer />
    </div>
  );
};

export default Resources;
