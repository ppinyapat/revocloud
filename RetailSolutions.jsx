
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  Users,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Target,
  BarChart3,
  Brain,
  Store
} from "lucide-react";

export default function RetailSolutions() {
  const retailSolutions = [
    {
      icon: Package,
      title: "Supply Chain Intelligence",
      subtitle: "AI-Powered Inventory Optimization",
      description: "Autonomous replenishment, demand forecasting, and supply chain optimization for retail operations",
      features: [
        "Predictive demand forecasting",
        "Automated reorder points",
        "Multi-location inventory balancing",
        "Supplier performance analytics"
      ],
      results: ["65% reduction in stockouts", "20-30% inventory cost savings", "17% lower carrying costs"],
      color: "from-blue-600 to-cyan-600",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
    },
    {
      icon: TrendingUp,
      title: "Dynamic Pricing Engine",
      subtitle: "Real-time Price Optimization",
      description: "AI-driven pricing strategies that maximize margin while staying competitive in the market",
      features: [
        "Competitive price monitoring",
        "Demand-based pricing",
        "Promotional optimization",
        "Market elasticity analysis"
      ],
      results: ["$14M annual margin increase", "15% revenue uplift", "Automated A/B testing"],
      color: "from-green-600 to-teal-600",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      icon: Users,
      title: "Customer Intelligence Platform",
      subtitle: "Personalization at Scale",
      description: "360-degree customer insights driving personalized experiences and loyalty programs",
      features: [
        "Customer lifetime value prediction",
        "Churn prevention alerts",
        "Personalized recommendations",
        "Omnichannel journey mapping"
      ],
      results: ["40% higher campaign ROI", "25% increase in customer retention", "3x engagement rates"],
      color: "from-purple-600 to-pink-600",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      icon: Store,
      title: "Store of the Future [AI]",
      subtitle: "Intelligent Store Management",
      description: "Optimize store performance with AI-powered workforce, layout, and operations management",
      features: [
        "Staff scheduling optimization",
        "Planogram recommendations",
        "Loss prevention analytics",
        "Energy consumption optimization"
      ],
      results: ["15% operational cost reduction", "30% improvement in staff productivity", "20% energy savings"],
      color: "from-orange-600 to-red-600",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
    }
  ];

  const industryFocus = [
    {
      icon: ShoppingCart,
      title: "E-commerce & Online Retail",
      description: "AI solutions for digital-first retailers",
      capabilities: ["Product recommendation engines", "Search optimization", "Conversion rate optimization", "Customer service automation"]
    },
    {
      icon: Store,
      title: "Brick & Mortar Retail",
      description: "Traditional retail transformation with AI",
      capabilities: ["In-store analytics", "Queue management", "Inventory visibility", "Staff optimization"]
    },
    {
      icon: Package,
      title: "FMCG & Consumer Goods",
      description: "Supply chain and distribution intelligence",
      capabilities: ["Trade promotion optimization", "Route optimization", "Demand sensing", "Market intelligence"]
    },
    {
      icon: Globe,
      title: "Omnichannel Retail",
      description: "Unified experience across all channels",
      capabilities: ["Inventory unification", "Customer journey optimization", "Cross-channel analytics", "Fulfillment optimization"]
    }
  ];

  const asianMarketAdvantages = [
    {
      title: "Local Market Expertise",
      description: "Deep understanding of Asian consumer behavior and market dynamics"
    },
    {
      title: "Regulatory Compliance",
      description: "Built-in compliance for local regulations and data privacy laws"
    },
    {
      title: "Multi-language Support",
      description: "Native support for Asian languages and cultural nuances"
    },
    {
      title: "Regional Partnerships",
      description: "Strong ecosystem of local technology and business partners"
    }
  ];

  const caseStudyMetrics = [
    { metric: "500+", description: "Retail locations optimized" },
    { metric: "₹50B+", description: "Transaction value processed" },
    { metric: "15%", description: "Average margin improvement" },
    { metric: "90%", description: "Implementation success rate" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Retail
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}AI Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your retail operations with AI-powered solutions designed specifically for Asian markets. 
              From inventory optimization to customer personalization, we help retailers thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Retail Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Retail AI Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end AI solutions covering every aspect of retail operations
            </p>
          </div>

          <div className="space-y-16">
            {retailSolutions.map((solution, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mr-4`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                      <p className="text-lg text-blue-600 font-medium">{solution.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {solution.results.map((result, resultIndex) => (
                      <Badge key={resultIndex} className="bg-green-100 text-green-800">
                        {result}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Card className="border-none shadow-xl">
                    <CardContent className="p-0">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry Specialization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for different retail segments and business models
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryFocus.map((industry, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{industry.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {capability}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Asian Market Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Asian Market Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built for the unique challenges and opportunities in Asian retail markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {asianMarketAdvantages.map((advantage, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              Real impact across our retail client portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudyMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{metric.metric}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Transform Your Retail Operations
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading retailers across Asia who are leveraging AI to drive growth, 
            optimize operations, and deliver exceptional customer experiences.
          </p>
          <div className="flex justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Start Your Retail AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
