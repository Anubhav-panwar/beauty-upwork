"use client";

import React, { useState } from "react";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { Product, CATEGORIES } from "@/data/products";

interface BestsellersSectionProps {
  products: Product[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function BestsellersSection({
  products,
  activeCategory,
  onSelectCategory,
}: BestsellersSectionProps) {
  const [filter, setFilter] = useState<string>("all");

  // Keep internal filter synced if passed from prop, or allow local switching
  const currentCategory = activeCategory || filter;

  // Filter products by category
  const filteredProducts =
    currentCategory === "all"
      ? products.filter((p) => p.isBestseller)
      : products.filter((p) => p.category === currentCategory);

  const categories = [
    { id: "all", name: "All Bestsellers" },
    { id: "Skincare", name: "Skincare" },
    { id: "Makeup", name: "Makeup" },
    { id: "Haircare", name: "Haircare" },
    { id: "Body Care", name: "Body Care" },
  ];

  const handleTabClick = (catId: string) => {
    setFilter(catId);
    onSelectCategory(catId);
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#FAF7F2] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E6DFD5] gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C7A70] font-semibold block mb-2">
              CLIENT LOVED FAVORITES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#352722] font-normal tracking-tight">
              Your New Beauty Obsessions
            </h2>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => handleTabClick("all")}
              className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] font-medium text-[#352722] hover:text-[#C88D8A] transition-colors cursor-pointer"
            >
              <span>Shop All ({products.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabClick(cat.id)}
                className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 rounded-none whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#352722] text-[#FAF7F2] shadow-sm"
                    : "bg-[#F3ECE3] text-[#4A3A34] hover:bg-[#E9C9C5]/50 hover:text-[#352722]"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#F3ECE3]/40 border border-[#E6DFD5] p-8">
            <p className="font-serif text-2xl text-[#352722] mb-2">
              No products found in this category
            </p>
            <p className="text-sm text-[#8C7A70] mb-6">
              Try switching back to view all our bestsellers.
            </p>
            <button
              onClick={() => handleTabClick("all")}
              className="px-6 py-3 bg-[#352722] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium"
            >
              Show All Products
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
