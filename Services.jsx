
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Brain, 
  BarChart3, 
  Cog, 
  Database, 
  Bot, 
  Settings,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Users,
  Building,
  Target,
  Lightbulb
} from "lucide-react";

export default function Services() {
  const servicePhases = [
    {
      phase: "Phase 1",
      title: "AI Integration Services",
      subtitle: "Custom AI Decision Agents",
      description: "We start by acting as your AI integrator, building custom decision-support agents tailored to your specific business functions. These agents augment human decision-makers with intelligent recommendations.",
      icon: Settings,
      color: "from-blue-600 to-cyan-600",
      services: [
        {
          name: "Supply Chain AI Agent",
          description: "Intelligent auto-replenishment and inventory optimization",
          benefits: ["20-30% improvement in logistics performance", "17% reduction in inventory carrying costs", "65% reduction in out-of-stock scenarios"]
        },
        {
          name: "Dynamic Pricing AI Agent", 
          description: "Real-time pricing optimization and promotional strategy",
          benefits: ["Up to $14M annual margin increase", "Automated price testing and optimization", "Market-responsive pricing strategies"]
        },
        {
          name: "Marketing Campaign AI Agent",
          description: "Personalized campaign optimization and customer targeting",
          benefits: ["Higher campaign ROI through better targeting", "Automated A/B testing", "Real-time budget reallocation"]
        },
        {
          name: "Customer Loyalty AI Agent",
          description: "Retention analysis and personalized engagement",
          benefits: ["Proactive churn prevention", "Automated retention offers", "Enhanced customer lifetime value"]
        }
      ]
    },
    {
      phase: "Phase 2", 
      title: "Enterprise Decision Engine Platform",
      subtitle: "Scalable AI Platform",
      description: "Building on our integration experience, we deliver a unified, system-agnostic AI Decision Engine that orchestrates intelligent agents across your entire enterprise workflow.",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      services: [
        {
          name: "Multi-Agent Orchestration",
          description: "Collaborative AI agents working together across departments",
          benefits: ["Unified decision-making platform", "Cross-functional AI coordination", "Scalable agent deployment"]
        },
        {
          name: "Legacy System Integration",
          description: "Seamless connection to existing ERP, CRM, and legacy systems",
          benefits: ["No system replacement required", "Proprietary connector library", "Minimal disruption deployment"]
        },
        {
          name: "Autonomous Decision Engine",
          description: "Progressive automation from human-in-loop to full autonomy",
          benefits: ["Configurable autonomy levels", "Built-in governance controls", "Continuous learning capabilities"]
        }
      ]
    }
  ];

  const verticalSolutions = [
    {
      icon: Building,
      title: "Retail & E-commerce",
      description: "AI-powered solutions for modern retail operations",
      features: ["Demand forecasting", "Inventory optimization", "Customer personalization", "Omnichannel coordination"]
    },
    {
      icon: Target,
      title: "FMCG & Consumer Goods",
      description: "Intelligent supply chain and market optimization",
      features: ["Supply chain planning", "Trade promotion optimization", "Market intelligence", "Distribution analytics"]
    },
    {
      icon: Lightbulb,
      title: "Enterprise Operations",
      description: "Cross-functional AI for business process automation",
      features: ["Financial planning AI", "Operational intelligence", "Process automation", "Decision support systems"]
    }
  ];

  const autonomyLevels = [
    {
      level: "Level 1-2",
      title: "Augmented Intelligence",
      description: "AI provides recommendations with human oversight",
      example: "Supply chain agent suggests reorder quantities for approval"
    },
    {
      level: "Level 3",
      title: "Conditional Autonomy", 
      description: "AI executes decisions within predefined parameters",
      example: "Automatic reordering for standard items below threshold"
    },
    {
      level: "Level 4-5",
      title: "High Autonomy",
      description: "AI manages entire processes with minimal human intervention",
      example: "Fully autonomous pricing and inventory management"
    }
  ];

  const regionalAdvantages = [
    "Deep integration with Asian enterprise systems",
    "Local language and cultural optimization",
    "Region-specific business logic and compliance",
    "Proven track record with Southeast Asian enterprises"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              From Augmented to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Autonomous AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We help Asian enterprises evolve from manual decision-making to fully autonomous AI-powered operations. 
              Starting with human-in-loop AI agents, we gradually build towards complete business process automation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicePhases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-xl flex items-center justify-center mr-4`}>
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                        <p className="text-lg text-blue-600 font-medium">{phase.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {phase.description}
                    </p>

                    <div className="space-y-4">
                      {phase.services.map((service, serviceIndex) => (
                        <Card key={serviceIndex} className="border-l-4 border-l-blue-500">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                            <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {service.benefits.map((benefit, benefitIndex) => (
                                <Badge key={benefitIndex} variant="outline" className="text-xs">
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative">
                      <img 
                        src={index === 0 ? 
                          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop" : 
                          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop"
                        }
                        alt={phase.title} 
                        className="rounded-lg shadow-xl"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${phase.color} opacity-20 rounded-lg`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomy Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Levels of AI Autonomy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Like self-driving cars, we progressively increase AI autonomy as trust and capability grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {autonomyLevels.map((level, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {level.level}
                    </Badge>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-3 h-3 rounded-full ${
                            i <= index ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{level.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{level.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">Example:</p>
                    <p className="text-sm text-blue-700">{level.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI agents for Asian retail, FMCG, and enterprise operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {verticalSolutions.map((solution, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Asia-First Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for Asian enterprise needs and systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalAdvantages.map((advantage, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{advantage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">20-50%</h3>
              <p className="text-gray-600">Reduction in supply chain errors</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">65%</h3>
              <p className="text-gray-600">Reduction in out-of-stock losses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">3-5x</h3>
              <p className="text-gray-600">ROI within 12 months</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">40%</h3>
              <p className="text-gray-600">Of retail decisions will be AI-driven by 2028</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Begin with Phase 1 AI integration services and evolve towards full autonomous operations. 
            Let's build your enterprise AI decision engine together.
          </p>
          <div className="flex justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Start Phase 1 Integration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
