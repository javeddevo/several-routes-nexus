import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Truck, 
  Warehouse, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  FileText,
  Shield,
  Globe,
  BarChart3,
  Settings,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Entity Setup, Taxation, and Regulatory Compliance',
      description: 'Complete business establishment and compliance solutions across all three markets.',
      features: [
        'Business entity registration in Peru, China, and USA',
        'Tax optimization strategies using FTA benefits',
        'Regulatory compliance management',
        'Legal structure consulting',
        'Ongoing compliance monitoring'
      ],
      benefits: ['Reduced tax burden', 'Legal compliance assurance', 'Streamlined operations']
    },
    {
      icon: Truck,
      title: '3PL and Logistics Setup',
      description: 'Strategic third-party logistics solutions for seamless cross-border operations.',
      features: [
        'Carrier network establishment',
        'Logistics partner vetting and selection',
        'Transportation route optimization',
        'Customs brokerage coordination',
        'Performance monitoring systems'
      ],
      benefits: ['Faster transit times', 'Lower shipping costs', 'Reduced complexity']
    },
    {
      icon: Warehouse,
      title: 'Consolidation Warehouse Setup',
      description: 'Free Trade Zone warehouses for optimal consolidation and manufacturing.',
      features: [
        'FTZ warehouse site selection',
        'Consolidation facility design',
        'Inventory management systems',
        'Quality control processes',
        'Manufacturing coordination'
      ],
      benefits: ['Duty deferral', 'Reduced inventory costs', 'Enhanced quality control']
    },
    {
      icon: Zap,
      title: 'Supply Chain Process Automation',
      description: 'Advanced automation solutions to streamline your entire supply chain.',
      features: [
        'Workflow automation design',
        'ERP system integration',
        'Real-time tracking implementation',
        'Document processing automation',
        'Performance analytics setup'
      ],
      benefits: ['Increased efficiency', 'Error reduction', 'Real-time visibility']
    }
  ];

  const additionalServices = [
    { icon: FileText, title: 'Documentation Management', description: 'Streamlined import/export documentation' },
    { icon: Shield, title: 'Risk Mitigation', description: 'Comprehensive risk assessment and management' },
    { icon: Globe, title: 'Market Entry Strategy', description: 'Strategic market entry planning and execution' },
    { icon: BarChart3, title: 'Cost Analysis', description: 'Detailed cost-benefit analysis and optimization' },
    { icon: Settings, title: 'Process Optimization', description: 'Continuous improvement and efficiency gains' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock operational support' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cross-border consulting solutions designed to optimize your international 
            supply chain operations between China, Peru, and the United States.
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-16 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="bg-gradient-card">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                    <p className="text-muted-foreground mt-1">{service.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <Settings className="h-5 w-5 mr-2 text-primary" />
                      What We Provide
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                      Key Benefits
                    </h4>
                    <div className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                          <span className="text-foreground font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card p-12 rounded-2xl shadow-card">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you optimize your international trade operations and maximize 
            cost savings through strategic Free Trade Agreement utilization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="hero" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="professional" asChild>
              <Link to="/process">
                View Our Process
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;