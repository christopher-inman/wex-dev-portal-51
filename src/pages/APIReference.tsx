import React from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionContainer from '@/components/TransitionContainer';
import { FileText, Code, Shield, AlertTriangle, Terminal, BookOpen } from 'lucide-react';

const APIReference: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>API Reference | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      
      <div className="pt-24 min-h-screen">
        <div className="container-custom">
          <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-sm font-medium text-wex-blue mb-3">API REFERENCE</h5>
            <h1 className="text-4xl font-bold mb-6">API Documentation</h1>
            <p className="text-lg text-foreground/70">
              Complete reference documentation for all WEX API endpoints, including request/response formats and examples.
            </p>
          </TransitionContainer>

          <div className="mb-16">
            <Tabs defaultValue="endpoints" className="w-full">
              <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-4 mb-8">
                <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                <TabsTrigger value="authentication">Authentication</TabsTrigger>
                <TabsTrigger value="errors">Errors</TabsTrigger>
                <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
              </TabsList>
              
              <TabsContent value="endpoints">
                <div className="max-w-4xl mx-auto">
                  <div className="glass-card rounded-xl p-6">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="payments">
                        <AccordionTrigger>Payment Endpoints</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <div className="bg-muted/30 rounded-lg p-4">
                              <h4 className="font-medium mb-2">POST /v1/payments</h4>
                              <p className="text-sm text-foreground/70 mb-2">Create a new payment</p>
                              <div className="flex gap-2">
                                <a href="#" className="text-sm">Documentation</a>
                                <span>•</span>
                                <a href="#" className="text-sm">Try it</a>
                              </div>
                            </div>
                            
                            <div className="bg-muted/30 rounded-lg p-4">
                              <h4 className="font-medium mb-2">GET /v1/payments/:id</h4>
                              <p className="text-sm text-foreground/70 mb-2">Retrieve a payment</p>
                              <div className="flex gap-2">
                                <a href="#" className="text-sm">Documentation</a>
                                <span>•</span>
                                <a href="#" className="text-sm">Try it</a>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      {/* Add more endpoint categories */}
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
              
              {/* Add content for other tabs */}
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-wex-orange/20 flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-wex-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">API Console</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Test API endpoints directly from your browser with our interactive console.
              </p>
              <a href="#" className="text-wex-red hover:underline">Launch Console →</a>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-wex-lightBlue/20 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-wex-lightBlue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Code Examples</h3>
              <p className="text-sm text-foreground/70 mb-4">
                View code examples in multiple programming languages.
              </p>
              <a href="/code-samples" className="text-wex-red hover:underline">View Examples →</a>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-wex-red/20 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-wex-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Guides</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Learn how to integrate WEX APIs with our detailed guides.
              </p>
              <a href="/guides" className="text-wex-red hover:underline">View Guides →</a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default APIReference;