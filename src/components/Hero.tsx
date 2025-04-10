
import React, { useEffect } from 'react';
import Button from './Button';
import { ArrowRight, Code, Database, Key } from 'lucide-react';
import TransitionContainer from './TransitionContainer';
import { initPrism } from '@/utils/prismHighlight';
import { AuroraBackground } from './ui/aurora-background';

const Hero: React.FC = () => {
  useEffect(() => {
    // Initialize Prism for syntax highlighting
    initPrism();
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen pt-20 flex items-center">
      {/* Aurora Background */}
      <AuroraBackground className="absolute inset-0 z-0">
        {/* Empty children prop to satisfy the interface requirement */}
      </AuroraBackground>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <TransitionContainer 
            className="flex flex-col items-start text-left" 
            animation="fade-in-left"
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              WEX Developer Portal
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build powerful <span className="text-gradient">payment solutions</span> with our APIs
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-xl">
              Access the tools and documentation you need to integrate WEX's industry-leading payment processing technologies into your applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Get Started
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
              >
                Explore APIs
              </Button>
            </div>
          </TransitionContainer>

          <TransitionContainer 
            className="flex justify-center" 
            animation="fade-in-right" 
            delay={300}
          >
            <div className="relative glass-card rounded-2xl p-6 w-full max-w-lg border-2 border-white/10 dark:border-white/5 shadow-lg">
              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                REST APIs
              </div>
              <div className="bg-secondary/95 rounded-lg overflow-hidden shadow-lg">
                <div className="flex items-center px-4 py-2 bg-secondary">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-white/70">API Request Example</div>
                </div>
                <pre className="text-sm overflow-auto max-h-80 p-4 m-0">
                  <code className="language-javascript">
{`// Example API request
const response = await fetch(
  'https://api.wex.com/v1/payments',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ${'{token}'}',
    },
    body: JSON.stringify({
      amount: 99.95,
      currency: 'USD',
      description: 'Fleet payment',
      metadata: {
        order_id: '6735',
        customer_id: '1001'
      }
    })
  }
);

const data = await response.json();
console.log(data);`}
                  </code>
                </pre>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-3 bg-background/80 dark:bg-background/50 rounded-lg text-center shadow-sm">
                  <Code className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm font-medium">Simple Integration</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-background/80 dark:bg-background/50 rounded-lg text-center shadow-sm">
                  <Database className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm font-medium">Robust Data</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-background/80 dark:bg-background/50 rounded-lg text-center shadow-sm">
                  <Key className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm font-medium">Secure Access</span>
                </div>
              </div>
            </div>
          </TransitionContainer>
        </div>
      </div>
    </div>
  );
};

export default Hero;
