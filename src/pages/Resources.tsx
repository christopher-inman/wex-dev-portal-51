import React, { useState, useMemo } from 'react';
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
    description: 'Comprehensive documentation covering core concepts, best practices, and step-by-step tutorials.',
    icon: BookOpen,
    tags: ['Documentation', 'Integration', 'API Guide'],
    actionLink: '/guides',
    iconColor: '#F7901E',
    features: [
      'Getting Started Guide',
      'Authentication & Security',
      'API Best Practices',
      'Integration Patterns',
      'Troubleshooting Guide'
    ]
  },
  {
    title: 'SDK Libraries',
    description: 'Official client libraries and SDKs in multiple programming languages with complete documentation.',
    icon: Code,
    tags: ['JavaScript', 'Python', 'Java', 'Ruby', 'PHP', '.NET'],
    actionLink: '/sdk',
    iconColor: '#55a9da',
    features: [
      'Installation Guides',
      'API Reference',
      'Code Examples',
      'Version Compatibility',
      'GitHub Repositories'
    ]
  },
  {
    title: 'Code Samples',
    description: 'Ready-to-use code examples demonstrating key features and common integration patterns.',
    icon: FileText,
    tags: ['Samples', 'Integration'],
    actionLink: '/code-samples',
    iconColor: '#253746',
    features: [
      'Payment Processing',
      'Fleet Management',
      'Benefits Integration',
      'Error Handling',
      'Testing Examples'
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation with detailed endpoint descriptions, parameters, and response formats.',
    icon: Book,
    tags: ['API', 'Reference'],
    actionLink: '/api-reference',
    iconColor: '#cf1f39',
    features: [
      'Endpoint Documentation',
      'Request/Response Examples',
      'Error Codes',
      'Authentication Guide',
      'Rate Limits'
    ]
  },
  {
    title: 'Case Studies',
    description: 'Real-world implementation examples and success stories from WEX API integrations.',
    icon: BarChart,
    tags: ['Business', 'Success Stories'],
    actionLink: '/case-studies',
    iconColor: '#58595B',
    features: [
      'Implementation Stories',
      'Technical Details',
      'Business Impact',
      'Best Practices',
      'Customer Testimonials'
    ]
  },
  {
    title: 'Community Forums',
    description: 'Connect with other developers, share knowledge, and get help with your integration.',
    icon: Users,
    tags: ['Community', 'Support'],
    actionLink: '/community',
    iconColor: '#6B7280',
    features: [
      'Discussion Boards',
      'Knowledge Base',
      'Feature Requests',
      'Bug Reports',
      'Developer Showcase'
    ]
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides covering implementation details and best practices.',
    icon: Video,
    tags: ['Tutorials', 'Visual Learning'],
    actionLink: '/videos',
    iconColor: '#F7901E',
    features: [
      'Getting Started',
      'Advanced Topics',
      'Integration Guides',
      'Best Practices',
      'Troubleshooting'
    ]
  },
  {
    title: 'Downloadable Assets',
    description: 'Access logos, brand assets, and design resources for your integration.',
    icon: Download,
    tags: ['Design', 'Assets'],
    actionLink: '/assets',
    iconColor: '#55a9da',
    features: [
      'Brand Guidelines',
      'Logo Package',
      'UI Components',
      'Design Templates',
      'Icon Library'
    ]
  },
  {
    title: 'Blog Articles',
    description: 'Technical articles, product updates, and best practices from our engineering team.',
    icon: PenTool,
    tags: ['Articles', 'Updates'],
    actionLink: '/blog',
    iconColor: '#cf1f39',
    features: [
      'Technical Deep Dives',
      'Product Updates',
      'Integration Tips',
      'Industry Insights',
      'Release Notes'
    ]
  }
];

const Resources: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredResources = useMemo(() => {
    if (!searchQuery) return resources;
    
    const query = searchQuery.toLowerCase();
    return resources.filter(resource => {
      return (
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        (resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    });
  }, [searchQuery]);

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
              
              <ResourceSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
                  <select 
                    className="bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                  >
                    <option value="">All Resources</option>
                    <option value="API Guide">Guides</option>
                    <option value="Code">Code & SDKs</option>
                    <option value="Documentation">Documentation</option>
                    <option value="Video">Videos</option>
                  </select>
                </div>
              </div>
            </TransitionContainer>
            
            {filteredResources.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No resources found</h3>
                <p className="text-foreground/70">
                  Try adjusting your search query or filters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <TransitionContainer key={index} delay={index * 100}>
                    <ResourceCard
                      title={resource.title}
                      description={resource.description}
                      icon={resource.icon}
                      tags={resource.tags}
                      features={resource.features}
                      actionLink={resource.actionLink}
                      iconColor={resource.iconColor}
                    />
                  </TransitionContainer>
                ))}
              </div>
            )}
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
                  <a href="#" className="text-wex-red hover:underline">Visit the forum →</a>
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
                  <a href="#" className="text-wex-red hover:underline">View upcoming events →</a>
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
                  <a href="#" className="text-wex-red hover:underline">View tutorial library →</a>
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