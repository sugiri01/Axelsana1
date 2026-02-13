"use client";

import Link from "next/link";
import ScrollReveal from "./animations/ScrollReveal";

export default function MeetSanaLearn() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Meet Sana Learn
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sana Learn brings the best of an LMS, LXP, authoring tool, and virtual classroom into one AI-native learning platform.
          </p>
          <Link href="#" className="btn-primary mt-6 inline-flex">
            Book an intro
          </Link>
        </ScrollReveal>

        {/* Platform Preview */}
        <ScrollReveal delay={0.2} className="mt-12 bg-[#f5f0e8] rounded-3xl p-8 md:p-12">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <img
              src="https://ext.same-assets.com/2498465380/581505623.webp"
              alt="Sana Learn Platform"
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Say goodbye to fragmented learning tools. Sana Learn is the only platform designed to move you beyond one-size-fits-all content to a truly dynamic, personalized learning experience at scale.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
