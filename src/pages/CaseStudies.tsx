import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionContainer from '@/components/TransitionContainer';

const CaseStudies: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      
      <div className="pt-24 min-h-screen">
        <div className="container-custom">
          <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-sm font-medium text-wex-blue mb-3">CASE STUDIES</h5>
            <h1 className="text-4xl font-bold mb-6">Success Stories</h1>
            <p className="text-lg text-foreground/70">
              Learn how other businesses have successfully implemented WEX payment solutions.
            </p>
          </TransitionContainer>
          
          {/* Add case studies content here */}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CaseStudies;