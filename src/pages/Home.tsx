import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Building2, Truck, Warehouse, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: 'Entity Setup & Taxation',
      titleZh: '实体设立与税务',
      description: 'Complete business entity setup and regulatory compliance across China, Peru, and the United States.',
      descriptionZh: '在中国、秘鲁和美国建立完整的商业实体设立和监管合规服务。'
    },
    {
      icon: Truck,
      title: '3PL & Logistics Setup',
      titleZh: '第三方物流设立',
      description: 'Strategic third-party logistics solutions for efficient cross-border operations.',
      descriptionZh: '为高效跨境运营提供战略性第三方物流解决方案。'
    },
    {
      icon: Warehouse,
      title: 'Consolidation Warehouses',
      titleZh: '合并仓储',
      description: 'Free Trade Zone warehouses for optimal consolidation and cost reduction.',
      descriptionZh: '在自贸区设立仓库，实现最优整合和成本降低。'
    },
    {
      icon: Zap,
      title: 'Supply Chain Automation',
      titleZh: '供应链自动化',
      description: 'Advanced automation solutions to streamline your entire supply chain process.',
      descriptionZh: '先进的自动化解决方案，简化您的整个供应链流程。'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Cross-Border Trade Solutions
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
              Optimizing international supply chains between China, Peru, and the United States 
              through strategic Free Trade Agreement utilization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="xl" variant="secondary" asChild>
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="professional" asChild>
                <Link to="/contact">
                  Get Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive consulting solutions designed to maximize efficiency and minimize costs 
              in your international trade operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0 bg-gradient-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="hero" asChild>
              <Link to="/services">
                Learn More About Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose Several Routes?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Strategic FTA Utilization:</strong> Maximize cost savings through Peru's comprehensive Free Trade Agreements
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">End-to-End Solutions:</strong> From entity setup to supply chain automation, we handle every aspect
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Tri-Market Expertise:</strong> Deep knowledge of China, Peru, and US markets and regulations
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" variant="default" asChild>
                  <Link to="/process">
                    See Our Process
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Ready to Optimize Your Supply Chain?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get a personalized consultation to discover how our cross-border solutions 
                  can reduce your costs and improve efficiency.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;