import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionContainer from '@/components/TransitionContainer';
import { Code, Download, Github, BookOpen } from 'lucide-react';

const SDKLibraries: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SDK Libraries | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      
      <div className="pt-24 min-h-screen">
        <div className="container-custom">
          <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-sm font-medium text-wex-blue mb-3">SDK LIBRARIES</h5>
            <h1 className="text-4xl font-bold mb-6">Official WEX SDKs</h1>
            <p className="text-lg text-foreground/70">
              Get started quickly with our official client libraries and SDKs in multiple programming languages.
            </p>
          </TransitionContainer>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* JavaScript SDK */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-wex-orange/20 flex items-center justify-center">
                  <Code className="w-6 h-6 text-wex-orange" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">JavaScript</h3>
                  <p className="text-sm text-foreground/70">Node.js & Browser</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <code className="text-sm">npm install @wex/sdk</code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/70">v2.1.0</span>
                  <a href="https://github.com/wex/sdk-js" className="text-wex-red hover:underline text-sm">View on GitHub</a>
                </div>
              </div>
            </div>

            {/* Python SDK */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-wex-lightBlue/20 flex items-center justify-center">
                  <Code className="w-6 h-6 text-wex-lightBlue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Python</h3>
                  <p className="text-sm text-foreground/70">Python 3.7+</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <code className="text-sm">pip install wex-sdk</code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/70">v1.8.2</span>
                  <a href="https://github.com/wex/sdk-python" className="text-wex-red hover:underline text-sm">View on GitHub</a>
                </div>
              </div>
            </div>

            {/* Java SDK */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-wex-red/20 flex items-center justify-center">
                  <Code className="w-6 h-6 text-wex-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Java</h3>
                  <p className="text-sm text-foreground/70">Java 11+</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <code className="text-sm">implementation 'com.wex:sdk:1.5.0'</code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/70">v1.5.0</span>
                  <a href="https://github.com/wex/sdk-java" className="text-wex-red hover:underline text-sm">View on GitHub</a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-8 mb-16">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-wex-blue/20 flex items-center justify-center flex-shrink-0">
                  <Github className="w-6 h-6 text-wex-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Open Source SDKs</h3>
                  <p className="text-foreground/70 mb-4">
                    All our SDKs are open source and available on GitHub. We welcome contributions from the community.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="text-wex-red hover:underline">View all repositories →</a>
                    <a href="#" className="text-wex-red hover:underline">Contribution guidelines →</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-wex-orange/20 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-wex-orange" />
                </div>
                <h3 className="text-xl font-bold mb-2">SDK Documentation</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Detailed documentation for all our SDKs, including guides, examples, and API references.
                </p>
                <a href="#" className="text-wex-red hover:underline">View documentation →</a>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-wex-lightBlue/20 flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-wex-lightBlue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sample Projects</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Download complete sample projects showcasing SDK integration in real-world scenarios.
                </p>
                <a href="#" className="text-wex-red hover:underline">Browse samples →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SDKLibraries;