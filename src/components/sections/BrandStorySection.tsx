"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Quote, Check, X } from "lucide-react";

export default function BrandStorySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="our-story" className="py-20 lg:py-32 bg-[#FAF7F2] border-b border-[#F3ECE3] scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Editorial Photo with Warm Aesthetic */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden bg-[#F3ECE3] shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1000&q=80"
                  alt="Maison Beauté Botanical Studio & Ingredients"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Offset Accent Card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#352722] text-[#FAF7F2] p-6 max-w-xs shadow-xl">
                <Quote className="w-6 h-6 text-[#E9C9C5] mb-2" />
                <p className="font-serif italic text-base leading-snug">
                  "True beauty begins in the quiet moments we claim for ourselves."
                </p>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#E9C9C5] font-semibold mt-3 block">
                  THE FOUNDER'S NOTE
                </span>
              </div>
            </div>

            {/* Right Column: Editorial Text & Story */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#8C7A70] font-semibold mb-4">
                <span className="w-6 h-[1px] bg-[#C88D8A]" />
                <span>OUR PHILOSOPHY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#352722] font-normal tracking-tight leading-[1.15] mb-6">
                Beauty Should Feel Like You.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#4A3A34] font-light leading-relaxed mb-8">
                <p>
                  At MAISON BEAUTÉ, we believe personal beauty is never about
                  conforming to an ideal — it is an intimate ritual that celebrates
                  who you already are.
                </p>
                <p>
                  Every formulation in our collection is curated with intention.
                  We marry sensorial botanical textures with comforting, skin-loving
                  ingredients that make the first minutes of your morning and the
                  last minutes of your evening feel calm, grounding, and deeply
                  restorative.
                </p>
                <p>
                  From weightless facial elixirs to velvety lip tints, each product
                  is crafted to honor your natural texture and skin rhythm.
                </p>
              </div>

              {/* Pillars */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#E6DFD5] mb-8">
                <div>
                  <h4 className="font-serif text-lg text-[#352722] mb-1">
                    Intentional Curation
                  </h4>
                  <p className="text-xs text-[#8C7A70] font-light leading-relaxed">
                    Fewer, better essentials crafted to complement your existing routine.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#352722] mb-1">
                    Sensory Pleasure
                  </h4>
                  <p className="text-xs text-[#8C7A70] font-light leading-relaxed">
                    Silky textures, soft natural aromas, and effortless application.
                  </p>
                </div>
              </div>

              {/* Story Button */}
              <div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center space-x-3 px-8 py-4 bg-[#352722] text-[#FAF7F2] hover:bg-[#4A3A34] text-xs font-medium tracking-[0.16em] uppercase transition-colors cursor-pointer"
                >
                  <span>Our Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Brand Story Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#352722]/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#FAF7F2] p-8 sm:p-12 shadow-2xl border border-[#E6DFD5] z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-[#352722] hover:bg-[#F3ECE3] rounded-full transition-colors"
                aria-label="Close story"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C7A70] font-semibold block mb-2">
                BEHIND MAISON BEAUTÉ
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#352722] mb-6">
                A Letter on Intentional Rituals
              </h3>

              <div className="space-y-4 text-base text-[#4A3A34] font-light leading-relaxed">
                <p>
                  "We founded MAISON BEAUTÉ out of a quiet frustration with the
                  overwhelming pace of modern beauty. Shelves overcrowded with
                  complicated 12-step regimes that felt more like a chore than a
                  pleasure."
                </p>
                <p>
                  "We set out to create an alternative: a refined sanctuary of
                  multifunctional, luxurious, and beautifully scented formulations
                  that bring calm back to your dressing table."
                </p>
                <p>
                  "Every bottle and jar is designed to look like art on your vanity,
                  feel divine upon contact with your skin, and remind you to take a
                  breath. We are honored to be part of your daily ritual."
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E6DFD5] flex items-center justify-between">
                <div>
                  <span className="font-serif text-lg text-[#352722] block">
                    The Creative Studio
                  </span>
                  <span className="text-xs text-[#8C7A70]">
                    Maison Beauté Atelier
                  </span>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 bg-[#352722] text-[#FAF7F2] text-xs uppercase tracking-widest hover:bg-[#4A3A34] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
