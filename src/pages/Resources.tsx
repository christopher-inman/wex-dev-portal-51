
import React from 'react';
import { Book, Code, FileText, BookOpen, BarChart, Globe, Users, Video, Download, PenTool } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionContainer from '@/components/TransitionContainer';
import ResourceCard from '@/components/ResourceCard';
import ApiStatus from '@/components/ApiStatus';
import Faq from '@/components/Faq';
import NewsletterSignup from '@/components/NewsletterSignup';
import ResourceSearch from '@/components/ResourceSearch';

const resources = [
  {
    title: 'Developer Guides',
    description: 'Step-by-step guides for integrating WEX payment solutions into your applications.',
    icon: BookOpen,
    tags: ['Documentation', 'Integration'],
    actionLink: '/guides'
  },
  {
    title: 'SDK Libraries',
    description: 'Official client libraries in multiple programming languages to simplify development.',
    icon: Code,
    tags: ['JavaScript', 'Python', 'Java', 'Ruby', 'PHP', '.NET'],
    actionLink: '/sdk'
  },
  {
    title: 'Code Samples',
    description: 'Ready-to-use code examples demonstrating common integration patterns.',
    icon: FileText,
    tags: ['Samples', 'Integration'],
    actionLink: '/code-samples'
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation with request/response examples and schema definitions.',
    icon: Book,
    tags: ['API', 'Reference'],
    actionLink: '/api-reference'
  },
  {
    title: 'Case Studies',
    description: 'Learn how other businesses have successfully implemented WEX payment solutions.',
    icon: BarChart,
    tags: ['Business', 'Success Stories'],
    actionLink: '/case-studies'
  },
  {
    title: 'Community Forums',
    description: 'Connect with other developers and get answers to your integration questions.',
    icon: Users,
    tags: ['Community', 'Support'],
    actionLink: '/community'
  },
  {
    title: 'Video Tutorials',
    description: 'Watch step-by-step video guides for implementing key features.',
    icon: Video,
    tags: ['Tutorials', 'Visual Learning'],
    actionLink: '/videos'
  },
  {
    title: 'Downloadable Assets',
    description: 'Access logos, brand assets, and design resources for your integration.',
    icon: Download,
    tags: ['Design', 'Assets'],
    actionLink: '/assets'
  },
  {
    title: 'Blog Articles',
    description: 'Technical articles, product updates, and best practices from our engineering team.',
    icon: PenTool,
    tags: ['Articles', 'Updates'],
    actionLink: '/blog'
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/30 to-background pt-20 pb-12">
          <div className="container-custom">
            <TransitionContainer className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Developer Resources</h1>
              <p className="text-xl text-foreground/70 mb-12">
                Everything you need to build, integrate, and scale with WEX payment solutions.
              </p>
              
              <ResourceSearch />
            </TransitionContainer>
          </div>
        </section>
        
        {/* Resource Library Section */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <TransitionContainer className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h5 className="text-sm font-medium text-wex-blue mb-1">RESOURCE LIBRARY</h5>
                  <h2 className="text-3xl font-bold">Developer Tools & Resources</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-foreground/70">Filter:</span>
                  <select className="bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                    <option value="all">All Resources</option>
                    <option value="guides">Guides</option>
                    <option value="code">Code & SDKs</option>
                    <option value="docs">Documentation</option>
                    <option value="videos">Videos</option>
                  </select>
                </div>
              </div>
            </TransitionContainer>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <TransitionContainer key={index} delay={index * 100}>
                  <ResourceCard
                    title={resource.title}
                    description={resource.description}
                    icon={resource.icon}
                    tags={resource.tags}
                    actionLink={resource.actionLink}
                  />
                </TransitionContainer>
              ))}
            </div>
          </div>
        </section>
        
        {/* API Status & FAQ Section */}
        <section className="py-12 md:py-16 bg-muted/30 dark:bg-muted/10">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TransitionContainer animation="fade-in-left">
                <h5 className="text-sm font-medium text-wex-blue mb-1">SYSTEM STATUS</h5>
                <h2 className="text-3xl font-bold mb-6">API Status</h2>
                <ApiStatus />
              </TransitionContainer>
              
              <TransitionContainer animation="fade-in-right" delay={200}>
                <h5 className="text-sm font-medium text-wex-blue mb-1">COMMON QUESTIONS</h5>
                <h2 className="text-3xl font-bold mb-6">FAQs</h2>
                <Faq />
              </TransitionContainer>
            </div>
          </div>
        </section>
        
        {/* Community & Support Section */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <TransitionContainer className="text-center max-w-3xl mx-auto mb-12">
              <h5 className="text-sm font-medium text-wex-blue mb-1">JOIN OUR COMMUNITY</h5>
              <h2 className="text-3xl font-bold mb-4">Connect with other developers</h2>
              <p className="text-lg text-foreground/70">
                Share knowledge, ask questions, and collaborate with fellow developers in the WEX community.
              </p>
            </TransitionContainer>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <TransitionContainer delay={100}>
                <div className="bg-background rounded-xl border border-border p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-wex-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Developer Forum</h3>
                  <p className="text-sm text-foreground/70 mb-6">
                    Ask questions, share your knowledge, and connect with other WEX developers.
                  </p>
                  <a href="#" className="text-wex-blue hover:underline">Visit the forum →</a>
                </div>
              </TransitionContainer>
              
              <TransitionContainer delay={200}>
                <div className="bg-background rounded-xl border border-border p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-wex-orange" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Developer Events</h3>
                  <p className="text-sm text-foreground/70 mb-6">
                    Join our webinars, workshops, and hackathons to learn and network.
                  </p>
                  <a href="#" className="text-wex-blue hover:underline">View upcoming events →</a>
                </div>
              </TransitionContainer>
              
              <TransitionContainer delay={300}>
                <div className="bg-background rounded-xl border border-border p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mx-auto mb-4">
                    <Video className="w-8 h-8 text-wex-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
                  <p className="text-sm text-foreground/70 mb-6">
                    Watch step-by-step video guides for implementing key features.
                  </p>
                  <a href="#" className="text-wex-blue hover:underline">View tutorial library →</a>
                </div>
              </TransitionContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <TransitionContainer>
                  <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Need specialized support?</h3>
                    <p className="text-lg mb-6">
                      Our developer support team is here to help with your integration challenges.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a href="/support" className="bg-wex-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-wex-blue/90 transition-colors">
                        Contact Support
                      </a>
                      <a href="#" className="bg-background border border-border px-6 py-3 rounded-lg font-medium hover:bg-foreground/5 transition-colors">
                        Join Slack Community
                      </a>
                    </div>
                  </div>
                </TransitionContainer>
              </div>
              
              <div>
                <TransitionContainer delay={200}>
                  <NewsletterSignup />
                </TransitionContainer>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
