import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import CustomCursor from "./components/CustomCursor.tsx";
import { useIsMobile } from "./hooks/use-mobile.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Veille from "./pages/Veille";
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';
import Cgv from './pages/Cgv';
import Philosophie from './pages/Philosophie';
import Expertise from './pages/Expertise';
import Processus from './pages/Processus';
import Projets from './pages/Projets';
import Contact from './pages/Contact';

const queryClient = new QueryClient();

function App() {
  const isMobile = useIsMobile();

  return (
    <HelmetProvider>
      {!isMobile && <CustomCursor />}
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/philosophie" element={<Philosophie />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/processus" element={<Processus />} />
              <Route path="/projets" element={<Projets />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/veille" element={<Veille />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/confidentialite" element={<Confidentialite />} />
              <Route path="/cgv" element={<Cgv />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
