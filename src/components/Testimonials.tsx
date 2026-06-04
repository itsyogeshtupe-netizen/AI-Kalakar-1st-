/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto scroll testimonials
  useEffect(() => {
    const interval = setInterval(handleNext, 8500);
    return () => clearInterval(interval);
  }, []);

  const activeReview = TESTIMONIALS[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      {/* Background visual cues */}
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-gold-bright/3 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10" id="testimonials-framer-inner">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono tracking-widest text-[#00E5FF] uppercase block mb-3">
            [ VERIFIED CLIENT REVIEWS ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Loved By Visionaries
          </h2>
        </div>

        {/* Outer Slide Box */}
        <div className="relative" id="testimonials-slider-box">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.5 }}
              className="cinematic-glass border border-white/10 rounded-2xl p-8 md:p-12 space-y-8 relative overflow-hidden"
            >
              
              {/* Giant quote background symbol */}
              <Quote className="absolute -top-6 -right-6 w-32 h-32 text-white/[0.02] pointer-events-none select-none" />

              {/* Gold Stars */}
              <div className="flex items-center space-x-1" id="reviews-star-list">
                {[...Array(activeReview.rating)].map((_, starIdx) => (
                  <Star key={starIdx} className="w-4 h-4 text-gold-bright fill-gold-bright" />
                ))}
              </div>

              {/* Main quote */}
              <blockquote className="text-lg md:text-2xl font-display font-light text-white leading-relaxed tracking-wide italic">
                {"\""}{activeReview.feedback}{"\""}
              </blockquote>

              {/* User Bio Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/5">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shadow-lg relative bg-neutral-800">
                    <img
                      src={activeReview.avatarUrl}
                      alt={activeReview.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-white text-sm md:text-base tracking-wide">
                      {activeReview.name}
                    </h4>
                    <span className="text-xs text-gray-500 font-sans block mt-0.5">
                      {activeReview.position} at <span className="text-[#00E5FF]">{activeReview.company}</span>
                    </span>
                  </div>
                </div>

                {/* Simulated signature brand badge */}
                <div className="px-3 py-1.5 rounded bg-white/[0.01] border border-white/5 font-mono text-[9px] tracking-widest text-[#00E5FF] uppercase block w-fit">
                  {activeReview.logoText} // ARCHIVE
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation indicators */}
          <div className="flex items-center justify-between mt-8" id="testimonials-navigation-row">
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`h-1.5 transition-all rounded-full cursor-pointer ${
                    activeIndex === dotIdx ? 'w-8 bg-gold-bright' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Slider arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-gold-bright text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-gold-bright text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
