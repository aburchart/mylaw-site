import type { Metadata } from "next";
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
import { FileText } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import LatestPosts from "@/components/blog/LatestPosts";
import { SubscribeSection } from "@/components/ui/subscribe-section";
import { DownloadButton } from "@/components/ui/download-button";

export const metadata: Metadata = {
  title: "Free Compliance Resources",
  description:
    "Free compliance checklists, audit prep guides, and legal tips for aged care, NDIS, and healthcare providers in Queensland. Plain-English resources updated regularly.",
};

export default function Resources() {
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
  ];

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
            <SubscribeSection variant="hero" />
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
                  <DownloadButton downloadUrl={resource.downloadUrl} className="w-full">
                    Download Now
                  </DownloadButton>
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
            <SubscribeSection variant="footer" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
