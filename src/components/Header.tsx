import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', nameZh: '首页' },
    { name: 'Services', href: '/services', nameZh: '服务' },
    { name: 'Process', href: '/process', nameZh: '流程' },
    { name: 'Publications', href: '/publications', nameZh: '出版物' },
    { name: 'Contact', href: '/contact', nameZh: '联系我们' },
  ];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/76c67a5b-d34c-48cb-b4db-34567d45dbcb.png" 
              alt="Several Routes" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  isActivePath(item.href) 
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
              >
                {language === 'en' ? item.name : item.nameZh}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full",
                  isActivePath(item.href) && "w-full"
                )}></span>
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs">{language === 'en' ? 'EN' : '中文'}</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                    isActivePath(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'en' ? item.name : item.nameZh}
                </Link>
              ))}
              <div className="border-t border-border pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="w-full justify-start"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'Switch to 中文' : 'Switch to English'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;