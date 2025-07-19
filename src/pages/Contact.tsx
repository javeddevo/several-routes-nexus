import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  Linkedin,
  Globe,
  User,
  Building2,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const offices = [
    {
      city: 'Lima, Peru',
      address: 'Av. José Larco 1232, Miraflores',
      phone: '+51 1 234-5678',
      email: 'lima@severalroutes.com',
      timezone: 'GMT-5'
    },
    {
      city: 'Miami, USA',
      address: '1450 Brickell Avenue, Suite 1900',
      phone: '+1 (305) 123-4567',
      email: 'miami@severalroutes.com',
      timezone: 'GMT-5'
    },
    {
      city: 'Shanghai, China',
      address: '上海市浦东新区陆家嘴环路1000号',
      phone: '+86 21 1234-5678',
      email: 'shanghai@severalroutes.com',
      timezone: 'GMT+8'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to optimize your supply chain? Contact us for a personalized consultation 
            on how our cross-border solutions can transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Send className="h-6 w-6 mr-2 text-primary" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-foreground">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us about your supply chain challenges and how we can help..."
                    />
                  </div>

                  <Button type="submit" size="lg" variant="hero" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for your inquiry. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Jesse Miller Bio & Contact Info */}
          <div className="space-y-8">
            {/* Jesse Miller Profile */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <User className="h-6 w-6 mr-2 text-primary" />
                  Meet Your Consultant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    JM
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Jesse Miller
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      Founder & Lead Consultant
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      With over 15 years of experience in international trade and supply chain optimization, 
                      Jesse specializes in leveraging Free Trade Agreements to maximize cost savings and 
                      operational efficiency for cross-border businesses.
                    </p>
                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Building2 className="h-6 w-6 mr-2 text-primary" />
                  Our Offices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-foreground mb-2">{office.city}</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>Business Hours: 9:00 AM - 6:00 PM ({office.timezone})</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-card p-12 rounded-2xl shadow-card">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Schedule a Free Consultation
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to discuss your supply chain optimization needs? Book a free 30-minute 
            consultation to explore how Several Routes can help transform your business.
          </p>
          <Button size="xl" variant="hero">
            <Clock className="mr-2 h-5 w-5" />
            Book Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;