"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { CheckCircle, Clock, Quote, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="floatingGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="ProductiveFlow"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Boost Your Productivity"
          description="The all-in-one productivity app that helps teams organize, collaborate, and achieve more. Streamline your workflow with intelligent task management and real-time insights."
          tag="New Release"
          tagIcon={Sparkles}
          buttons={[
            { text: "Start Free Trial", href: "https://app.productiveflow.com/signup" },
            { text: "View Demo", href: "features" }
          ]}
          imageSrc="https://pixabay.com/get/g44701ad055f1c408b748cdfbe7776d83592fde2071540b5dcc630cbd2b6fddfa334c31bb0fe2902e33a4ca8186b0a569057597210e594dee6ae89db6b3453d97_1280.jpg"
          imageAlt="ProductiveFlow dashboard interface"
          imagePosition="right"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Powerful Features"
          description="Everything you need to supercharge your productivity and streamline your workflow"
          tag="Features"
          tagIcon={Zap}
          features={[
            {
              title: "Smart Task Management",
              description: "Organize tasks with AI-powered prioritization and automated scheduling that adapts to your workflow",
              imageSrc: "https://pixabay.com/get/ge39eec742068bea7b8a6092bda3fae2adc844eb739c90e876b80e1b5cce32511c0d84e11080ea2f072df76bdc380951abf6de6dbe0084762de3b5d075ff0ba55_1280.jpg",
              imageAlt: "Task management interface"
            },
            {
              title: "Real-Time Analytics",
              description: "Track productivity metrics and gain insights into team performance with beautiful, actionable dashboards",
              imageSrc: "https://pixabay.com/get/ge0c018a14b167863da849fec666099cea4aef51701644366fba181035ef4e36d28427be38841803820c118e66711ae311a32afccd712e2f53adba5bac1efd0d7_1280.jpg",
              imageAlt: "Analytics dashboard"
            },
            {
              title: "Team Collaboration",
              description: "Work together seamlessly with real-time chat, file sharing, and collaborative project management tools",
              imageSrc: "https://pixabay.com/get/g37c2a2a9346dd61f528d0eded0bcfa3ed624d555a2ce2e0d3987869e40ebfb92ec7bf83b119ba4c3b4f498c36419eb044b8fc7287beb77bb5f34eb602083b5c7_1280.jpg",
              imageAlt: "Team collaboration workspace"
            },
            {
              title: "Workflow Automation",
              description: "Automate repetitive tasks and create custom workflows that save time and reduce manual effort",
              imageSrc: "https://pixabay.com/get/geec4840e4790690df59cb5235785ab848d9c9585c4c8895f03a5e4a81cc2bb9a8b6f1b28632d514b0159ab89df614f0168056abc88c7251b6d64a54ade802a1b_1280.jpg",
              imageAlt: "Workflow automation interface"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Trusted by Productive Teams"
          description="Join thousands of teams who have transformed their productivity with our platform"
          tag="Stats"
          tagIcon={TrendingUp}
          metrics={[
            { id: "1", icon: Users, title: "Active Users", value: "50K+" },
            { id: "2", icon: CheckCircle, title: "Tasks Completed", value: "2M+" },
            { id: "3", icon: Clock, title: "Hours Saved", value: "100K+" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Users Say"
          description="Real feedback from teams who've transformed their productivity with ProductiveFlow"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Product Manager at TechStart",
              testimonial: "ProductiveFlow has completely transformed how our team collaborates. The smart task prioritization and real-time insights have increased our productivity by 40%.",
              imageSrc: "https://pixabay.com/get/g8263bfa52af8bc3d1cad34c3b28f2ca37eb0da292f1be8af1e9edbe2b4e99d836986d805d4a2fd36e7960ff9df51f82954a219394b3803e1a13a8b72f56e9850_1280.png",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "David Chen",
              role: "Founder at GrowthLab",
              testimonial: "The automation features are incredible. What used to take hours of manual work now happens automatically. It's like having an extra team member.",
              imageSrc: "https://pixabay.com/get/gfdfdec0d49f334b016481bd7a6b2a2ab4801b1e4a6727e23f60c86c56b400f89f5459fd23d366c5c7452c57144590c1b0e2167ec3a84387654a707073df60924_1280.jpg",
              imageAlt: "David Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Operations Director at ScaleUp",
              testimonial: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions about our workflow optimization.",
              imageSrc: "https://pixabay.com/get/g1cab4b8f938251cf41a79349719761067fbb39834313311cd5a67aaccef58d07f7d53bd3b15eb92f2b8bfee1f3f89d74cc36360e5993bc3df2481351f4e13498_1280.jpg",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "Engineering Lead at DevCorp",
              testimonial: "Integration with our existing tools was seamless. The team adopted it immediately, and our project delivery times improved significantly.",
              imageSrc: "https://pixabay.com/get/g69bc4bf8975ce0f37a2661a906dd2f2a979f8ae698733403a77049e08713614b12c4f6319f49a3856495b6e12a2de2db90b1561342087f5dd90a3f62fa864b5a_1280.jpg",
              imageAlt: "Michael Thompson portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Get Started?"
          description="Contact our team to learn how ProductiveFlow can transform your team's productivity. We'll help you get set up and running in no time."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Work Email", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: true },
            { name: "team_size", type: "text", placeholder: "Team Size", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your productivity goals...",
            rows: 5,
            required: false
          }}
          buttonText="Get Started"
          imageSrc="https://pixabay.com/get/g55d20b2c1812f4fcf379ccb9d970ad18e73cbd225ccca0cd24c5b7db9d58e84d73aa9e7759737f36e46317e6249ed608ef9915ba398356d9ebef24ecdcc91894_1280.jpg"
          imageAlt="Modern productive workspace"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="ProductiveFlow"
          copyrightText="© 2025 ProductiveFlow. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Security", href: "security" },
                { label: "Integrations", href: "integrations" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Blog", href: "blog" },
                { label: "Press", href: "press" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "help" },
                { label: "Contact", href: "contact" },
                { label: "Status", href: "status" },
                { label: "API Docs", href: "api" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}