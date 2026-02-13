"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Starter",
    description: "For small teams getting started with learning",
    features: [
      "Up to 100 users",
      "Basic course creation",
      "Learning management",
      "Standard support",
      "Basic analytics",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing organizations with advanced needs",
    features: [
      "Up to 1,000 users",
      "AI-powered course creation",
      "Advanced learning paths",
      "Priority support",
      "Advanced analytics",
      "Custom branding",
      "SCORM compliance",
    ],
    cta: "Contact sales",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex requirements",
    features: [
      "Unlimited users",
      "Full AI capabilities",
      "Custom integrations",
      "Dedicated success manager",
      "Real-time analytics",
      "SSO & advanced security",
      "Custom SLA",
      "API access",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "How is pricing calculated?",
    answer: "Pricing is based on the number of active users per month. We offer flexible plans that scale with your organization.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer: "We offer personalized demos and pilot programs. Contact our sales team to discuss the best option for your organization.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards and offer invoicing for annual enterprise contracts.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto text-center">
            <ScrollReveal>
              <p className="text-sm text-gray-500 mb-4">Pricing</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
                Simple, transparent pricing
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Choose the plan that's right for your organization. All plans include our core learning platform.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <ScrollReveal key={plan.name} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className={`rounded-2xl p-8 h-full flex flex-col ${
                      plan.highlighted
                        ? "bg-black text-white"
                        : "bg-gray-50 text-black"
                    }`}
                  >
                    <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
                    <p className={`text-sm mb-6 ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                      {plan.description}
                    </p>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <svg
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-white" : "text-black"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={`text-sm ${plan.highlighted ? "text-gray-200" : "text-gray-700"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#"
                      className={`w-full py-3 rounded-full text-center text-sm font-medium transition-all ${
                        plan.highlighted
                          ? "bg-white text-black hover:bg-gray-100"
                          : "bg-black text-white hover:bg-gray-800"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  Need a custom solution?
                </h2>
                <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                  Our enterprise team can create a tailored package that fits your organization's unique needs.
                </p>
                <Link href="#" className="btn-primary">
                  Talk to our team
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
                Frequently asked questions
              </h2>
            </ScrollReveal>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <ScrollReveal key={faq.question} delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <ScrollReveal>
            <div className="max-w-[1400px] mx-auto text-center">
              <p className="text-gray-500 text-sm mb-4">Ready to get started?</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-8">
                Transform your learning experience
              </h2>
              <Link href="#" className="btn-primary">
                Book an intro
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
