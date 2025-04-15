import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionContainer from '@/components/TransitionContainer';

const BlogArticles: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog Articles | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      
      <div className="pt-24 min-h-screen">
        <div className="container-custom">
          <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-sm font-medium text-wex-blue mb-3">BLOG</h5>
            <h1 className="text-4xl font-bold mb-6">Technical Articles</h1>
            <p className="text-lg text-foreground/70">
              Read technical articles, product updates, and best practices from our engineering team.
            </p>
          </TransitionContainer>
          
          {/* Add blog articles content here */}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default BlogArticles;