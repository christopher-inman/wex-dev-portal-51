
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionContainer from '@/components/TransitionContainer';
import { HelpCircle, MessageSquare, Phone, Mail, BookOpen, Clock, Users, FileText } from 'lucide-react';
import Button from '@/components/Button';

const Support: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <div className="container-custom">
          <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-sm font-medium text-primary mb-3">DEVELOPER SUPPORT</h5>
            <h1 className="text-4xl font-bold mb-6">How Can We Help?</h1>
            <p className="text-lg text-foreground/70">
              Get the support you need to successfully integrate and use WEX APIs.
            </p>
          </TransitionContainer>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <TransitionContainer delay={100}>
              <Card className="p-6 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-full bg-wex-orange/20 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-wex-orange" />
                </div>
                <h3 className="text-xl font-medium mb-2">Chat Support</h3>
                <p className="text-sm text-foreground/70 mb-4 flex-grow">Connect with our developer support team via live chat for quick assistance.</p>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-foreground/60" />
                  <span className="text-foreground/60">Available 9am-7pm ET, Mon-Fri</span>
                </div>
                <Button variant="primary" className="mt-4">Start Chat</Button>
              </Card>
            </TransitionContainer>
            
            <TransitionContainer delay={200}>
              <Card className="p-6 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-full bg-wex-lightBlue/20 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-wex-lightBlue" />
                </div>
                <h3 className="text-xl font-medium mb-2">Email Support</h3>
                <p className="text-sm text-foreground/70 mb-4 flex-grow">Send us an email with your questions or issues for detailed assistance.</p>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-foreground/60" />
                  <span className="text-foreground/60">Response within 24 hours</span>
                </div>
                <Button variant="secondary" className="mt-4">Email Support</Button>
              </Card>
            </TransitionContainer>
            
            <TransitionContainer delay={300}>
              <Card className="p-6 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-full bg-wex-red/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-wex-red" />
                </div>
                <h3 className="text-xl font-medium mb-2">Phone Support</h3>
                <p className="text-sm text-foreground/70 mb-4 flex-grow">Speak directly with our developer support engineers for complex issues.</p>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-foreground/60" />
                  <span className="text-foreground/60">Available 9am-5pm ET, Mon-Fri</span>
                </div>
                <Button variant="outline" className="mt-4">Call Support</Button>
              </Card>
            </TransitionContainer>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="w-full grid grid-cols-3 mb-8">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="billing">Billing & Access</TabsTrigger>
                </TabsList>
                
                <TabsContent value="general">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do I get started with WEX APIs?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          To get started with WEX APIs, you'll need to register for a developer account, review our documentation, and request API credentials. Our Getting Started guide provides step-by-step instructions to help you through the process. You can also access our sandbox environment to test your integration before going live.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What is the SLA for WEX API services?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          WEX APIs have a 99.9% uptime SLA for production environments. Our APIs are designed with reliability and performance in mind, with redundant systems and global distribution. We perform maintenance during off-peak hours and provide advance notice for any scheduled downtime.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How can I report an issue with the API?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          You can report issues through our developer support portal, email, or phone support. When reporting an issue, please include details such as the API endpoint, request/response payloads, error messages, and timestamps to help us investigate more efficiently.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                
                <TabsContent value="technical">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What authentication methods do WEX APIs support?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          WEX APIs support multiple authentication methods including OAuth 2.0, API keys, and JWT tokens. The recommended method is OAuth 2.0 for most integrations, providing secure access token management and authorization flows. Refer to our Authentication Guide for implementation details.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Are there rate limits for API requests?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          Yes, WEX APIs implement rate limiting to ensure fair usage and system stability. The default rate limits vary by API and subscription tier. You can view your current rate limits and usage in the developer dashboard. If you need higher limits, please contact our support team to discuss your requirements.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How do I handle webhook notifications?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          To handle webhook notifications, you'll need to set up an endpoint on your server to receive POST requests from WEX. Webhooks are sent for various events such as transaction authorizations, settlements, and status changes. We recommend implementing signature verification to ensure the webhooks are authentic and idempotency handling for reliability.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                
                <TabsContent value="billing">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How are API usage fees calculated?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          API usage fees are calculated based on the number of API calls, data volume, and specific features used. We offer tiered pricing plans with different usage allowances. The developer dashboard provides detailed usage metrics and cost breakdowns. You can set up usage alerts to avoid unexpected charges.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do I upgrade my API access tier?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          You can upgrade your API access tier through the developer portal or by contacting our sales team. Upgrading provides benefits such as higher rate limits, additional features, and priority support. Tier changes typically take effect within 24 hours of approval.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is there a free tier for testing and development?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          Yes, we offer a free sandbox environment for development and testing purposes. The sandbox provides access to all API endpoints with simulated data and responses. This allows you to build and test your integration without incurring charges. Once you're ready to go live, you'll need to subscribe to a production tier.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="glass-card rounded-2xl border border-border shadow-lg p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Developer Community</h2>
                <p className="text-foreground/70 mb-6">
                  Join our developer community to connect with other developers, share knowledge, and get help with your integration.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-wex-orange" />
                    </div>
                    <div>
                      <h3 className="font-medium">Developer Forum</h3>
                      <p className="text-sm text-foreground/70">Ask questions and share knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5 text-wex-lightBlue" />
                    </div>
                    <div>
                      <h3 className="font-medium">Technical Blog</h3>
                      <p className="text-sm text-foreground/70">Latest updates and technical articles</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center mr-3">
                      <BookOpen className="h-5 w-5 text-wex-red" />
                    </div>
                    <div>
                      <h3 className="font-medium">Learning Resources</h3>
                      <p className="text-sm text-foreground/70">Tutorials, webinars, and workshops</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4">Need Specialized Support?</h3>
                <p className="mb-6 text-foreground/70">
                  For complex integration projects, our dedicated solutions team can provide personalized assistance.
                </p>
                <Button variant="primary" fullWidth>Request Consultation</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Support;
