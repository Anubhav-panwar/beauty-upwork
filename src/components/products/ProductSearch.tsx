"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Plus, ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useUIStore } from "@/store/ui-store";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const { isSearchOpen, closeSearch, openQuickView } = useUIStore();
  const { addItem } = useCartStore();

  const matchingProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.keyIngredients.some((ing) => ing.toLowerCase().includes(q))
    );
  }, [query]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addItem(product, 1);
    toast.success(`Added ${product.name} to bag`);
  };

  const handleProductSelect = (product: Product) => {
    closeSearch();
    openQuickView(product);
  };

  const popularTags = ["Serum", "Moisturizer", "Lip", "Hair Mask", "Botanical"];

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSearch}
            className="fixed inset-0 bg-[#352722]/60 backdrop-blur-md"
          />

          {/* Search Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#E6DFD5] shadow-2xl z-10 overflow-hidden flex flex-col max-h-[80vh]"
          >
            {/* Input Header */}
            <div className="p-4 sm:p-6 border-b border-[#E6DFD5] bg-white flex items-center gap-3">
              <Search className="w-5 h-5 text-[#8C7A70] shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products by name, category, or ingredient..."
                className="w-full bg-transparent text-[#352722] placeholder-[#8C7A70]/60 text-base sm:text-lg focus:outline-none font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 text-[#8C7A70] hover:text-[#352722]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={closeSearch}
                className="p-2 text-[#352722] hover:bg-[#F3ECE3] rounded-full transition-colors ml-1"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Suggestions when empty */}
            {!query.trim() && (
              <div className="p-6 bg-[#FAF7F2]">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#8C7A70] font-semibold block mb-3">
                  POPULAR SEARCHES
                </span>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3.5 py-1.5 bg-[#F3ECE3] hover:bg-[#E9C9C5]/50 text-[#352722] text-xs font-medium tracking-wide transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#E6DFD5]">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#8C7A70] font-semibold block mb-3">
                    FEATURED ESSENTIALS
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {PRODUCTS.slice(0, 2).map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleProductSelect(item)}
                        className="flex items-center space-x-3 p-2 bg-white border border-[#E6DFD5] hover:border-[#C88D8A] cursor-pointer transition-colors"
                      >
                        <div className="relative w-12 h-12 bg-[#F3ECE3] shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div className="overflow-hidden">
                          <p className="font-serif text-xs text-[#352722] truncate">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-[#8C7A70]">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Results List */}
            {query.trim() && (
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-[#F3ECE3]">
                {matchingProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="font-serif text-xl text-[#352722] mb-1">
                      No results found for "{query}"
                    </p>
                    <p className="text-xs text-[#8C7A70] max-w-xs mx-auto">
                      Check your spelling or explore our popular categories like
                      Skincare, Makeup, or Haircare.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="pb-3 text-xs text-[#8C7A70] flex justify-between items-center">
                      <span>Found {matchingProducts.length} product(s)</span>
                      <span className="text-[10px] uppercase tracking-wider">
                        Press ESC to close
                      </span>
                    </div>
                    {matchingProducts.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleProductSelect(product)}
                        className="py-3 flex items-center justify-between gap-4 hover:bg-[#F3ECE3]/50 px-2 rounded-sm cursor-pointer transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="relative w-14 h-16 bg-[#F3ECE3] shrink-0 border border-[#E6DFD5]">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-[#8C7A70]">
                              {product.category}
                            </span>
                            <h4 className="font-serif text-base text-[#352722]">
                              {product.name}
                            </h4>
                            <p className="text-xs text-[#8C7A70]">
                              {product.size}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className="font-serif text-base font-medium text-[#352722]">
                            {formatPrice(product.price)}
                          </span>
                          <button
                            onClick={(e) => handleAddToCart(e, product)}
                            className="p-2 bg-[#352722] hover:bg-[#4A3A34] text-[#FAF7F2] transition-colors"
                            aria-label={`Add ${product.name} to bag`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
