
import React from 'react';
import { CreditCard, ShieldCheck, BarChart, Globe, Database, Wallet, Truck, GasPump, HelpCircle } from 'lucide-react';
import ApiCard from './ApiCard';
import TransitionContainer from './TransitionContainer';

const apiCategories = [
  {
    title: 'Fleet APIs',
    description: 'APIs to manage your fleet cards, transactions, and reporting.',
    icon: Truck,
    features: ['Vehicle tracking', 'Fuel management', 'Card controls'],
    featured: true,
  },
  {
    title: 'Payment APIs',
    description: 'Process payments securely with our payment processing APIs.',
    icon: CreditCard,
    features: ['Card payments', 'ACH transfers', 'Tokenization'],
  },
  {
    title: 'Fuel APIs',
    description: 'Access real-time fuel pricing and location data.',
    icon: GasPump,
    features: ['Price forecasting', 'Location services', 'Fuel efficiency'],
  },
  {
    title: 'Corporate Payment APIs',
    description: 'Streamline your business payments with our corporate payment solutions.',
    icon: Wallet,
    features: ['Expense management', 'Virtual cards', 'Approval workflows'],
  },
  {
    title: 'Analytics APIs',
    description: 'Get insights into your payment data with our analytics APIs.',
    icon: BarChart,
    features: ['Custom reports', 'Data visualization', 'Trend analysis'],
  },
  {
    title: 'Global Commerce APIs',
    description: 'Expand your business globally with our international payment solutions.',
    icon: Globe,
    features: ['Multi-currency', 'FX rates', 'Global compliance'],
  },
];

const Features: React.FC = () => {
  return (
    <div id="apis" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
          <h5 className="text-sm font-medium text-wex-blue mb-3">POWERFUL & FLEXIBLE</h5>
          <h2 className="text-4xl font-bold mb-6">Industry-Leading APIs</h2>
          <p className="text-lg text-foreground/70">
            Build innovative payment solutions with our comprehensive suite of APIs designed for developers by developers.
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
              />
            </TransitionContainer>
          ))}
        </div>

        <div className="mt-16 p-8 glass-card rounded-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="w-16 h-16 rounded-full bg-wex-blue/10 flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-wex-blue" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-2">Need help finding the right API?</h3>
              <p className="text-foreground/70 mb-4">
                Our team can help you identify the best API solutions for your specific business needs. Contact us for a consultation.
              </p>
              <button className="text-wex-blue font-medium hover:underline transition-all duration-200">
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
