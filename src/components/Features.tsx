
import React from 'react';
import { CreditCard, ShieldCheck, BarChart, Globe, Database, Wallet, Truck, Fuel, HelpCircle, Heart, MedicalCross, Award } from 'lucide-react';
import ApiCard from './ApiCard';
import TransitionContainer from './TransitionContainer';

const apiCategories = [
  {
    title: 'Fleet APIs',
    description: 'APIs to manage your fleet cards, transactions, and reporting.',
    icon: Truck,
    features: ['Vehicle tracking', 'Fuel management', 'Card controls'],
    featured: false,
    iconColor: '#F7901E', // WEX orange for fleet
  },
  {
    title: 'Payment APIs',
    description: 'Process payments securely with our payment processing APIs.',
    icon: CreditCard,
    features: ['Card payments', 'ACH transfers', 'Tokenization'],
    iconColor: '#55a9da', // WEX light blue for payments
  },
  {
    title: 'Benefits APIs',
    description: 'Manage and integrate employee health and wellness benefits.',
    icon: Heart,
    features: ['Healthcare claims', 'HSA/FSA management', 'Benefits enrollment'],
    featured: true,
    iconColor: '#c8102e', // WEX red for benefits
  },
  {
    title: 'Fuel APIs',
    description: 'Access real-time fuel pricing and location data.',
    icon: Fuel,
    features: ['Price forecasting', 'Location services', 'Fuel efficiency'],
    iconColor: '#F7901E', // WEX orange for fuel
  },
  {
    title: 'Corporate Payment APIs',
    description: 'Streamline your business payments with our corporate payment solutions.',
    icon: Wallet,
    features: ['Expense management', 'Virtual cards', 'Approval workflows'],
    iconColor: '#55a9da', // WEX light blue for corporate payments
  },
  {
    title: 'Analytics APIs',
    description: 'Get insights into your payment data with our analytics APIs.',
    icon: BarChart,
    features: ['Custom reports', 'Data visualization', 'Trend analysis'],
    iconColor: '#253746', // WEX blue for analytics
  },
];

const Features: React.FC = () => {
  return (
    <div id="apis" className="section-padding bg-muted/30 dark:bg-muted/10">
      <div className="container-custom">
        <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
          <h5 className="text-sm font-medium text-primary mb-3">POWERFUL & FLEXIBLE</h5>
          <h2 className="text-4xl font-bold mb-6">Industry-Leading APIs</h2>
          <p className="text-lg text-foreground/70">
            Build innovative payment, fleet, and benefits solutions with our comprehensive suite of APIs designed for developers by developers.
          </p>
        </TransitionContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apiCategories.map((api, index) => (
            <TransitionContainer key={api.title} delay={100 * (index % 3)}>
              <ApiCard
                title={api.title}
                description={api.description}
                icon={api.icon}
                features={api.features}
                variant={api.featured ? 'featured' : 'default'}
                iconColor={api.iconColor}
              />
            </TransitionContainer>
          ))}
        </div>

        <div className="mt-16 p-8 glass-card rounded-2xl border border-border shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="w-16 h-16 rounded-full bg-wex-orange/20 flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-wex-orange" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-2">Need help finding the right API?</h3>
              <p className="text-foreground/70 mb-4">
                Our team can help you identify the best API solutions for your specific business needs. Contact us for a consultation.
              </p>
              <button className="text-wex-lightBlue font-medium hover:underline transition-all duration-200">
                Schedule a consultation →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
