"use client";

import React from "react";
import { Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export type Testimonial = {
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  content: string;
  rating: number;
};

interface TrustCarouselProps {
  testimonials: Testimonial[];
}

export function TrustCarousel({ testimonials }: TrustCarouselProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative w-full overflow-hidden py-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white/40 dark:bg-surface-900/40 backdrop-blur-xl border border-white/10 dark:border-surface-800 p-10 md:p-16 rounded-[2.5rem] shadow-premium relative max-w-5xl mx-auto"
        >
          <Quote size={60} className="absolute top-10 right-10 text-primary-500/10 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="shrink-0 relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary-500 to-indigo-600 flex items-center justify-center text-3xl font-bold text-white shadow-glow">
                {testimonials[index].avatar ? (
                  <img src={testimonials[index].avatar} alt={testimonials[index].name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  testimonials[index].name[0]
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-surface-950 p-1.5 rounded-full shadow-md">
                 <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className={cn("fill-current", i < testimonials[index].rating ? "text-yellow-400" : "text-surface-200 dark:text-surface-800")} />
                    ))}
                 </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-xl md:text-2xl font-medium text-surface-900 dark:text-white leading-relaxed mb-8 italic">
                &quot;{testimonials[index].content}&quot;
              </p>
              <div>
                <h4 className="text-lg font-bold text-surface-900 dark:text-white underline decoration-primary-500 decoration-2 underline-offset-4">
                  {testimonials[index].name}
                </h4>
                <p className="text-sm text-surface-500 mt-1">
                  {testimonials[index].role} {testimonials[index].company && `at ${testimonials[index].company}`}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 transition-all duration-300 rounded-full",
              index === i ? "w-8 bg-primary-500" : "w-1.5 bg-surface-300 dark:bg-surface-700"
            )}
          />
        ))}
      </div>
    </div>
  );
}
