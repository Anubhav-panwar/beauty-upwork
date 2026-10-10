"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";

interface CategorySectionProps {
  onSelectCategory: (category: string) => void;
}

export default function CategorySection({
  onSelectCategory,
}: CategorySectionProps) {
  // Filter out the "all" category for the visual cards
  const displayCategories = CATEGORIES.filter((c) => c.id !== "all");

  const handleCategoryClick = (categoryName: string) => {
    onSelectCategory(categoryName);
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#F3ECE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 lg:mb-18">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#8C7A70] font-semibold block mb-2">
            CURATED CATEGORIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#352722] font-normal tracking-tight mb-4">
            Your Ritual, Your Way
          </h2>
          <p className="text-[#8C7A70] text-base sm:text-lg font-light leading-relaxed">
            Everything you need to make your everyday routine feel extraordinary.
            Explore each essential step of modern self-care.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Skincare (Larger feature - span 7 on md/lg) */}
          {displayCategories[0] && (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleCategoryClick(displayCategories[0].name)}
              className="md:col-span-7 group relative overflow-hidden bg-[#F3ECE3] cursor-pointer min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-8 sm:p-10"
            >
              <Image
                src={displayCategories[0].image!}
                alt={displayCategories[0].name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#352722]/85 via-[#352722]/30 to-transparent transition-opacity duration-500" />
              
              <div className="relative z-10 text-[#FAF7F2]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E9C9C5] font-semibold block mb-1">
                  COLLECTION • {displayCategories[0].count} ITEMS
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal mb-2">
                  {displayCategories[0].name}
                </h3>
                <p className="text-sm text-[#FAF7F2]/80 font-light max-w-md mb-4 hidden sm:block">
                  {displayCategories[0].tagline}
                </p>
                <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] font-medium text-[#FAF7F2] group-hover:text-[#E9C9C5] transition-colors">
                  <span>Explore Ritual</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 2: Makeup (Span 5) */}
          {displayCategories[1] && (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleCategoryClick(displayCategories[1].name)}
              className="md:col-span-5 group relative overflow-hidden bg-[#F3ECE3] cursor-pointer min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-8 sm:p-10"
            >
              <Image
                src={displayCategories[1].image!}
                alt={displayCategories[1].name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#352722]/85 via-[#352722]/30 to-transparent transition-opacity duration-500" />
              
              <div className="relative z-10 text-[#FAF7F2]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E9C9C5] font-semibold block mb-1">
                  COLLECTION • {displayCategories[1].count} ITEMS
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal mb-2">
                  {displayCategories[1].name}
                </h3>
                <p className="text-sm text-[#FAF7F2]/80 font-light max-w-sm mb-4 hidden sm:block">
                  {displayCategories[1].tagline}
                </p>
                <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] font-medium text-[#FAF7F2] group-hover:text-[#E9C9C5] transition-colors">
                  <span>Explore Ritual</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 3: Haircare (Span 5) */}
          {displayCategories[2] && (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleCategoryClick(displayCategories[2].name)}
              className="md:col-span-5 group relative overflow-hidden bg-[#F3ECE3] cursor-pointer min-h-[340px] sm:min-h-[400px] flex flex-col justify-end p-8 sm:p-10"
            >
              <Image
                src={displayCategories[2].image!}
                alt={displayCategories[2].name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#352722]/85 via-[#352722]/30 to-transparent transition-opacity duration-500" />
              
              <div className="relative z-10 text-[#FAF7F2]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E9C9C5] font-semibold block mb-1">
                  COLLECTION • {displayCategories[2].count} ITEMS
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal mb-2">
                  {displayCategories[2].name}
                </h3>
                <p className="text-sm text-[#FAF7F2]/80 font-light max-w-sm mb-4 hidden sm:block">
                  {displayCategories[2].tagline}
                </p>
                <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] font-medium text-[#FAF7F2] group-hover:text-[#E9C9C5] transition-colors">
                  <span>Explore Ritual</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 4: Body Care (Span 7) */}
          {displayCategories[3] && (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleCategoryClick(displayCategories[3].name)}
              className="md:col-span-7 group relative overflow-hidden bg-[#F3ECE3] cursor-pointer min-h-[340px] sm:min-h-[400px] flex flex-col justify-end p-8 sm:p-10"
            >
              <Image
                src={displayCategories[3].image!}
                alt={displayCategories[3].name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#352722]/85 via-[#352722]/30 to-transparent transition-opacity duration-500" />
              
              <div className="relative z-10 text-[#FAF7F2]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E9C9C5] font-semibold block mb-1">
                  COLLECTION • {displayCategories[3].count} ITEMS
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal mb-2">
                  {displayCategories[3].name}
                </h3>
                <p className="text-sm text-[#FAF7F2]/80 font-light max-w-md mb-4 hidden sm:block">
                  {displayCategories[3].tagline}
                </p>
                <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] font-medium text-[#FAF7F2] group-hover:text-[#E9C9C5] transition-colors">
                  <span>Explore Ritual</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
