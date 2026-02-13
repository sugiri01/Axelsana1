"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const partnerLogos = [
  { name: "Swile", src: "https://ext.same-assets.com/2498465380/4264500075.svg" },
  { name: "Electrolux", src: "https://ext.same-assets.com/2498465380/1729617915.svg" },
  { name: "Polestar", src: "https://ext.same-assets.com/2498465380/3733493856.svg" },
  { name: "Hinge", src: "https://ext.same-assets.com/2498465380/3865379432.svg" },
  { name: "Kearney", src: "https://ext.same-assets.com/2498465380/3682726409.svg" },
];

export default function Hero() {
  return (
    <section className="relative pt-24 pb-8 overflow-hidden">
      {/* Hero Background */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-200 via-yellow-100 to-amber-100 min-h-[400px] flex items-center justify-center"
        >
          {/* Abstract Shape Background */}
          <div className="absolute inset-0 opacity-80">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 12 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-200 to-amber-200 rounded-[100px]"
              />
              <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/30 rounded-full blur-2xl" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-amber-300/40 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-6 py-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-6 max-w-3xl mx-auto leading-tight"
            >
              The future of enterprise learning
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="#" className="btn-primary text-base px-6 py-3">
                Book an intro
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Partner Logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 py-6 border-y border-gray-100"
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {partnerLogos.map((logo, index) => (
              <motion.img
                key={logo.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                src={logo.src}
                alt={logo.name}
                className="h-6 md:h-8 grayscale hover:grayscale-0 transition-all cursor-pointer"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
