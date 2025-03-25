
import React from 'react';
import { Github, Twitter, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

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
              <span className="text-2xl font-bold text-wex-blue">WEX</span>
              <span className="ml-2 text-lg font-medium text-foreground/90">Developer Portal</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Access the tools and documentation you need to integrate WEX's industry-leading payment processing technologies into your applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/60 hover:bg-wex-blue hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
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
