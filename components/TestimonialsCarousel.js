"use client";
import React, { useEffect, useState } from "react";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Guwahati, Assam, India",
      text: "Excellent service! The technician was professional and my water tastes so much better now. Highly recommended!",
    },
    {
      name: "Rahul Das",
      location: "Guwahati, Assam, India",
      text: "Quick response and very knowledgeable staff. The free water test was a great bonus!",
    },
    {
      name: "Ankita Borah",
      location: "Guwahati, Assam, India",
      text: "I feel much safer drinking water at home now. The team explained everything clearly and did a thorough job.",
    },
    {
      name: "Manoj Kalita",
      location: "Guwahati, Assam, India",
      text: "Affordable, reliable, and friendly. I will definitely use their service again!",
    },
    {
      name: "Sneha Deka",
      location: "Guwahati, Assam, India",
      text: "The best RO service in Guwahati! My family is very happy with the results.",
    },
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-xl min-h-[260px]">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`absolute left-0 top-0 w-full transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={i !== index}
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-xl p-10 flex flex-col items-center">
              <svg
                className="w-10 h-10 text-indigo-400 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17v-2a4 4 0 0 1 4-4h1V7a4 4 0 1 0-8 0v2a4 4 0 0 0 4 4h1v2a4 4 0 0 1-4 4H5"
                />
              </svg>
              <p className="text-lg md:text-xl text-foreground font-medium mb-6 text-center">
                "{t.text}"
              </p>
              <div className="flex flex-col items-center">
                <span className="font-semibold text-indigo-700">{t.name}</span>
                <span className="text-sm text-muted-foreground">
                  {t.location}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`inline-block w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-indigo-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
