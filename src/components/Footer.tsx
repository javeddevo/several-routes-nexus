import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/76c67a5b-d34c-48cb-b4db-34567d45dbcb.png" 
                alt="Several Routes" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Cross-border consulting firm specializing in international trade between China, Peru, and the United States. 
              Optimizing supply chains through Free Trade Agreements and strategic warehouse placement.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>contact@severalroutes.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Lima, Peru • Miami, USA • Shanghai, China</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/publications" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Entity Setup & Taxation</li>
              <li>3PL & Logistics Setup</li>
              <li>Consolidation Warehouses</li>
              <li>Supply Chain Automation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Several Routes. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </button>
            <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Globe className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;