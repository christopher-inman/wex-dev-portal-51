
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { ThemeToggle } from './ThemeToggle';

const navigationItems = [
  { name: 'APIs', href: '/apis' },
  { name: 'Documentation', href: '/documentation' },
  { name: 'Resources', href: '/resources' },
  { name: 'Support', href: '/support' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-wex-red dark:text-wex-red">WEX</span>
              <span className="ml-2 text-lg font-medium text-foreground">Developer Portal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="nav-link group flex items-center text-foreground hover:text-wex-red transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="secondary" size="sm" to="/sign-in">Sign In</Button>
              <Button variant="primary" size="sm" to="/get-started">Get Started</Button>
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
                <Link
                  to={item.href}
                  className="w-full flex justify-between items-center py-2 text-base font-medium text-foreground hover:text-accent transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="px-4 pt-4 flex flex-col space-y-2">
              <Button variant="secondary" fullWidth to="/sign-in">Sign In</Button>
              <Button variant="primary" fullWidth to="/get-started">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
