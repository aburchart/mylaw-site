import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookingModalProvider } from "@/components/ui/booking-modal";
import { AuthProvider } from "@/hooks/useAuth";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Auth from "./pages/Auth";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PostEditor from "./pages/admin/PostEditor";
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
      <AuthProvider>
        <BookingModalProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/posts/new" element={<PostEditor />} />
              <Route path="/admin/posts/:id/edit" element={<PostEditor />} />
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
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
