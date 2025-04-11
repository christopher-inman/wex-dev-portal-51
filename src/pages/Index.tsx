
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Documentation from '@/components/Documentation';
import Footer from '@/components/Footer';
import TransitionContainer from '@/components/TransitionContainer';
import AnimatedCard from '@/components/AnimatedCard';
import Button from '@/components/Button';
import { Code, Database, GitBranch, Github, Globe, HelpCircle, Lock, Search, Server, Shield, Terminal, Mail } from 'lucide-react';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const id = href.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        e.preventDefault();
        window.scrollTo({
          top: element.offsetTop - 80, // Offset for the fixed header
          behavior: 'smooth',
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <Documentation />
        
        {/* Resources Section */}
        <section id="resources" className="section-padding bg-muted/30 dark:bg-muted/10">
          <div className="container-custom">
            <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-sm font-medium text-secondary mb-3">EVERYTHING YOU NEED</h5>
              <h2 className="text-4xl font-bold mb-6">Developer Resources</h2>
              <p className="text-lg text-foreground/70">
                Take advantage of our comprehensive resources to help you build, test, and deploy your WEX-powered applications.
              </p>
            </TransitionContainer>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TransitionContainer delay={100}>
                <AnimatedCard className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-wex-red/10 flex items-center justify-center mb-4">
                      <Code className="w-6 h-6 text-wex-red" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Code Samples</h3>
                    <p className="text-sm text-foreground/70 mb-6">
                      Ready-to-use code samples in multiple programming languages to help you get started quickly.
                    </p>
                    <div className="mt-auto">
                      <div className="grid grid-cols-3 gap-2">
                        {['Python', 'Java', 'Node.js', 'Ruby', 'Go', 'PHP'].map((lang) => (
                          <div key={lang} className="text-xs py-1 px-2 bg-foreground/5 rounded text-center font-medium">
                            {lang}
                          </div>
                        ))}
                      </div>
                      <Button variant="text" className="mt-4 text-sm">
                        Browse samples →
                      </Button>
                    </div>
                  </div>
                </AnimatedCard>
              </TransitionContainer>
              
              <TransitionContainer delay={200}>
                <AnimatedCard className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-wex-lightBlue/10 flex items-center justify-center mb-4">
                      <GitBranch className="w-6 h-6 text-wex-lightBlue" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">SDKs & Libraries</h3>
                    <p className="text-sm text-foreground/70 mb-6">
                      Official software development kits and client libraries to simplify your integration process.
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex space-x-2">
                        <Github className="w-5 h-5 text-foreground/70" />
                        <span className="text-sm text-foreground/70">wex-developers</span>
                      </div>
                      <Button variant="text" className="text-sm">
                        View repositories →
                      </Button>
                    </div>
                  </div>
                </AnimatedCard>
              </TransitionContainer>
              
              <TransitionContainer delay={300}>
                <AnimatedCard className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-wex-orange/10 flex items-center justify-center mb-4">
                      <Terminal className="w-6 h-6 text-wex-orange" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">API Testing Tools</h3>
                    <p className="text-sm text-foreground/70 mb-6">
                      Tools to test your API integrations in a sandbox environment before going live.
                    </p>
                    <div className="mt-auto">
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-wex-orange rounded-full mr-2"></span>
                          API Playground
                        </li>
                        <li className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-wex-orange rounded-full mr-2"></span>
                          Postman Collections
                        </li>
                        <li className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-wex-orange rounded-full mr-2"></span>
                          Request Validator
                        </li>
                      </ul>
                      <Button variant="text" className="text-sm">
                        Access tools →
                      </Button>
                    </div>
                  </div>
                </AnimatedCard>
              </TransitionContainer>
            </div>
          </div>
        </section>
        
        {/* Support Section */}
        <section id="support" className="section-padding bg-background dark:bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <TransitionContainer animation="fade-in-left">
                  <h5 className="text-sm font-medium text-secondary mb-3">HERE TO HELP</h5>
                  <h2 className="text-4xl font-bold mb-6">Developer Support</h2>
                  <p className="text-lg text-foreground/70 mb-8">
                    We're committed to your success. Our developer support team is here to help you every step of the way.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-wex-lightBlue/10 flex items-center justify-center">
                          <Search className="w-5 h-5 text-wex-lightBlue" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold mb-1">Knowledge Base</h4>
                        <p className="text-foreground/70 text-sm">
                          Search our extensive knowledge base for answers to common questions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-wex-orange/10 flex items-center justify-center">
                          <HelpCircle className="w-5 h-5 text-wex-orange" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold mb-1">Developer Forum</h4>
                        <p className="text-foreground/70 text-sm">
                          Connect with other developers and get answers from the community.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-wex-red/10 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-wex-red" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold mb-1">Priority Support</h4>
                        <p className="text-foreground/70 text-sm">
                          Get direct assistance from our technical support specialists.
                        </p>
                      </div>
                    </div>
                  </div>
                </TransitionContainer>
              </div>
              
              <div className="lg:col-span-7">
                <TransitionContainer animation="fade-in-right" delay={200}>
                  <AnimatedCard className="overflow-hidden">
                    <div className="bg-secondary text-white p-6">
                      <h3 className="text-xl font-bold mb-2">Contact Developer Support</h3>
                      <p className="text-white/80">
                        Fill out the form below and we'll get back to you as soon as possible.
                      </p>
                    </div>
                    <div className="p-6 bg-card dark:bg-card">
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:ring-2 focus:ring-secondary/40 focus:border-secondary focus:outline-none dark:bg-background dark:border-border dark:text-foreground"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:ring-2 focus:ring-secondary/40 focus:border-secondary focus:outline-none dark:bg-background dark:border-border dark:text-foreground"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:ring-2 focus:ring-secondary/40 focus:border-secondary focus:outline-none dark:bg-background dark:border-border dark:text-foreground"
                            placeholder="What's your question about?"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:ring-2 focus:ring-secondary/40 focus:border-secondary focus:outline-none dark:bg-background dark:border-border dark:text-foreground"
                            placeholder="Please provide details about your issue or question..."
                          ></textarea>
                        </div>
                        
                        <div>
                          <Button
                            variant="primary"
                            type="submit"
                            className="w-full md:w-auto"
                          >
                            Submit Request
                          </Button>
                        </div>
                      </form>
                    </div>
                  </AnimatedCard>
                </TransitionContainer>
              </div>
            </div>
          </div>
        </section>
        
        {/* Security Banner */}
        <section className="py-20 bg-gradient-to-r from-secondary to-wex-lightBlue text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TransitionContainer delay={100}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Enterprise Security</h4>
                  <p className="text-white/80 text-sm">
                    Bank-grade security measures to protect all data and transactions.
                  </p>
                </div>
              </TransitionContainer>
              
              <TransitionContainer delay={200}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Compliance</h4>
                  <p className="text-white/80 text-sm">
                    Fully compliant with PCI-DSS, GDPR, and other global standards.
                  </p>
                </div>
              </TransitionContainer>
              
              <TransitionContainer delay={300}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">99.99% Uptime</h4>
                  <p className="text-white/80 text-sm">
                    Enterprise-grade infrastructure with continuous monitoring.
                  </p>
                </div>
              </TransitionContainer>
              
              <TransitionContainer delay={400}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Global Scale</h4>
                  <p className="text-white/80 text-sm">
                    Distributed infrastructure to support businesses worldwide.
                  </p>
                </div>
              </TransitionContainer>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-muted/30 dark:bg-muted/10">
          <div className="container-custom max-w-4xl">
            <TransitionContainer className="text-center">
              <div className="glass-card p-12 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/50 shadow-lg">
                <h2 className="text-4xl font-bold mb-6">Ready to start building?</h2>
                <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of developers who are already creating innovative solutions with WEX APIs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button variant="primary" size="lg">
                    Create Developer Account
                  </Button>
                  <Button variant="secondary" size="lg">
                    Explore Documentation
                  </Button>
                </div>
              </div>
            </TransitionContainer>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
