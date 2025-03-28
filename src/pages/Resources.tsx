
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionContainer from '@/components/TransitionContainer';
import { BookOpen, Code, FileCog, Coffee, Terminal, FileCode, Download, Video } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Resources | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <div className="container-custom">
          <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-sm font-medium text-primary mb-3">DEVELOPER RESOURCES</h5>
            <h1 className="text-4xl font-bold mb-6">Tools & Resources</h1>
            <p className="text-lg text-foreground/70">
              Explore our collection of guides, code samples, SDKs, and tools to accelerate your integration.
            </p>
          </TransitionContainer>

          <Tabs defaultValue="guides" className="w-full mb-16">
            <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="guides">API Guides</TabsTrigger>
              <TabsTrigger value="samples">Code Samples</TabsTrigger>
              <TabsTrigger value="sdks">SDKs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="guides">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TransitionContainer delay={100}>
                  <Card className="overflow-hidden">
                    <div className="h-40 bg-gradient-to-r from-wex-orange to-wex-red flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-white" />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2 py-1 text-xs bg-wex-orange/10 text-wex-orange rounded mb-3">BEGINNER</span>
                      <h3 className="text-xl font-medium mb-2">Getting Started with Fleet APIs</h3>
                      <p className="text-sm text-foreground/70 mb-4">Learn the basics of fleet management API integration.</p>
                      <a href="#" className="text-wex-orange hover:underline font-medium">Read Guide →</a>
                    </div>
                  </Card>
                </TransitionContainer>
                
                <TransitionContainer delay={200}>
                  <Card className="overflow-hidden">
                    <div className="h-40 bg-gradient-to-r from-wex-lightBlue to-blue-700 flex items-center justify-center">
                      <Terminal className="h-16 w-16 text-white" />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2 py-1 text-xs bg-wex-lightBlue/10 text-wex-lightBlue rounded mb-3">INTERMEDIATE</span>
                      <h3 className="text-xl font-medium mb-2">Payment Processing Implementation</h3>
                      <p className="text-sm text-foreground/70 mb-4">Step-by-step guide to implementing secure payment processing.</p>
                      <a href="#" className="text-wex-lightBlue hover:underline font-medium">Read Guide →</a>
                    </div>
                  </Card>
                </TransitionContainer>
                
                <TransitionContainer delay={300}>
                  <Card className="overflow-hidden">
                    <div className="h-40 bg-gradient-to-r from-gray-600 to-gray-900 flex items-center justify-center">
                      <FileCog className="h-16 w-16 text-white" />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2 py-1 text-xs bg-gray-200 text-gray-800 rounded mb-3">ADVANCED</span>
                      <h3 className="text-xl font-medium mb-2">Corporate Payment Workflows</h3>
                      <p className="text-sm text-foreground/70 mb-4">Advanced guide to building custom payment approval workflows.</p>
                      <a href="#" className="text-gray-600 hover:underline font-medium">Read Guide →</a>
                    </div>
                  </Card>
                </TransitionContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="samples">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TransitionContainer delay={100}>
                  <Card className="p-6 hover:shadow-md transition-all duration-300 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-wex-orange/20 flex-shrink-0 flex items-center justify-center">
                        <FileCode className="h-6 w-6 text-wex-orange" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Vehicle Tracking Integration</h3>
                        <p className="text-sm text-foreground/70 mb-3">Sample code demonstrating integration with the Vehicle Tracking API.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 bg-background rounded-full text-xs border border-border">JavaScript</span>
                          <span className="px-2 py-1 bg-background rounded-full text-xs border border-border">React</span>
                        </div>
                        <a href="#" className="text-wex-orange hover:underline text-sm font-medium">View Code →</a>
                      </div>
                    </div>
                  </Card>
                </TransitionContainer>
                
                <TransitionContainer delay={200}>
                  <Card className="p-6 hover:shadow-md transition-all duration-300 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-wex-lightBlue/20 flex-shrink-0 flex items-center justify-center">
                        <FileCode className="h-6 w-6 text-wex-lightBlue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Payment Processing Demo</h3>
                        <p className="text-sm text-foreground/70 mb-3">Complete payment processing implementation with tokenization.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 bg-background rounded-full text-xs border border-border">Java</span>
                          <span className="px-2 py-1 bg-background rounded-full text-xs border border-border">Spring Boot</span>
                        </div>
                        <a href="#" className="text-wex-lightBlue hover:underline text-sm font-medium">View Code →</a>
                      </div>
                    </div>
                  </Card>
                </TransitionContainer>
                
                <TransitionContainer delay={300}>
                  <Card className="p-6 hover:shadow-md transition-all duration-300 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-wex-red/20 flex-shrink-0 flex items-center justify-center">
                        <FileCode className="h-6 w-6 text-wex-red" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Virtual Card Management</h3>
                        <p className="text-sm text-foreground/70 mb-3">Sample code for creating and managing virtual payment cards.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 bg-background rounded-full text-xs border border-border">C#</span>
                          <span className="px-2 py-1 bg-background rounded-full text-xs border border-border">.NET Core</span>
                        </div>
                        <a href="#" className="text-wex-red hover:underline text-sm font-medium">View Code →</a>
                      </div>
                    </div>
                  </Card>
                </TransitionContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="sdks">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TransitionContainer delay={100}>
                  <Card className="p-6 hover:shadow-md transition-all duration-300 h-full border-wex-orange/30">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-full bg-wex-orange/20 flex items-center justify-center">
                        <Code className="h-6 w-6 text-wex-orange" />
                      </div>
                      <Download className="h-5 w-5 text-wex-orange" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">JavaScript SDK</h3>
                    <p className="text-sm text-foreground/70 mb-4">Complete SDK for JavaScript applications with TypeScript support.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-background rounded-full text-xs border border-border">npm</span>
                      <span className="px-2 py-1 bg-background rounded-full text-xs border border-border">v3.2.1</span>
                    </div>
                    <a href="#" className="text-wex-orange hover:underline text-sm font-medium">Installation Guide →</a>
                  </Card>
                </TransitionContainer>
                
                <TransitionContainer delay={200}>
                  <Card className="p-6 hover:shadow-md transition-all duration-300 h-full border-wex-lightBlue/30">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-full bg-wex-lightBlue/20 flex items-center justify-center">
                        <Coffee className="h-6 w-6 text-wex-lightBlue" />
                      </div>
                      <Download className="h-5 w-5 text-wex-lightBlue" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Java SDK</h3>
                    <p className="text-sm text-foreground/70 mb-4">Java SDK for server-side integration with WEX APIs.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-background rounded-full text-xs border border-border">Maven</span>
                      <span className="px-2 py-1 bg-background rounded-full text-xs border border-border">v2.4.0</span>
                    </div>
                    <a href="#" className="text-wex-lightBlue hover:underline text-sm font-medium">Installation Guide →</a>
                  </Card>
                </TransitionContainer>
                
                <TransitionContainer delay={300}>
                  <Card className="p-6 hover:shadow-md transition-all duration-300 h-full border-wex-red/30">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-full bg-wex-red/20 flex items-center justify-center">
                        <Terminal className="h-6 w-6 text-wex-red" />
                      </div>
                      <Download className="h-5 w-5 text-wex-red" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Python SDK</h3>
                    <p className="text-sm text-foreground/70 mb-4">Python library for data analysis and fleet management integration.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-background rounded-full text-xs border border-border">pip</span>
                      <span className="px-2 py-1 bg-background rounded-full text-xs border border-border">v1.8.5</span>
                    </div>
                    <a href="#" className="text-wex-red hover:underline text-sm font-medium">Installation Guide →</a>
                  </Card>
                </TransitionContainer>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Video Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TransitionContainer delay={100}>
                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                    <Video className="h-12 w-12 text-white absolute opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-medium">Getting Started with WEX APIs</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-foreground/70 mb-2">Introduction to the WEX API ecosystem and authentication processes.</p>
                    <span className="text-xs text-foreground/50">15:34 mins</span>
                  </div>
                </div>
              </TransitionContainer>
              
              <TransitionContainer delay={200}>
                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                    <Video className="h-12 w-12 text-white absolute opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-medium">Fleet Management API Tutorial</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-foreground/70 mb-2">Step-by-step implementation of vehicle tracking and fuel management.</p>
                    <span className="text-xs text-foreground/50">23:47 mins</span>
                  </div>
                </div>
              </TransitionContainer>
              
              <TransitionContainer delay={300}>
                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                    <Video className="h-12 w-12 text-white absolute opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-medium">Payment Processing Webinar</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-foreground/70 mb-2">Advanced techniques for secure payment processing and tokenization.</p>
                    <span className="text-xs text-foreground/50">41:22 mins</span>
                  </div>
                </div>
              </TransitionContainer>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resources;
