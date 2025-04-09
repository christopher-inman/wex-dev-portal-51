
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Fleet Solutions', href: '#' },
      { name: 'Corporate Payments', href: '#' },
      { name: 'Benefits Solutions', href: '#' },
      { name: 'Travel Solutions', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { name: 'Documentation', href: '#documentation' },
      { name: 'API Reference', href: '#' },
      { name: 'SDKs', href: '#' },
      { name: 'Status Page', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'Support', href: '#support' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About WEX', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/cac1cddb-1b5c-4a5c-bba1-c0aa49e52692.png" 
                alt="WEX" 
                className="h-7" 
              />
              <span className="ml-2 text-lg font-medium text-foreground/90">Developer Portal</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Access the tools and documentation you need to integrate WEX's industry-leading payment processing technologies into your applications.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-foreground mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground/60 hover:text-wex-blue transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <p className="text-foreground/60 text-sm">
                &copy; {new Date().getFullYear()} WEX Inc. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-2 md:mt-0 md:ml-8">
                <a href="#" className="text-foreground/60 hover:text-wex-blue text-sm transition-colors duration-200">
                  Terms
                </a>
                <a href="#" className="text-foreground/60 hover:text-wex-blue text-sm transition-colors duration-200">
                  Privacy
                </a>
                <a href="#" className="text-foreground/60 hover:text-wex-blue text-sm transition-colors duration-200">
                  Cookies
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="flex items-center text-foreground/60 hover:text-wex-blue text-sm transition-colors duration-200">
                <Mail className="w-4 h-4 mr-1" />
                <span>developers@wex.com</span>
              </a>
              <a href="#" className="flex items-center text-foreground/60 hover:text-wex-blue text-sm transition-colors duration-200">
                <Phone className="w-4 h-4 mr-1" />
                <span>+1 (800) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
