import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Calculators from "./pages/Calculators";
import Downloads from "./pages/Downloads";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
// React Router basename should not end with a trailing slash; trim it from Vite's BASE_URL
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* basename ensures routes work when the app is served from a sub-path (e.g. GitHub Pages) */}
      <BrowserRouter basename={basename}>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
