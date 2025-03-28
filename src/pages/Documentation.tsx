
import React from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionContainer from '@/components/TransitionContainer';
import { BookOpen, Code, FileText, Search, FileCog, Coffee, Terminal, HelpCircle } from 'lucide-react';

const Documentation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Documentation | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <div className="container-custom">
          <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-sm font-medium text-primary mb-3">RESOURCES</h5>
            <h1 className="text-4xl font-bold mb-6">Developer Documentation</h1>
            <p className="text-lg text-foreground/70">
              Comprehensive guides, references, and tools to help you integrate with WEX APIs.
            </p>
          </TransitionContainer>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <TransitionContainer delay={100}>
                <Card className="p-6 hover:shadow-md transition-all duration-300 h-full">
                  <div className="mb-4 w-12 h-12 rounded-full bg-wex-orange/20 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-wex-orange" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Getting Started</h3>
                  <p className="text-sm text-foreground/70">Quick introduction to WEX APIs and authentication.</p>
                </Card>
              </TransitionContainer>
              
              <TransitionContainer delay={200}>
                <Card className="p-6 hover:shadow-md transition-all duration-300 h-full">
                  <div className="mb-4 w-12 h-12 rounded-full bg-wex-lightBlue/20 flex items-center justify-center">
                    <Code className="h-6 w-6 text-wex-lightBlue" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">API Reference</h3>
                  <p className="text-sm text-foreground/70">Detailed documentation for all API endpoints.</p>
                </Card>
              </TransitionContainer>
              
              <TransitionContainer delay={300}>
                <Card className="p-6 hover:shadow-md transition-all duration-300 h-full">
                  <div className="mb-4 w-12 h-12 rounded-full bg-wex-red/20 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-wex-red" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Tutorials</h3>
                  <p className="text-sm text-foreground/70">Step-by-step guides for common integration scenarios.</p>
                </Card>
              </TransitionContainer>
              
              <TransitionContainer delay={400}>
                <Card className="p-6 hover:shadow-md transition-all duration-300 h-full">
                  <div className="mb-4 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <Search className="h-6 w-6 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Examples</h3>
                  <p className="text-sm text-foreground/70">Code samples and implementation examples.</p>
                </Card>
              </TransitionContainer>
            </div>
            
            <Tabs defaultValue="fleet" className="w-full">
              <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-3 mb-8">
                <TabsTrigger value="fleet">Fleet Docs</TabsTrigger>
                <TabsTrigger value="payment">Payment Docs</TabsTrigger>
                <TabsTrigger value="corporate">Corporate Docs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fleet">
                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Vehicle Tracking API</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">The Vehicle Tracking API allows you to retrieve real-time location data, historical routes, and telemetry information for your entire fleet.</p>
                        <div className="flex gap-2">
                          <a href="#" className="text-wex-orange hover:underline text-sm">API Reference</a>
                          <span>•</span>
                          <a href="#" className="text-wex-orange hover:underline text-sm">Tutorial</a>
                          <span>•</span>
                          <a href="#" className="text-wex-orange hover:underline text-sm">Sample Code</a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Fuel Management API</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">The Fuel Management API helps you optimize fuel consumption, track expenses, and integrate with fuel card systems.</p>
                        <div className="flex gap-2">
                          <a href="#" className="text-wex-orange hover:underline text-sm">API Reference</a>
                          <span>•</span>
                          <a href="#" className="text-wex-orange hover:underline text-sm">Tutorial</a>
                          <span>•</span>
                          <a href="#" className="text-wex-orange hover:underline text-sm">Sample Code</a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Card Control API</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">The Card Control API enables you to manage fleet cards, set spending limits, and generate detailed transaction reports.</p>
                        <div className="flex gap-2">
                          <a href="#" className="text-wex-orange hover:underline text-sm">API Reference</a>
                          <span>•</span>
                          <a href="#" className="text-wex-orange hover:underline text-sm">Tutorial</a>
                          <span>•</span>
                          <a href="#" className="text-wex-orange hover:underline text-sm">Sample Code</a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
              
              <TabsContent value="payment">
                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Card Payment API</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">The Card Payment API provides secure processing of credit and debit card transactions with fraud detection capabilities.</p>
                        <div className="flex gap-2">
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">API Reference</a>
                          <span>•</span>
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">Tutorial</a>
                          <span>•</span>
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">Sample Code</a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>ACH Transfer API</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">The ACH Transfer API facilitates direct bank-to-bank transfers with support for same-day ACH and batch processing.</p>
                        <div className="flex gap-2">
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">API Reference</a>
                          <span>•</span>
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">Tutorial</a>
                          <span>•</span>
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">Sample Code</a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Tokenization API</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">The Tokenization API enables secure storage of payment information with PCI-compliant token management.</p>
                        <div className="flex gap-2">
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">API Reference</a>
                          <span>•</span>
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">Tutorial</a>
                          <span>•</span>
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">Sample Code</a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
              
              <TabsContent value="corporate">
                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Expense Management API</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">The Expense Management API streamlines expense reporting and approval workflows with receipt capture capabilities.</p>
                        <div className="flex gap-2">
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">API Reference</a>
                          <span>•</span>
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">Tutorial</a>
                          <span>•</span>
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">Sample Code</a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Virtual Card API</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">The Virtual Card API allows you to generate and manage virtual cards for secure, controlled payments.</p>
                        <div className="flex gap-2">
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">API Reference</a>
                          <span>•</span>
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">Tutorial</a>
                          <span>•</span>
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">Sample Code</a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Approval Workflow API</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">The Approval Workflow API helps you configure custom approval processes with multi-level authorization and audit trails.</p>
                        <div className="flex gap-2">
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">API Reference</a>
                          <span>•</span>
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">Tutorial</a>
                          <span>•</span>
                          <a href="#" className="text-wex-lightBlue hover:underline text-sm">Sample Code</a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="glass-card rounded-2xl border border-border shadow-lg p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="w-16 h-16 rounded-full bg-wex-red/20 flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-wex-red" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">Need help with the documentation?</h3>
                <p className="text-foreground/70 mb-4">
                  Our developer support team is available to help you with any questions about our APIs and documentation.
                </p>
                <button className="text-wex-lightBlue font-medium hover:underline transition-all duration-200">
                  Contact developer support →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Documentation;
