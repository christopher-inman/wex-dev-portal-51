import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionContainer from '@/components/TransitionContainer';

const DownloadableAssets: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Downloadable Assets | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      
      <div className="pt-24 min-h-screen">
        <div className="container-custom">
          <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-sm font-medium text-wex-blue mb-3">ASSETS</h5>
            <h1 className="text-4xl font-bold mb-6">Developer Resources</h1>
            <p className="text-lg text-foreground/70">
              Download logos, brand assets, and design resources for your integration.
            </p>
          </TransitionContainer>
          
          {/* Add downloadable assets content here */}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default DownloadableAssets;