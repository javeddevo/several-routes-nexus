import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, TrendingUp, Truck, Warehouse, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Process = () => {
  const processSteps = [
    {
      step: 1,
      icon: TrendingUp,
      title: 'FTA Strategy Development',
      titleZh: 'FTA策略制定',
      description: 'Analyze your current supply chain and develop a comprehensive Free Trade Agreement strategy to maximize cost savings and efficiency.',
      details: [
        'Supply chain assessment and mapping',
        'FTA eligibility analysis',
        'Cost-benefit calculations',
        'Strategic roadmap development'
      ],
      timeline: '2-4 weeks'
    },
    {
      step: 2,
      icon: Truck,
      title: '3PL Integration',
      titleZh: '第三方物流整合',
      description: 'Establish and integrate third-party logistics partners to create a seamless transportation network across all three markets.',
      details: [
        'Logistics partner selection and vetting',
        'Transportation route optimization',
        'Customs clearance coordination',
        'Performance monitoring setup'
      ],
      timeline: '3-6 weeks'
    },
    {
      step: 3,
      icon: Warehouse,
      title: 'Warehouse Establishment',
      titleZh: '仓库建立',
      description: 'Set up consolidation warehouses in Free Trade Zones for optimal inventory management and cost reduction.',
      details: [
        'FTZ site selection and setup',
        'Inventory management system implementation',
        'Quality control processes',
        'Consolidation workflow design'
      ],
      timeline: '4-8 weeks'
    },
    {
      step: 4,
      icon: Zap,
      title: 'Process Automation',
      titleZh: '流程自动化',
      description: 'Implement advanced automation solutions to streamline operations and provide real-time visibility across your supply chain.',
      details: [
        'Workflow automation design',
        'ERP system integration',
        'Real-time tracking implementation',
        'Performance analytics dashboard'
      ],
      timeline: '6-10 weeks'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Strategic Process
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven four-step methodology to transform your supply chain and maximize 
            cost savings through strategic Free Trade Agreement utilization.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-primary/20"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-card"></div>
                
                <div className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}>
                  {/* Content */}
                  <Card className={`shadow-card hover:shadow-elegant transition-all duration-300 ${
                    index % 2 === 0 ? '' : 'lg:col-start-2'
                  }`}>
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary mb-1">
                            Step {step.step}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Timeline:</span> {step.timeline}
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          {step.step.toString().padStart(2, '0')}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Visual Element */}
                  <div className={`hidden lg:block ${
                    index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'
                  }`}>
                    <div className="p-8 text-center">
                      <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-primary rounded-full shadow-glow mb-4">
                        <step.icon className="h-16 w-16 text-primary-foreground" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Expected Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-card hover:shadow-elegant transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">25-40%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Cost Reduction</div>
              <p className="text-muted-foreground text-sm">
                Through strategic FTA utilization and optimized routing
              </p>
            </Card>
            <Card className="text-center p-8 shadow-card hover:shadow-elegant transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">15-30%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Time Savings</div>
              <p className="text-muted-foreground text-sm">
                Automated processes and streamlined operations
              </p>
            </Card>
            <Card className="text-center p-8 shadow-card hover:shadow-elegant transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">99.5%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Compliance Rate</div>
              <p className="text-muted-foreground text-sm">
                Regulatory compliance across all three markets
              </p>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-card p-12 rounded-2xl shadow-card">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Start Your Transformation Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to optimize your supply chain? Let's discuss how our proven process 
            can transform your international trade operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="hero" asChild>
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="professional" asChild>
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;