import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionContainer from '@/components/TransitionContainer';

const Community: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Community | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      
      <div className="pt-24 min-h-screen">
        <div className="container-custom">
          <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-sm font-medium text-wex-blue mb-3">COMMUNITY</h5>
            <h1 className="text-4xl font-bold mb-6">Developer Community</h1>
            <p className="text-lg text-foreground/70">
              Connect with other developers, share knowledge, and get help with your integration.
            </p>
          </TransitionContainer>
          
          {/* Add community content here */}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Community;