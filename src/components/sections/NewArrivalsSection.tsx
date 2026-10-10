"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/data/products";

interface NewArrivalsSectionProps {
  products: Product[];
}

export default function NewArrivalsSection({
  products,
}: NewArrivalsSectionProps) {
  const newArrivals = products.filter((p) => p.isNewArrival);

  return (
    <section className="py-20 lg:py-28 bg-[#F3ECE3]/40 border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E6DFD5]/80 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#8C7A70] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C88D8A]" />
              <span>JUST LAUNCHED</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#352722] font-normal tracking-tight">
              Fresh on Your Vanity
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#8C7A70] max-w-md font-light leading-relaxed">
            Our newest botanical formulations, designed to bring restorative
            radiance and sensory pleasure into your day.
          </p>
        </div>

        {/* 4 New Arrival Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
