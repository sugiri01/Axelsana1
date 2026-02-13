"use client";

import Link from "next/link";
import ScrollReveal from "./animations/ScrollReveal";

const comparisons = [
  {
    feature: "Learning management",
    statusQuo: "Manage learning through static course catalogs and scheduled sessions through manual admin",
    sanaLearn: "AI handles enrollments, scheduling, and updates automatically based on pre-configured rules",
  },
  {
    feature: "Skills management",
    statusQuo: "Build a taxonomy, market voluntary courses, and manage skills",
    sanaLearn: "AI generates content dynamically from source material in a format suited to the learner's preferences",
  },
  {
    feature: "Content creation",
    statusQuo: "Design, create, and launch courses or programs based on scoped business partner requirements",
    sanaLearn: "AI handles enrollments, scheduling, and updates automatically based on pre-configured rules",
  },
  {
    feature: "Just-in-time learning",
    statusQuo: "Purchase and build out a separate wiki for users to find company-specific information",
    sanaLearn: "AI answers questions in natural language directly from the learning platform and cites sources",
  },
  {
    feature: "Learning analytics",
    statusQuo: "Export data from LMS, upload it to a BI tool for analysis, share results with stakeholders",
    sanaLearn: "AI generates dashboards and answers performance questions in real time, instantly accessible to stakeholders",
  },
];

export default function AIComparison() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-4">
            AI is not an add-on.<br />It's what we do.
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-8">
            AI-first L&D can transform your team from a content delivery machine to a strategic value-driver.
          </p>
          <div className="text-center mb-12">
            <Link href="#" className="btn-primary">
              Book an intro
            </Link>
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-medium text-sm text-gray-500 w-1/5"></th>
                  <th className="text-left py-4 px-4 font-medium text-sm text-gray-500 w-2/5">Status quo</th>
                  <th className="text-left py-4 px-4 font-semibold text-sm text-black w-2/5">Sana Learn</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-6 px-4 font-medium text-sm">{row.feature}</td>
                    <td className="py-6 px-4 text-sm text-gray-600">{row.statusQuo}</td>
                    <td className="py-6 px-4 text-sm text-gray-800">{row.sanaLearn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Analytics Image */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 rounded-3xl overflow-hidden">
            <img
              src="https://ext.same-assets.com/2498465380/550904069.webp"
              alt="Sana Learn Analytics"
              className="w-full h-auto"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
