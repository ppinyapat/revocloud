
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  ArrowRight,
  Linkedin,
  Mail,
  Briefcase
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI, constantly evolving our solutions to stay ahead of the curve."
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your success is our success. We're committed to delivering solutions that create real, measurable impact for your business."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work as an extension of your team, ensuring seamless integration and knowledge transfer throughout our partnership."
    },
    {
      icon: Award,
      title: "Measurable Impact",
      description: "We focus on delivering tangible outcomes and quantifiable results, ensuring our AI solutions provide a clear return on investment."
    }
  ];

  const team = [
    {
      name: "Victor Siow",
      role: "Founding Partner",
      bio: "20+ years in retail operations consulting and building data & AI solutions to solve complex retail problems. Led Data & AI initiatives at Fortune 500 companies.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cad8a9991_image.png"
    },
    {
      name: "Pinyapat Amornrattanaroj",
      role: "Head of Data Platform Solutions",
      bio: "Certified Expert in enterprise data architecture and platform solutions with deep experience in retail and FMCG sectors across Southeast Asia.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const milestones = [
    { year: "2025", event: "Founded Revocloud with vision to democratize AI for retail businesses" },
    { year: "2026", event: "Develop AI Agent solutions that can be plugged in to augment decision making in supply-chain, campaign management, dynamic pricing, customer service, and customer loyalty" },
    { year: "2027", event: "Grow into the leading service provider for AI solutions and transform the region's retail landscape with our next-gen AI solutions" },
    { year: "2028", event: "Sky is the limit..." }
  ];

  const fivetranBadges = [
    { name: "Fivetran Premier Partner", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2d35917b0_Fivetran-Premier.png" },
    { name: "Fivetran HVR Certified", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2b5dd129e_fivetranhvr.png" },
  ];

  const googleCloudBadges = [
    { name: "Professional Cloud Architect", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/304ffc8ed_cloudarchitect.png" },
    { name: "Professional Data Engineer", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/48df7274e_DE.jpeg" },
    { name: "Professional Cloud Developer", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/796baaeb8_cloud_dev.png" },
    { name: "Professional Machine Learning Engineer", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/08c046300_ML.png" },
    { name: "Cloud Engineering Certificate", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bae6a8869_cloudengineering.png" },
    { name: "Data Analytics Certificate", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ba8dae206_dataanalytics.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Revocloud
              </span>
            </h1>
            <div className="my-8 flex justify-center">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/16c87ff35_Revo_logo_1st.png"
                alt="Revocloud Logo"
                className="h-40 w-auto"
              />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to revolutionize how businesses harness the power of artificial intelligence.
              Founded by AI pioneers and backed by world-class investors, we're building the future of intelligent business solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Revocloud isn't just another tech company. We are the architects of accelerated growth for retail businesses. Our cutting-edge AI is designed to understand, predict, and optimize every facet of your operations, from hyper-personalized customer experiences and intelligent inventory management to dynamic pricing strategies and streamlined supply chains.
              </p>
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where AI seamlessly integrates into every business process, empowering organizations to make smarter decisions,
                automate complex tasks, and unlock new possibilities for growth and innovation.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships & Alliances */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Partnerships & Alliances
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We partner with industry leaders to provide best-in-class solutions.
            </p>
          </div>

          <div className="space-y-16">
            {/* Fivetran Section */}
            <div>
              <div className="flex justify-center items-center gap-4 mb-8">
                <Briefcase className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800 text-center">
                  Fivetran Premier Partner
                </h3>
              </div>
              <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12">
                {fivetranBadges.map((badge, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={badge.url}
                      alt={badge.name}
                      className="h-32 w-32 md:h-40 md:w-40 object-contain mx-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Google Cloud Section */}
            <div>
              <div className="flex justify-center items-center gap-4 mb-8">
                <Globe className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-800 text-center">
                  Google Cloud Certified
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {googleCloudBadges.map((badge, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={badge.url}
                      alt={badge.name}
                      className="h-32 w-32 md:h-40 md:w-40 object-contain mx-auto mix-blend-multiply p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to revolutionize AI for business
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              World-class experts in AI, engineering, and business, united by a shared vision
              to transform how companies leverage artificial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="p-2">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Join Our AI Revolution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how Revocloud can transform your business with cutting-edge AI solutions
            tailored to your unique needs and goals.
          </p>
          <div className="flex justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
