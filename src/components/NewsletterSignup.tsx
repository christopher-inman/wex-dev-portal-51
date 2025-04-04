
import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      toast({
        title: "Success!",
        description: "You've been subscribed to the WEX Developer newsletter.",
      });
    }, 1000);
  };

  return (
    <div className="bg-wex-blue/10 dark:bg-wex-blue/5 rounded-xl p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-wex-blue/20 flex items-center justify-center mr-3">
          <Mail className="w-5 h-5 text-wex-blue" />
        </div>
        <h3 className="text-xl font-bold">Developer Newsletter</h3>
      </div>
      <p className="text-foreground/70 mb-4">
        Stay updated with the latest API changes, new features, and best practices.
      </p>
      
      {!isSubscribed ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-wex-blue/40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-wex-blue text-white font-medium py-2 rounded-lg hover:bg-wex-blue/90 focus:outline-none focus:ring-2 focus:ring-wex-blue/40 flex items-center justify-center transition-all"
          >
            {isSubmitting ? (
              <span>Subscribing...</span>
            ) : (
              <span>Subscribe</span>
            )}
          </button>
        </form>
      ) : (
        <div className="flex items-center p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-700 dark:text-green-400">
          <Check className="w-5 h-5 mr-2 text-green-500" />
          <span>Thank you for subscribing!</span>
        </div>
      )}
    </div>
  );
};

export default NewsletterSignup;
