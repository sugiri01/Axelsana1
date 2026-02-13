"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "Automated enrollments",
    description: "Set up rules to automatically enroll learners based on role, department, or custom criteria.",
  },
  {
    title: "Learning paths",
    description: "Create structured learning journeys that guide employees through their development.",
  },
  {
    title: "Compliance tracking",
    description: "Monitor completion rates and ensure everyone stays up-to-date with required training.",
  },
  {
    title: "Progress analytics",
    description: "Get real-time insights into learner engagement and course effectiveness.",
  },
  {
    title: "Certificates & badges",
    description: "Automatically issue certificates and badges when learners complete courses.",
  },
  {
    title: "Notifications & reminders",
    description: "Keep learners engaged with automated notifications and deadline reminders.",
  },
];

export default function LearningManagementPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <p className="text-sm text-gray-500 mb-4">Learning management</p>
                <h1 className="text-4xl md:text-5xl font-serif mb-6">
                  AI-powered learning management
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                  Automate the administrative work that slows you down. Sana Learn handles enrollments, scheduling, and updates automatically.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link href="#" className="btn-primary">
                    Book an intro
                  </Link>
                  <Link href="#" className="btn-secondary">
                    Watch demo
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-gray-100 rounded-2xl overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/2498465380/581505623.webp"
                    alt="Learning Management"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Everything you need to manage learning
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                From enrollment to completion, Sana Learn streamlines every step.
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

        {/* CTA */}
        <section className="py-20 px-6">
          <ScrollReveal>
            <div className="max-w-[1400px] mx-auto">
              <div className="bg-black text-white rounded-3xl p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  Ready to automate your learning management?
                </h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                  See how Sana Learn can save your team hours every week.
                </p>
                <Link href="#" className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
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
