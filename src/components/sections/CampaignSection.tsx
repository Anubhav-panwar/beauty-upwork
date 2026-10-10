"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CampaignSection() {
  const handleScrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-[#352722] text-[#FAF7F2]">
      {/* Background Editorial Image with subtle contrast gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1800&q=85"
          alt="Beauty ritual campaign atmosphere"
          fill
          className="object-cover object-center opacity-40 mix-blend-luminosity scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#352722]/95 via-[#352722]/80 to-[#352722]/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.28em] text-[#E9C9C5] font-semibold mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDITORIAL EDIT • VOLUME II</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FAF7F2] leading-[1.1] tracking-tight mb-6"
          >
            Make Space for a{" "}
            <span className="italic font-light text-[#E9C9C5]">
              Little Self-Care
            </span>
          </motion.h2>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-[#FAF7F2]/80 font-light leading-relaxed mb-10 max-w-xl"
          >
            Small rituals. Beautiful moments. Products you'll love reaching for
            every day. Infused with soothing floral extracts and restorative
            plant oils to quiet the mind and nurture the skin.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <button
              onClick={handleScrollToProducts}
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-[#FAF7F2] text-[#352722] hover:bg-[#E9C9C5] text-xs sm:text-sm font-medium tracking-[0.18em] uppercase transition-all duration-300 shadow-lg cursor-pointer"
            >
              <span>Discover Your Ritual</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
