"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const stories = [
  {
    id: 1,
    company: "Polestar",
    title: "Polestar increases active users by 275%",
    image: "https://ext.same-assets.com/2498465380/267896895.webp",
    href: "#",
  },
  {
    id: 2,
    company: "Ahlsell",
    title: "Ahlsell accelerates course creation by 98% and upskills thousands",
    image: "https://ext.same-assets.com/2498465380/362168441.webp",
    href: "#",
  },
  {
    id: 3,
    company: "Superside",
    title: "Superside cuts design time by 80% and leads an AI revolution",
    image: "https://ext.same-assets.com/2498465380/3026621281.webp",
    href: "#",
  },
  {
    id: 4,
    company: "Hinge Health",
    title: "Hinge Health boosts compliance training completion by 35% with Sana",
    image: "https://ext.same-assets.com/2498465380/1760553356.webp",
    href: "#",
  },
];

export default function CustomerStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Label */}
        <p className="text-sm text-gray-500 text-center mb-4">Customer stories</p>

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-12">
          Sana Learn is a fit for any industry.<br />Read the results yourself.
        </h2>

        {/* Stories Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {stories.map((story) => (
            <Link
              key={story.id}
              href={story.href}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <img
                  src={story.image}
                  alt={story.company}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium leading-snug">{story.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {stories.map((_, index) => (
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
