import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookingModalProvider } from "@/components/ui/booking-modal";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import AgedCareAdvisory from "./pages/services/AgedCareAdvisory";
import NDISComplianceAdvisory from "./pages/services/NDISComplianceAdvisory";
import HealthcarePracticeSupport from "./pages/services/HealthcarePracticeSupport";
import AuditRegulatoryResponse from "./pages/services/AuditRegulatoryResponse";
import ClinicalDocumentationTraining from "./pages/services/ClinicalDocumentationTraining";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BookingModalProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/services/aged-care-advisory" element={<AgedCareAdvisory />} />
          <Route path="/services/ndis-compliance-advisory" element={<NDISComplianceAdvisory />} />
          <Route path="/services/healthcare-practice-support" element={<HealthcarePracticeSupport />} />
          <Route path="/services/audit-regulatory-response" element={<AuditRegulatoryResponse />} />
          <Route path="/services/education-and-training" element={<ClinicalDocumentationTraining />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </BookingModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
