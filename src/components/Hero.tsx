
import React, { useEffect } from 'react';
import Button from './Button';
import { ArrowRight, Code, Database, Key } from 'lucide-react';
import TransitionContainer from './TransitionContainer';
import { initPrism } from '@/utils/prismHighlight';

const Hero: React.FC = () => {
  useEffect(() => {
    // Initialize Prism for syntax highlighting
    initPrism();
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen pt-20 flex items-center bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#c8102e]/5"></div>
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#253746]/5"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-[#c8102e]/5"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#253746]/5"></div>
        
        {/* Accent lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8102e]/20 to-transparent"></div>
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#253746]/20 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <TransitionContainer 
            className="flex flex-col items-start text-left" 
            animation="fade-in-left"
          >
            <div className="inline-block bg-[#c8102e]/10 text-[#c8102e] px-4 py-1 rounded-full text-sm font-medium mb-4">
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
            <div className="relative glass-card rounded-2xl p-6 w-full max-w-lg border-2 border-white shadow-lg">
              <div className="absolute -top-2 -right-2 bg-[#c8102e] text-white text-xs px-3 py-1 rounded-full font-medium">
                REST APIs
              </div>
              <div className="bg-[#253746]/95 rounded-lg overflow-hidden shadow-lg">
                <div className="flex items-center px-4 py-2 bg-[#253746]">
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
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg text-center shadow-sm">
                  <Code className="w-6 h-6 text-[#c8102e] mb-2" />
                  <span className="text-sm font-medium">Simple Integration</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg text-center shadow-sm">
                  <Database className="w-6 h-6 text-[#c8102e] mb-2" />
                  <span className="text-sm font-medium">Robust Data</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg text-center shadow-sm">
                  <Key className="w-6 h-6 text-[#c8102e] mb-2" />
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
