import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import AgedCareAdvisory from "./pages/services/AgedCareAdvisory";
import NDISComplianceAdvisory from "./pages/services/NDISComplianceAdvisory";
import HealthcarePracticeSupport from "./pages/services/HealthcarePracticeSupport";
import AuditRegulatoryResponse from "./pages/services/AuditRegulatoryResponse";
import ClinicalDocumentationTraining from "./pages/services/ClinicalDocumentationTraining";
import ElderLawWills from "./pages/services/ElderLawWills";
import SmallBusinessLegalAdvisory from "./pages/services/SmallBusinessLegalAdvisory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/aged-care-advisory" element={<AgedCareAdvisory />} />
          <Route path="/services/ndis-compliance-advisory" element={<NDISComplianceAdvisory />} />
          <Route path="/services/healthcare-practice-support" element={<HealthcarePracticeSupport />} />
          <Route path="/services/audit-and-regulatory-response" element={<AuditRegulatoryResponse />} />
          <Route path="/services/clinical-documentation-training" element={<ClinicalDocumentationTraining />} />
          <Route path="/services/elder-law-and-wills" element={<ElderLawWills />} />
          <Route path="/services/small-business-legal-advisory" element={<SmallBusinessLegalAdvisory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
