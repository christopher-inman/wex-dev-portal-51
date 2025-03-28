
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import APIs from "./pages/APIs";
import Documentation from "./pages/Documentation";
import Resources from "./pages/Resources";
import Support from "./pages/Support";
import SignIn from "./pages/SignIn";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="wex-theme">
      <Helmet>
        <title>WEX Developer Portal</title>
        <meta name="description" content="Access WEX's powerful payment and fleet management APIs" />
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/apis" element={<APIs />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/support" element={<Support />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/get-started" element={<GetStarted />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
