import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Channels from "./pages/Channels";
import Rooms from "./pages/Rooms";
import Auth from "./pages/Auth";
import ListProperty from "./pages/ListProperty";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/list-property" element={<ListProperty />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;