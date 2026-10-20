import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Video, Home } from "lucide-react";
import { BookingCTAButton } from "@/components/ui/booking-cta-button";

export const metadata: Metadata = {
  title: "Wills and Estate Planning",
  description:
    "MyLaw Solutions prepares wills, Powers of Attorney, and Advanced Health Directives. Mobile, in-person, or remote appointments across Queensland.",
};

const documents = [
  "Wills and estate planning",
  "Power of Attorney",
  "Advanced Health Directive",
];

const accessOptions = [
  { icon: MapPin, text: "Mobile visits" },
  { icon: Home, text: "In person" },
  { icon: Video, text: "Remote" },
];

export default function WillsAndEstatePlanning() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="border-b bg-muted/30">
        <div className="container py-3">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/services" className="hover:text-primary">Services</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-foreground">Wills and Estate Planning</span>
          </nav>
        </div>
      </div>

      <section className="relative py-24 px-4 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/services-care-hero.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/60" />
        </div>
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wills and Estate Planning
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
            Wills, Powers of Attorney, and Advanced Health Directives, with mobile, in-person, or remote appointments.
          </p>
          <BookingCTAButton size="lg" className="shadow-professional">
            Book a Call
          </BookingCTAButton>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            MyLaw Solutions offers wills and estate planning, and other enduring documents (Power of Attorney and Advanced Health Directive). We offer a mobile, in-person, or remote service for ease of access.
          </p>
          <p>
            We appreciate that planning for unforeseen circumstances can feel overwhelming during challenging times. Without clear instructions, managing your estate can place an unnecessary burden on your loved ones.
          </p>
          <p>
            <Link href="/contact" className="text-primary hover:underline">Contact us</Link> to make the process easier for everyone.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Enduring documents we prepare</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {documents.map((document) => (
              <div key={document} className="flex items-start gap-3 rounded-lg border bg-background p-4">
                <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                <span className="text-lg">{document}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How you can meet with us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {accessOptions.map((option) => (
              <div key={option.text} className="flex items-center gap-4 rounded-lg border p-6">
                <option.icon className="h-8 w-8 flex-shrink-0 text-primary" />
                <span className="text-lg">{option.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Make the process easier for everyone</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to talk through wills and estate planning, a Power of Attorney, or an Advanced Health Directive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact us</Link>
            </Button>
            <BookingCTAButton size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Book a Call
            </BookingCTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
