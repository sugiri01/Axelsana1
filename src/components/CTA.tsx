"use client";

import Link from "next/link";
import ScrollReveal from "./animations/ScrollReveal";

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <ScrollReveal>
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-gray-500 text-sm mb-4">Will you join us?</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8">
            The future of learning is here
          </h2>
          <Link href="#" className="btn-primary text-base px-8 py-3">
            Book an intro
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
