import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Helmet } from "react-helmet";
import ScrollToTop from "./components/ScrollToTop";

// Page Components
import {
  Index,
  APIs,
  Documentation,
  Resources,
  Support,
  SignIn,
  GetStarted,
  NotFound,
  DeveloperGuides,
  SDKLibraries,
  CodeSamples,
  APIReference,
  CaseStudies,
  Community,
  VideoTutorials,
  DownloadableAssets,
  BlogArticles,
} from "./pages";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      cacheTime: 5 * 60 * 1000, // 5 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

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
          <ScrollToTop />
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/apis" element={<APIs />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/support" element={<Support />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/get-started" element={<GetStarted />} />
            
            {/* Resource Section Routes */}
            <Route path="/guides" element={<DeveloperGuides />} />
            <Route path="/sdk" element={<SDKLibraries />} />
            <Route path="/code-samples" element={<CodeSamples />} />
            <Route path="/api-reference" element={<APIReference />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/community" element={<Community />} />
            <Route path="/videos" element={<VideoTutorials />} />
            <Route path="/assets" element={<DownloadableAssets />} />
            <Route path="/blog" element={<BlogArticles />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;