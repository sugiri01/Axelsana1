"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-powered generation",
    description: "Transform documents, PDFs, and existing content into interactive courses in minutes.",
  },
  {
    title: "Collaborative editing",
    description: "Work together in real-time with your team to create and refine learning content.",
  },
  {
    title: "Interactive elements",
    description: "Add quizzes, polls, videos, and interactive components without any coding.",
  },
  {
    title: "Brand customization",
    description: "Apply your brand colors, fonts, and styling across all your learning content.",
  },
  {
    title: "Multi-format support",
    description: "Import content from various sources including PowerPoint, Word, and video.",
  },
  {
    title: "Version control",
    description: "Track changes, restore previous versions, and manage content updates easily.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload your content",
    description: "Drag and drop PDFs, documents, or paste text. Sana's AI analyzes and structures it.",
  },
  {
    number: "02",
    title: "AI generates the course",
    description: "Watch as AI transforms your content into an interactive learning experience.",
  },
  {
    number: "03",
    title: "Customize and publish",
    description: "Fine-tune the content, add interactive elements, and publish to your learners.",
  },
];

export default function ContentCreationPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto text-center">
            <ScrollReveal>
              <p className="text-sm text-gray-500 mb-4">Content creation</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 max-w-4xl mx-auto">
                Create beautiful courses at lightning speed
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                Sana's AI-powered authoring tools help you transform any content into engaging, interactive learning experiences.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="#" className="btn-primary">
                  Book an intro
                </Link>
                <Link href="#" className="btn-secondary">
                  See it in action
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Demo Image */}
        <section className="py-12 px-6">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl p-8 md:p-12">
                <img
                  src="https://ext.same-assets.com/2498465380/3303174088.webp"
                  alt="Content Creation"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                From document to course in minutes
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 0.15}>
                  <div className="text-center">
                    <div className="text-7xl font-serif text-gray-200 mb-4">{step.number}</div>
                    <h3 className="font-medium text-xl mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Powerful authoring tools
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Everything you need to create world-class learning content.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-xl p-6 h-full"
                  >
                    <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { stat: "80%", label: "Faster course creation" },
                { stat: "10x", label: "More engaging content" },
                { stat: "98%", label: "User satisfaction" },
              ].map((item, index) => (
                <ScrollReveal key={item.label} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-serif mb-2">{item.stat}</div>
                    <p className="text-gray-600">{item.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <ScrollReveal>
            <div className="max-w-[1400px] mx-auto">
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  Start creating amazing courses today
                </h2>
                <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                  See how Sana's AI can transform your content creation process.
                </p>
                <Link href="#" className="btn-primary">
                  Book an intro
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
