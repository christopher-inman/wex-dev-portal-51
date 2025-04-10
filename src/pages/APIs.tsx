
import React from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApiCard from '@/components/ApiCard';
import TransitionContainer from '@/components/TransitionContainer';
import { CreditCard, ShieldCheck, BarChart, Globe, Database, Wallet, Truck, Fuel, Heart } from 'lucide-react';

const apiCategoriesData = {
  fleet: [
    {
      title: 'Vehicle Tracking API',
      description: 'Real-time GPS tracking and telemetry data for your entire fleet.',
      icon: Truck,
      features: ['Live location data', 'Route history', 'Geofencing'],
      iconColor: '#F7901E',
    },
    {
      title: 'Fuel Management API',
      description: 'Monitor and optimize fuel consumption across your fleet.',
      icon: Fuel,
      features: ['Consumption analytics', 'Fuel card integration', 'Expense tracking'],
      iconColor: '#F7901E',
    },
    {
      title: 'Card Control API',
      description: 'Manage your fleet cards, set limits, and control spending.',
      icon: CreditCard,
      features: ['Spending limits', 'Card activation', 'Transaction alerts'],
      iconColor: '#F7901E',
    },
  ],
  payment: [
    {
      title: 'Card Payment API',
      description: 'Process credit and debit card payments securely.',
      icon: CreditCard,
      features: ['Card tokenization', 'Fraud detection', '3D Secure'],
      iconColor: '#55a9da',
    },
    {
      title: 'ACH Transfer API',
      description: 'Facilitate direct bank transfers between accounts.',
      icon: Database,
      features: ['Same-day ACH', 'Batch processing', 'Return handling'],
      iconColor: '#55a9da',
    },
    {
      title: 'Tokenization API',
      description: 'Securely store payment information with tokenization.',
      icon: ShieldCheck,
      features: ['PCI compliance', 'Token management', 'Secure vault'],
      iconColor: '#55a9da',
    },
  ],
  benefits: [
    {
      title: 'Healthcare Claims API',
      description: 'Process and manage healthcare claims for employee benefits.',
      icon: Heart,
      features: ['EOB processing', 'Claim status tracking', 'Provider network integration'],
      iconColor: '#c8102e',
    },
    {
      title: 'HSA/FSA Management API',
      description: 'Manage health savings and flexible spending accounts.',
      icon: Wallet,
      features: ['Account balance', 'Eligible expenses', 'Transaction history'],
      iconColor: '#c8102e',
    },
    {
      title: 'Benefits Enrollment API',
      description: 'Streamline the benefits enrollment process for employees.',
      icon: BarChart,
      features: ['Plan selection', 'Dependent management', 'Coverage updates'],
      iconColor: '#c8102e',
    },
  ],
};

const APIs: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>APIs | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <div className="container-custom">
          <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-sm font-medium text-primary mb-3">API SOLUTIONS</h5>
            <h1 className="text-4xl font-bold mb-6">Powerful APIs for Your Business</h1>
            <p className="text-lg text-foreground/70">
              Explore our comprehensive suite of APIs designed to help you build innovative payment, fleet, and benefits management solutions.
            </p>
          </TransitionContainer>

          <Tabs defaultValue="fleet" className="w-full mb-16">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="fleet">Fleet APIs</TabsTrigger>
              <TabsTrigger value="payment">Payment APIs</TabsTrigger>
              <TabsTrigger value="benefits">Benefits APIs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="fleet">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {apiCategoriesData.fleet.map((api, index) => (
                  <TransitionContainer key={api.title} delay={100 * (index % 3)}>
                    <ApiCard
                      title={api.title}
                      description={api.description}
                      icon={api.icon}
                      features={api.features}
                      variant={index === 0 ? 'featured' : 'default'}
                      iconColor={api.iconColor}
                    />
                  </TransitionContainer>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="payment">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {apiCategoriesData.payment.map((api, index) => (
                  <TransitionContainer key={api.title} delay={100 * (index % 3)}>
                    <ApiCard
                      title={api.title}
                      description={api.description}
                      icon={api.icon}
                      features={api.features}
                      variant={index === 0 ? 'featured' : 'default'}
                      iconColor={api.iconColor}
                    />
                  </TransitionContainer>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="benefits">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {apiCategoriesData.benefits.map((api, index) => (
                  <TransitionContainer key={api.title} delay={100 * (index % 3)}>
                    <ApiCard
                      title={api.title}
                      description={api.description}
                      icon={api.icon}
                      features={api.features}
                      variant={index === 0 ? 'featured' : 'default'}
                      iconColor={api.iconColor}
                    />
                  </TransitionContainer>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="glass-card rounded-2xl border border-border shadow-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">API Integration Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-wex-orange/20 flex items-center justify-center mb-4">
                    <span className="text-wex-orange font-bold text-lg">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Request Access</h3>
                  <p className="text-sm text-foreground/70">Submit your application for API access credentials and review documentation.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-wex-lightBlue/20 flex items-center justify-center mb-4">
                    <span className="text-wex-lightBlue font-bold text-lg">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Develop & Test</h3>
                  <p className="text-sm text-foreground/70">Build your solution using our sandbox environment and developer tools.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-wex-red/20 flex items-center justify-center mb-4">
                    <span className="text-wex-red font-bold text-lg">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Go Live</h3>
                  <p className="text-sm text-foreground/70">Complete certification and launch your integration in production.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default APIs;
