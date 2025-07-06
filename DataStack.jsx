
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Database, 
  Cloud, 
  Zap, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  TrendingUp,
  Server,
  Cable,
  Layers
} from "lucide-react";

export default function DataStack() {
  const dataStackComponents = [
    {
      icon: Database,
      title: "Fivetran Partnership",
      subtitle: "Official Data Integration Partner",
      description: "Complete data foundation architecture and roadmap with platform-agnostic deployment",
      features: [
        "500+ pre-built connectors",
        "Real-time data synchronization",
        "Automated schema drift handling",
        "Enterprise-grade security & compliance"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Cloud,
      title: "Google Cloud Services",
      subtitle: "Verified Cloud Partner",
      description: "Advanced analytics and AI infrastructure on Google Cloud Platform",
      features: [
        "BigQuery data warehousing",
        "Vertex AI model deployment",
        "Cloud SQL database solutions",
        "Multi-region data replication"
      ],
      color: "from-green-600 to-teal-600"
    },
    {
      icon: BarChart3,
      title: "Looker Analytics",
      subtitle: "Business Intelligence & Visualization",
      description: "Self-service analytics platform for data-driven decision making",
      features: [
        "Interactive dashboards",
        "Embedded analytics",
        "Real-time reporting",
        "Custom data modeling"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Zap,
      title: "Systems Integration",
      subtitle: "Enterprise System Connectivity",
      description: "Deep SAP modeling and logic integration for enterprise workflows",
      features: [
        "SAP HANA connectivity",
        "Real-time ERP data sync",
        "Custom BAPI development",
        "Legacy system modernization"
      ],
      color: "from-orange-600 to-red-600"
    }
  ];

  const architectureFeatures = [
    {
      icon: Layers,
      title: "Unified Data Platform",
      description: "Single source of truth for all enterprise data"
    },
    {
      icon: Cable,
      title: "Real-time Connectors",
      description: "Live data streaming from any source system"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance standards"
    },
    {
      icon: Globe,
      title: "Multi-Cloud Ready",
      description: "Deploy across AWS, GCP, Azure, or hybrid environments"
    }
  ];

  const benefits = [
    { metric: "10x", description: "Faster time to insights" },
    { metric: "90%", description: "Reduction in data preparation time" },
    { metric: "99.9%", description: "Data pipeline uptime guarantee" },
    { metric: "50+", description: "Data sources integrated seamlessly" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Next-Gen
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Data Stack
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Build your enterprise data foundation with our comprehensive stack. From data ingestion to analytics, 
              we provide the infrastructure your AI agents need to make intelligent decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Data Stack Components */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Data Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every component optimized for AI and machine learning workloads
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {dataStackComponents.map((component, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${component.color} rounded-lg flex items-center justify-center`}>
                      <component.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{component.title}</CardTitle>
                      <p className="text-sm font-medium text-blue-600">{component.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Architecture Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Modern Data Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for scale, security, and real-time performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectureFeatures.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Measurable Impact
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our data stack implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{benefit.metric}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From assessment to deployment, we handle every step
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-4">Phase 1</Badge>
                <CardTitle>Assessment & Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Current state analysis</li>
                  <li>• Data source identification</li>
                  <li>• Architecture design</li>
                  <li>• Migration planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-4">Phase 2</Badge>
                <CardTitle>Implementation & Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Connector deployment</li>
                  <li>• Data pipeline setup</li>
                  <li>• Quality monitoring</li>
                  <li>• Performance optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-4">Phase 3</Badge>
                <CardTitle>Analytics & Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dashboard creation</li>
                  <li>• Model deployment</li>
                  <li>• User training</li>
                  <li>• Ongoing support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Build Your Data Foundation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's architect a data stack that powers your AI transformation. 
            Start with a comprehensive assessment of your current infrastructure.
          </p>
          <div className="flex justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Schedule Data Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
