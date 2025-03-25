
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { ThemeToggle } from './ThemeToggle';

const navigationItems = [
  { name: 'APIs', href: '#apis', hasChildren: true, children: [
    { name: 'Fleet APIs', href: '#fleet-apis' },
    { name: 'Payment APIs', href: '#payment-apis' },
    { name: 'Corporate Payment APIs', href: '#corporate-payment-apis' },
  ]},
  { name: 'Documentation', href: '#documentation' },
  { name: 'Resources', href: '#resources', hasChildren: true, children: [
    { name: 'API Guides', href: '#api-guides' },
    { name: 'Code Samples', href: '#code-samples' },
    { name: 'SDKs', href: '#sdks' },
  ]},
  { name: 'Support', href: '#support' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled 
          ? 'bg-background/90 dark:bg-background/90 backdrop-blur-md shadow-sm border-b border-border/50' 
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-wex-red dark:text-wex-red">WEX</span>
              <span className="ml-2 text-lg font-medium text-foreground">Developer Portal</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="nav-link group flex items-center text-foreground hover:text-wex-red transition-colors duration-200"
                    onClick={item.hasChildren ? (e) => {
                      e.preventDefault();
                      handleDropdownToggle(item.name);
                    } : undefined}
                  >
                    {item.name}
                    {item.hasChildren && (
                      <ChevronDown 
                        className={cn(
                          "ml-1 w-4 h-4 transition-transform duration-200",
                          openDropdown === item.name ? "rotate-180" : ""
                        )} 
                      />
                    )}
                  </a>
                  {item.hasChildren && (
                    <div 
                      className={cn(
                        "absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background dark:bg-background ring-1 ring-black/5 dark:ring-white/10 transition-all duration-200 origin-top-left",
                        openDropdown === item.name ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                      )}
                    >
                      <div className="py-1">
                        {item.children?.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent-foreground transition-colors duration-200"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="secondary" size="sm">Sign In</Button>
              <Button variant="primary" size="sm">Get Started</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <div className="pt-2 pb-4 space-y-1 bg-background dark:bg-background rounded-lg shadow-lg">
            {navigationItems.map((item) => (
              <div key={item.name} className="px-4">
                <button
                  onClick={() => item.hasChildren ? handleDropdownToggle(item.name) : null}
                  className="w-full flex justify-between items-center py-2 text-base font-medium text-foreground hover:text-accent transition-colors duration-200"
                >
                  <a href={item.href}>{item.name}</a>
                  {item.hasChildren && (
                    <ChevronDown 
                      className={cn(
                        "ml-1 w-4 h-4 transition-transform duration-200",
                        openDropdown === item.name ? "rotate-180" : ""
                      )} 
                    />
                  )}
                </button>
                {item.hasChildren && (
                  <div 
                    className={cn(
                      "pl-4 mt-1 space-y-1 transition-all duration-200",
                      openDropdown === item.name ? "block" : "hidden"
                    )}
                  >
                    {item.children?.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="block py-2 text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4 flex flex-col space-y-2">
              <Button variant="secondary" fullWidth>Sign In</Button>
              <Button variant="primary" fullWidth>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
