import React from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionContainer from '@/components/TransitionContainer';
import { Code, Copy, Check, FileText, Terminal, Wrench, BookOpen } from 'lucide-react';

const CodeSamples: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Code Samples | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      
      <div className="pt-24 min-h-screen">
        <div className="container-custom">
          <TransitionContainer className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-sm font-medium text-wex-blue mb-3">CODE SAMPLES</h5>
            <h1 className="text-4xl font-bold mb-6">Ready-to-Use Examples</h1>
            <p className="text-lg text-foreground/70">
              Explore working code examples demonstrating common integration patterns and best practices.
            </p>
          </TransitionContainer>

          <div className="mb-16">
            <Tabs defaultValue="payment" className="w-full">
              <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-3 mb-8">
                <TabsTrigger value="payment">Payment Processing</TabsTrigger>
                <TabsTrigger value="fleet">Fleet Management</TabsTrigger>
                <TabsTrigger value="benefits">Benefits Integration</TabsTrigger>
              </TabsList>
              
              <TabsContent value="payment">
                <div className="max-w-4xl mx-auto">
                  <div className="glass-card rounded-xl p-6 mb-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-wex-red/20 flex items-center justify-center flex-shrink-0">
                        <Terminal className="w-5 h-5 text-wex-red" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Process a Payment</h3>
                        <p className="text-foreground/70">
                          Example of processing a payment using the WEX Payments API.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="relative">
                        <div className="absolute right-2 top-2">
                          <button
                            onClick={() => handleCopy(paymentCode, 1)}
                            className="p-2 hover:bg-foreground/5 rounded-md transition-colors"
                          >
                            {copiedIndex === 1 ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-foreground/60" />
                            )}
                          </button>
                        </div>
                        <pre className="language-javascript bg-muted/30 rounded-lg p-4 overflow-x-auto">
                          <code>{`const payment = await wex.payments.create({
  amount: 1000, // Amount in cents
  currency: 'USD',
  payment_method: {
    type: 'card',
    card: {
      number: '4242424242424242',
      exp_month: 12,
      exp_year: 2024,
      cvc: '123'
    }
  },
  description: 'Test payment',
  metadata: {
    order_id: '12345'
  }
});

console.log(payment.id);
console.log(payment.status);`}</code>
                        </pre>
                      </div>

                      <div className="bg-muted/10 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Key Points</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-wex-red"></span>
                            Amounts are in cents to avoid floating-point issues
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-wex-red"></span>
                            Always handle errors appropriately
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-wex-red"></span>
                            Use test card numbers in sandbox environment
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-card rounded-xl p-6">
                      <div className="w-12 h-12 rounded-lg bg-wex-orange/20 flex items-center justify-center mb-4">
                        <Wrench className="w-6 h-6 text-wex-orange" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">More Examples</h3>
                      <ul className="space-y-3 mb-4">
                        <li>
                          <a href="#" className="text-wex-red hover:underline">Refund a payment</a>
                        </li>
                        <li>
                          <a href="#" className="text-wex-red hover:underline">Handle webhooks</a>
                        </li>
                        <li>
                          <a href="#" className="text-wex-red hover:underline">Recurring payments</a>
                        </li>
                      </ul>
                    </div>

                    <div className="glass-card rounded-xl p-6">
                      <div className="w-12 h-12 rounded-lg bg-wex-lightBlue/20 flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6 text-wex-lightBlue" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Resources</h3>
                      <ul className="space-y-3 mb-4">
                        <li>
                          <a href="#" className="text-wex-red hover:underline">API Reference</a>
                        </li>
                        <li>
                          <a href="#" className="text-wex-red hover:underline">Testing Guide</a>
                        </li>
                        <li>
                          <a href="#" className="text-wex-red hover:underline">Error Handling</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Add similar content for fleet and benefits tabs */}
            </Tabs>
          </div>

          <div className="glass-card rounded-2xl border border-border shadow-lg p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="w-16 h-16 rounded-full bg-wex-red/20 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-wex-red" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">Need a custom example?</h3>
                <p className="text-foreground/70 mb-4">
                  Our developer support team can help you with custom integration examples for your specific use case.
                </p>
                <a href="/support" className="text-wex-red hover:underline">
                  Contact developer support →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CodeSamples;