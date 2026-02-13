"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";

const faqs = [
  {
    question: "What can I use Sana Learn for?",
    answer: "Sana Learn covers all L&D use cases. You can use it for employee onboarding, sales enablement, leadership development, compliance training, customer and partner education, and beyond.",
  },
  {
    question: "Can I brand the platform for a unique experience?",
    answer: "Absolutely. Apply your brand's colors, fonts, and logos for a customized look.",
  },
  {
    question: "Is the authoring built-in?",
    answer: "Yes, Sana Learn has real-time collaborative authoring with powerful AI features to make content creation faster and more effective.",
  },
  {
    question: "What types of content can we create and include?",
    answer: "Sana Learn supports blended content. You can create, host, and manage interactive courses and live sessions from the same platform. You can also embed external content into your material. This includes videos, PDFs, and links from tools like Figma. You can import content from content libraries such as LinkedIn Learning and Coursera.",
  },
  {
    question: "Can I integrate Sana with my HRIS and CRM?",
    answer: "Sana has plug-and-play integrations with a range of CRM and HRIS systems. One of the main benefits of these integrations is automation.",
  },
  {
    question: "Can I automate enrollments?",
    answer: "Yes, you can set up automatic enrollment rules with Sana Learn's Programs feature.",
  },
  {
    question: "Can we migrate existing content from other LMS platforms?",
    answer: "Yes, Sana's course converter transforms PDFs into interactive courses, and you can import content from other LMS platforms via SCORM.",
  },
  {
    question: "What is Sana Learn's pricing?",
    answer: "We tailor pricing to different business needs. You can find all information on the pricing page.",
  },
  {
    question: "How secure will my company's knowledge and data be with Sana?",
    answer: "Very. We're ISO 27001 certified, SOC 2 Type I and Type II certified, and GDPR compliant.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">FAQ</h2>
        </ScrollReveal>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="font-medium text-base pr-8 group-hover:text-gray-700 transition-colors">
                    {faq.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 flex-shrink-0 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
