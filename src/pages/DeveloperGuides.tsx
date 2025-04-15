import React from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionContainer from '@/components/TransitionContainer';
import { BookOpen, Code, FileText, Search, Shield, Wrench, BookMarked, Terminal, HelpCircle, Key } from 'lucide-react';

const DeveloperGuides: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Developer Guides | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      
      <div className="pt-24 min-h-screen">
        <div className="container-custom">
          <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-sm font-medium text-wex-blue mb-3">DEVELOPER GUIDES</h5>
            <h1 className="text-4xl font-bold mb-6">Getting Started with WEX APIs</h1>
            <p className="text-lg text-foreground/70">
              Comprehensive documentation to help you understand and integrate WEX payment solutions into your applications.
            </p>
          </TransitionContainer>

          <div className="mb-16">
            <Tabs defaultValue="getting-started" className="w-full">
              <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-4 mb-8">
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="authentication">Authentication</TabsTrigger>
                <TabsTrigger value="integration">Integration</TabsTrigger>
                <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
              </TabsList>
              
              <TabsContent value="getting-started">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-2xl font-bold mb-4">Quick Start Guide</h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-wex-orange/20 flex items-center justify-center flex-shrink-0">
                          <Terminal className="w-4 h-4 text-wex-orange" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Setup Your Environment</h3>
                          <p className="text-sm text-foreground/70">Configure your development environment and install required dependencies.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-wex-lightBlue/20 flex items-center justify-center flex-shrink-0">
                          <Key className="w-4 h-4 text-wex-lightBlue" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Get API Credentials</h3>
                          <p className="text-sm text-foreground/70">Create an account and obtain your API keys for authentication.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-wex-red/20 flex items-center justify-center flex-shrink-0">
                          <Code className="w-4 h-4 text-wex-red" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Make Your First API Call</h3>
                          <p className="text-sm text-foreground/70">Follow our step-by-step guide to make your first API request.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-2xl font-bold mb-4">Core Concepts</h2>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>API Architecture Overview</AccordionTrigger>
                        <AccordionContent>
                          Learn about WEX's RESTful API architecture, request/response formats, and available endpoints.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Authentication Methods</AccordionTrigger>
                        <AccordionContent>
                          Understand the different authentication methods and how to secure your API requests.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Error Handling</AccordionTrigger>
                        <AccordionContent>
                          Learn about error codes, error handling best practices, and troubleshooting common issues.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="authentication">
                <div className="max-w-4xl mx-auto">
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-2xl font-bold mb-6">Authentication Guide</h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-wex-red/20 flex items-center justify-center flex-shrink-0">
                          <Shield className="w-5 h-5 text-wex-red" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Secure Your API Requests</h3>
                          <p className="text-foreground/70 mb-4">
                            Learn how to authenticate your API requests using our secure authentication methods.
                          </p>
                          <div className="bg-muted/30 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Authentication Methods</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-wex-red"></span>
                                OAuth 2.0 Authentication
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-wex-red"></span>
                                API Key Authentication
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-wex-red"></span>
                                JWT Token Authentication
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="integration">
                <div className="max-w-4xl mx-auto">
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-2xl font-bold mb-6">Integration Guide</h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-wex-lightBlue/20 flex items-center justify-center flex-shrink-0">
                          <Wrench className="w-5 h-5 text-wex-lightBlue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Integration Steps</h3>
                          <p className="text-foreground/70 mb-4">
                            Follow our step-by-step guide to integrate WEX APIs into your application.
                          </p>
                          <div className="bg-muted/30 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Integration Checklist</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-wex-lightBlue"></span>
                                Environment Setup
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-wex-lightBlue"></span>
                                API Authentication
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-wex-lightBlue"></span>
                                Testing & Validation
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="best-practices">
                <div className="max-w-4xl mx-auto">
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-wex-orange/20 flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-5 h-5 text-wex-orange" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">API Best Practices</h3>
                          <p className="text-foreground/70 mb-4">
                            Learn the recommended practices for using WEX APIs effectively.
                          </p>
                          <div className="bg-muted/30 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Key Recommendations</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-wex-orange"></span>
                                Error Handling
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-wex-orange"></span>
                                Rate Limiting
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-wex-orange"></span>
                                Security Guidelines
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <TransitionContainer delay={100}>
              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-wex-orange/20 flex items-center justify-center mb-4">
                  <BookMarked className="w-6 h-6 text-wex-orange" />
                </div>
                <h3 className="text-xl font-bold mb-2">API Documentation</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Complete reference documentation for all WEX API endpoints and features.
                </p>
                <a href="/api-reference" className="text-wex-red hover:underline">View Documentation →</a>
              </div>
            </TransitionContainer>

            <TransitionContainer delay={200}>
              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-wex-lightBlue/20 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-wex-lightBlue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Code Examples</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Ready-to-use code samples in multiple programming languages.
                </p>
                <a href="/code-samples" className="text-wex-red hover:underline">View Examples →</a>
              </div>
            </TransitionContainer>

            <TransitionContainer delay={300}>
              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-wex-red/20 flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-wex-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Support Resources</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Get help from our developer support team and community.
                </p>
                <a href="/support" className="text-wex-red hover:underline">Get Help →</a>
              </div>
            </TransitionContainer>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default DeveloperGuides;