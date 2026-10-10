"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-[#F3ECE3]">
      {/* Subtle organic ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#E9C9C5]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#F3ECE3]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#8C7A70] mb-5"
            >
              <span className="w-6 h-[1px] bg-[#C88D8A]" />
              <span>THE ART OF EVERYDAY BEAUTY</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] font-normal text-[#352722] tracking-tight mb-6"
            >
              Your Beauty.
              <span className="block italic text-[#8C7A70] font-light">
                Your Ritual.
              </span>
              <span className="block">Your Moment.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-[#4A3A34] text-base sm:text-lg lg:text-[19px] leading-relaxed font-light max-w-xl mb-9"
            >
              Discover thoughtfully selected beauty essentials designed to make
              every day feel a little more beautiful. Botanical formulas, sensory
              textures, and effortless radiance.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
            >
              <button
                onClick={() => scrollToSection("products")}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#352722] text-[#FAF7F2] hover:bg-[#4A3A34] text-xs sm:text-sm font-medium tracking-[0.16em] uppercase rounded-none transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Shop Bestsellers</span>
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("our-story")}
                className="inline-flex items-center justify-center px-8 py-4 border border-[#352722] text-[#352722] hover:bg-[#F3ECE3] text-xs sm:text-sm font-medium tracking-[0.16em] uppercase rounded-none transition-all duration-300 cursor-pointer"
              >
                <span>Explore Our World</span>
              </button>
            </motion.div>

            {/* Editorial Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8 border-t border-[#E6DFD5] grid grid-cols-3 gap-4"
            >
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#352722] font-normal">
                  100%
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#8C7A70] mt-0.5">
                  Clean Botanicals
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#352722] font-normal">
                  4.9 / 5
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#8C7A70] mt-0.5">
                  Customer Rating
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#352722] font-normal">
                  Zero
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#8C7A70] mt-0.5">
                  Synthetic Fragrance
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Hero Photograph & Floating Badge */}
          <div className="lg:col-span-6 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Outer decorative frame */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden bg-[#F3ECE3] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85"
                  alt="Maison Beauté Luxury Skincare Bottle in warm ambient sunlight"
                  fill
                  priority
                  className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />

                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#352722]/30 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Floating Editorial Badge (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-[#FAF7F2] p-5 sm:p-6 shadow-xl border border-[#E6DFD5] max-w-[260px] sm:max-w-[290px] backdrop-blur-sm"
              >
                <div className="flex items-center space-x-2 text-[#C88D8A] mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8C7A70]">
                    FEATURED ICON
                  </span>
                </div>
                <h4 className="font-serif text-lg text-[#352722] leading-snug">
                  Hydrating Face Serum
                </h4>
                <p className="text-xs text-[#8C7A70] mt-1 font-light leading-relaxed">
                  Infused with multi-weight hyaluronic acid and damask rose.
                </p>
                <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-[#F3ECE3]">
                  <span className="font-serif text-[#352722] font-medium text-sm">
                    $68.00
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#C88D8A] font-semibold">
                    Award Winner
                  </span>
                </div>
              </motion.div>

              {/* Refined editorial quote badge (Top Right) */}
              <div className="hidden sm:block absolute -top-4 -right-4 bg-[#352722] text-[#FAF7F2] px-4 py-2.5 text-[11px] tracking-[0.16em] uppercase shadow-lg">
                SPRING / SUMMER CAMPAIGN
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
