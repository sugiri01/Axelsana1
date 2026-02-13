"use client";

import { useState, useEffect } from "react";

const features = [
  {
    id: 1,
    title: "Virtual classroom",
    description: "Blended learning streamlined in one platform.",
    image: "https://ext.same-assets.com/2498465380/2863885339.webp",
    bgColor: "bg-yellow-400",
  },
  {
    id: 2,
    title: "Just-in-time learning",
    description: "Instant search and answers to any question.",
    image: "https://ext.same-assets.com/2498465380/304923807.webp",
    bgColor: "bg-gray-100",
  },
  {
    id: 3,
    title: "Collaborative authoring",
    description: "Beautiful interactive content created at lightning speed.",
    image: "https://ext.same-assets.com/2498465380/3303174088.webp",
    bgColor: "bg-sky-100",
  },
];

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                index === activeIndex ? "ring-2 ring-black" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className={`aspect-[4/3] ${feature.bgColor} relative`}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">
                  <span className="font-semibold">{feature.title}.</span>{" "}
                  <span className="text-gray-600">{feature.description}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-black" : "w-1.5 bg-gray-300"
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
