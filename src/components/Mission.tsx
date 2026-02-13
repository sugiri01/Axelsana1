"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-3xl overflow-hidden min-h-[500px]"
        >
          <img
            src="https://ext.same-assets.com/2498465380/2063973560.webp"
            alt="Mission"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="relative z-10 p-8 md:p-16 max-w-xl h-full flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-sm mb-4"
            >
              Mission
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight"
            >
              Sana has been on a mission to transform how organizations learn and access knowledge with AI since 2016.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 text-lg leading-relaxed"
            >
              We have pioneered the application of AI to learning experiences, content creation, learning management, and learning analytics. We believe the best is yet to come.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
