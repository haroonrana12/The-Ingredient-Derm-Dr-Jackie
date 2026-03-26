import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SkinAnalysis from "./pages/SkinAnalysis";
import Consult from "./pages/Consult";
import ConsultPayment from "./pages/ConsultPayment";
import MembershipPayment from "./pages/MembershipPayment";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";
import Learn from "./pages/Learn";
import About from "./pages/About";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/skin-analysis" element={<SkinAnalysis />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/consult/payment" element={<ConsultPayment />} />
          <Route path="/membership/payment" element={<MembershipPayment />} />
          <Route path="/shop/:slug" element={<ProductDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
