
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  DatabaseZap,
  CloudCog,
  Lightbulb,
  Check,
  Bot,
  Brain,
  Zap,
  Target
} from "lucide-react";

export default function Home() {
  const servicePillars = [
    {
      icon: DatabaseZap,
      title: "Unified Data Platform",
      subtitle: "Fivetran Partner",
      points: [
        "Official Fivetran Partner",
        "Data Foundation Architecture & Roadmap",
        "Platform-Agnostic Data Pipeline Deployment",
        "Advanced SAP Modeling & Logic",
      ]
    },
    {
      icon: CloudCog,
      title: "Google Cloud Partner",
      subtitle: "Certified Partner",
      points: [
        "Expertise in Google BigQuery & Databases",
        "Looker Analytics & Visualization",
        "Custom Data Science & AI Models",
        "AI Agent Integration with Source Systems",
      ]
    },
    {
      icon: Bot,
      title: "AI Agents",
      subtitle: "Decision Engine Solutions",
      points: [
        "Plug-and-Play AI Agents for Business Decisioning",
        "Workflow Automation Across Legacy & Modern Systems",
        "Natural Language Control with Human-in-the-Loop Governance",
        "Continuously Learning Decision Engine",
      ]
    },
    {
      icon: Lightbulb,
      title: "Strategy & Consulting",
      subtitle: "Business-Driven AI",
      points: [
        "End-to-End Business & AI Strategy",
        "Digital Transformation Roadmaps",
        "Solution Architecture & Design",
        "Performance Optimization",
      ]
    }
  ];

  const stats = [
    { number: "+3-5%", label: "Margin Improvement" },
    { number: "+5%-15%", label: "Incremental Sales" },
    { number: "up to 33%", label: "Conversion Rate" },
    { number: "10%+", label: "Average Transaction Value" },
    { number: "3X", label: "Faster Time to Market" },
    { number: "5X", label: "Lower Total Cost of Ownership" }
  ];

  const valuePropositions = [
    {
      icon: Brain,
      title: "Augmented to Autonomous AI Evolution",
      description: "Unlike static AI tools, our platform evolves with your business - starting with human-in-the-loop recommendations and gradually progressing to fully autonomous decision-making as trust builds.",
      benefits: ["Progressive autonomy levels", "Configurable AI governance", "Human oversight controls", "Continuous learning capabilities"]
    },
    {
      icon: Zap,
      title: "Legacy System Integration Mastery",
      description: "While competitors require expensive system overhauls, we seamlessly integrate with your existing ERP, CRM, and legacy infrastructure through our proprietary connector library.",
      benefits: ["No system replacement needed", "200+ pre-built connectors", "Minimal deployment disruption", "Rapid ROI realization"]
    },
    {
      icon: Globe,
      title: "Asia-Focused Retail Expertise",
      description: "Built specifically for Asian retail complexities - from fragmented supply chains to local consumer behaviors - giving you competitive advantages that global platforms miss.",
      benefits: ["Local market intelligence", "Regional compliance built-in", "Multi-language support", "Cultural nuance optimization"]
    },
    {
      icon: Target,
      title: "Proven Decision Engine Platform",
      description: "Beyond point solutions, we deliver a unified AI brain that orchestrates decisions across supply chain, pricing, marketing, and customer loyalty - all from one integrated platform.",
      benefits: ["Cross-functional coordination", "Real-time decision optimization", "Unified data intelligence", "Scalable multi-agent architecture"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e894b56cc_the-entity.jpg"
          alt="AI background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-br from-blue-900/40 to-purple-900/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Revolutionize Your
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}Business
              </span>
              <br />
              with AI
            </h1>

            <div className="my-8 flex justify-center">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/16c87ff35_Revo_logo_1st.png"
                alt="Revocloud Logo"
                className="h-40 w-auto"
              />
            </div>

            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of artificial intelligence to transform your operations,
              accelerate growth, and stay ahead of the competition with Revocloud's
              cutting-edge AI solutions.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pillars Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end AI solutions, from establishing data foundations to deploying AI Agents to accelerate sales, profitability, and cost-to-serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {servicePillars.map((pillar, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-medium text-blue-600">{pillar.subtitle}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-gray-600 mt-4 flex-grow">
                    {pillar.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Leading Retailers Choose Revocloud
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach to enterprise AI delivers measurable results where others fall short
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {valuePropositions.map((prop, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <prop.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {prop.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {prop.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Revocloud Difference
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We combine deep retail knowledge with expertise in implementing modern data stacks and AI agents to drive proven, measurable growth. Our approach bridges the gap between data infrastructure and real-world business outcomes, ensuring technology enables our customer's strategy.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mt-6 text-center">
                <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  "We don't believe in hype. We believe in provable ROI."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have already revolutionized their operations with Revocloud AI.
          </p>
          <div className="flex justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

