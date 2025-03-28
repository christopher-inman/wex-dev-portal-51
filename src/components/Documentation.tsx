
import React, { useEffect, useRef } from 'react';
import { Book, Code, FileText, BookOpen, TrendingUp, CheckCircle } from 'lucide-react';
import Button from './Button';
import TransitionContainer from './TransitionContainer';
import AnimatedCard from './AnimatedCard';
import { initPrism, highlightElement } from '@/utils/prismHighlight';

const documentationItems = [
  {
    title: 'API Reference',
    description: 'Complete API documentation with examples and schema definitions.',
    icon: Book,
    link: '#api-reference',
    iconColor: '#c8102e', // WEX red
  },
  {
    title: 'Quick Start Guides',
    description: 'Get up and running quickly with step-by-step tutorials.',
    icon: TrendingUp,
    link: '#quick-start',
    iconColor: '#F7901E', // WEX orange
  },
  {
    title: 'Code Samples',
    description: 'Ready-to-use code samples in multiple programming languages.',
    icon: Code,
    link: '#code-samples',
    iconColor: '#55a9da', // WEX light blue
  },
  {
    title: 'Implementation Guide',
    description: 'Detailed guide for integrating WEX APIs into your application.',
    icon: FileText,
    link: '#implementation-guide',
    iconColor: '#253746', // WEX blue
  },
];

const Documentation: React.FC = () => {
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    // Initialize Prism.js
    initPrism();
    
    // Highlight the code block when component mounts
    if (codeRef.current) {
      highlightElement(codeRef.current);
    }
  }, []);

  return (
    <div id="documentation" className="section-padding bg-background dark:bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <TransitionContainer animation="fade-in-left">
            <h5 className="text-sm font-medium text-wex-blue mb-3">COMPREHENSIVE RESOURCES</h5>
            <h2 className="text-4xl font-bold mb-6">Developer Documentation</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Our documentation is designed to help you integrate with WEX APIs quickly and efficiently. From getting started guides to detailed API references, we've got you covered.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {documentationItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <item.icon className="w-5 h-5" style={{ color: item.iconColor }} />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-semibold">{item.title}</h4>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="primary"
              size="lg"
              icon={<BookOpen className="w-4 h-4" />}
            >
              Browse Documentation
            </Button>
          </TransitionContainer>

          <TransitionContainer animation="fade-in-right" delay={200}>
            <AnimatedCard className="p-0 overflow-hidden">
              <div className="p-6 bg-wex-red text-white">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">OAuth Authentication</h3>
                  <div className="bg-white/20 text-white text-xs rounded-full px-3 py-1">
                    Security
                  </div>
                </div>
                <p className="text-white/80 mb-4">
                  Learn how to authenticate your API requests using OAuth 2.0
                </p>
              </div>
              <div className="p-6">
                <div className="bg-foreground/5 dark:bg-foreground/10 rounded-lg p-4 font-mono text-sm overflow-auto mb-6">
                  <pre ref={codeRef} className="language-javascript">
                    <code>{`// Request an access token
const response = await fetch(
  'https://auth.wex.com/oauth/token',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
      'client_id': YOUR_CLIENT_ID,
      'client_secret': YOUR_CLIENT_SECRET,
      'scope': 'payments:read payments:write'
    })
  }
);

const { access_token } = await response.json();`}</code>
                  </pre>
                </div>
                
                <h4 className="font-semibold mb-3">Key Steps</h4>
                <ul className="space-y-2">
                  {[
                    'Register your application to get client credentials',
                    'Request an access token using your credentials',
                    'Include the token in the Authorization header',
                    'Handle token expiration with refresh tokens'
                  ].map((step, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-wex-red mr-2 flex-shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-border">
                  <a href="#auth-guide" className="text-wex-red font-medium hover:underline transition-all duration-200">
                    View complete authentication guide →
                  </a>
                </div>
              </div>
            </AnimatedCard>
          </TransitionContainer>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
