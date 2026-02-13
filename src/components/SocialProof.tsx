"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote: "Our ultimate goal is for learners to find what they need and get answers in the moment. The only platform that is going to enable us to do that is Sana Learn",
    author: "Mark Dearlove",
    role: "Senior Director of Academy at Spryker",
    image: "https://ext.same-assets.com/2498465380/556619908.jpeg",
  },
  {
    id: 2,
    quote: "Sana Learn was the end-to-end learning platform we had been waiting for. It isn't just a tool for L&D or People Partners. It's a tool for everyone.",
    author: "Amber de Wolde",
    role: "Senior People Partner at Veriff",
    image: "https://ext.same-assets.com/2498465380/471477104.jpeg",
  },
  {
    id: 3,
    quote: "After my first demo, I couldn't believe Sana had all the tools I needed to efficiently design and evaluate the learning experience.",
    author: "Aki Friedrich",
    role: "Director of Learning Experience at Superside",
    image: "https://ext.same-assets.com/2498465380/4102713250.webp",
  },
  {
    id: 4,
    quote: "We're not only saving huge amounts of money, we're also saving a tremendous amount of time",
    author: "Lina Thomassen Stromberg",
    role: "Head of L&D at Ahlsell",
    image: "https://ext.same-assets.com/2498465380/3870683364.jpeg",
  },
];

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-4">
          Loved by users, creators,<br />and admins alike
        </h2>

        {/* G2 Badges */}
        <div className="relative rounded-3xl overflow-hidden mt-12 mb-16">
          <img
            src="https://ext.same-assets.com/2498465380/3709206179.webp"
            alt="G2 Badges"
            className="w-full h-auto rounded-3xl"
          />
        </div>

        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          The modern learning experience everyone deserves.<br />
          You don't have to choose between user-friendly and enterprise-ready.
        </p>

        {/* Testimonials Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                Math.floor(activeIndex / 2) === Math.floor(index / 2) ? "w-8 bg-black" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="ml-4 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            {isPaused ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
