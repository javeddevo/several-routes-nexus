import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Calendar, Clock, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Publications = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock publications data (will be replaced with Notion API)
  // TODO: Replace with Notion API integration
  const publications = [
    {
      id: 1,
      title: 'Maximizing FTA Benefits: A Comprehensive Guide to Peru-US Trade Agreements',
      excerpt: 'Learn how to leverage Peru\'s Free Trade Agreements with the United States to reduce tariffs and optimize your supply chain costs.',
      category: 'Trade Agreements',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Free Trade Zone Advantages: Setting Up Consolidation Warehouses in Peru',
      excerpt: 'Discover the strategic advantages of establishing consolidation warehouses within Peru\'s Free Trade Zones for international operations.',
      category: 'Warehousing',
      publishDate: '2024-01-10',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Cross-Border Logistics: Optimizing Routes Between China, Peru, and the US',
      excerpt: 'A detailed analysis of transportation routes and logistics strategies for efficient cross-border operations.',
      category: 'Logistics',
      publishDate: '2024-01-05',
      readTime: '10 min read',
      featured: true
    },
    {
      id: 4,
      title: 'Regulatory Compliance in Multi-Jurisdictional Supply Chains',
      excerpt: 'Navigate the complex regulatory landscape when operating across China, Peru, and United States markets.',
      category: 'Compliance',
      publishDate: '2023-12-28',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Supply Chain Automation: Technologies Transforming International Trade',
      excerpt: 'Explore cutting-edge automation technologies that are revolutionizing global supply chain management.',
      category: 'Technology',
      publishDate: '2023-12-20',
      readTime: '9 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Case Study: 40% Cost Reduction Through Strategic FTA Implementation',
      excerpt: 'Real-world case study showing how one client achieved significant cost savings through our strategic FTA implementation.',
      category: 'Case Study',
      publishDate: '2023-12-15',
      readTime: '12 min read',
      featured: true
    }
  ];

  const categories = ['All', 'Trade Agreements', 'Warehousing', 'Logistics', 'Compliance', 'Technology', 'Case Study'];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleReadMore = (publication: any) => {
    // TODO: Navigate to full article or open modal
    // For now, we'll open in a new tab (can be replaced with routing)
    console.log('Opening publication:', publication.title);
    // You can add navigation logic here when you have full articles
  };

  const filteredPublications = selectedCategory === 'All' 
    ? publications 
    : publications.filter(pub => pub.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Publications & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with our latest insights on cross-border trade, supply chain optimization, 
            and international business strategies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Publications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <BookOpen className="h-6 w-6 mr-2 text-primary" />
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPublications.filter(pub => pub.featured).map((publication) => (
              <Card key={publication.id} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {publication.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(publication.publishDate)}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {publication.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {publication.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {publication.readTime}
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="group-hover:text-primary"
                      onClick={() => handleReadMore(publication)}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Publications */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            All Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map((publication) => (
              <Card 
                key={publication.id} 
                className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-border/50 cursor-pointer"
                onClick={() => handleReadMore(publication)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {publication.category}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {publication.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {publication.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(publication.publishDate)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {publication.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center bg-gradient-card p-12 rounded-2xl shadow-card">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on cross-border trade, 
            supply chain optimization, and international business strategies.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" variant="hero">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;