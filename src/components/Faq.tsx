
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

interface FaqItemProps {
  question: string;
  answer: string;
}

const faqs: FaqItemProps[] = [
  {
    question: "How do I get an API key?",
    answer: "You can request an API key by registering for a developer account and submitting an application. Once approved, you'll be able to generate API keys from your developer dashboard."
  },
  {
    question: "What are the rate limits for the API?",
    answer: "Our standard tier allows 1,000 requests per minute with a burst capability of up to 50 concurrent requests. Enterprise customers have higher limits based on their plan."
  },
  {
    question: "How do I report a bug or issue?",
    answer: "You can report bugs through our developer support portal. Please include steps to reproduce, expected behavior, actual behavior, and any relevant code samples or error messages."
  },
  {
    question: "Do you offer sandbox environments for testing?",
    answer: "Yes, all developers have access to our sandbox environment for testing integration without affecting production data. API keys with a 'sandbox-' prefix automatically use the test environment."
  },
  {
    question: "What programming languages do you support?",
    answer: "We offer official SDKs for JavaScript/TypeScript, Python, Java, Ruby, PHP, and .NET. Community-maintained libraries are available for Go, Rust, and other languages."
  }
];

const FaqItem: React.FC<FaqItemProps & { isOpen: boolean; toggle: () => void }> = ({ 
  question, 
  answer, 
  isOpen, 
  toggle 
}) => {
  return (
    <div className="border-b border-border/50 last:border-b-0">
      <button 
        className="flex w-full justify-between items-center py-4 px-4 text-left font-medium"
        onClick={toggle}
      >
        <span>{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </span>
      </button>
      <div 
        className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-foreground/70 text-sm">{answer}</p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedCard className="h-full">
      <div className="p-5 border-b border-border">
        <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
      </div>
      <div>
        {faqs.map((faq, index) => (
          <FaqItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
            isOpen={openIndex === index}
            toggle={() => toggleFaq(index)}
          />
        ))}
      </div>
    </AnimatedCard>
  );
};

export default Faq;
