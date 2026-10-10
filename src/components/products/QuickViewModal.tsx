"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Heart, Plus, Minus, ShoppingBag, Sparkles, Check } from "lucide-react";
import { useUIStore } from "@/store/ui-store";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

export default function QuickViewModal() {
  const { quickViewProduct, closeQuickView } = useUIStore();
  const { addItem } = useCartStore();
  const { toggleItem, isInWishlist } = useWishlistStore();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"about" | "ingredients" | "howToUse">("about");

  if (!quickViewProduct) return null;

  const isFavorite = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addItem(quickViewProduct, quantity);
    toast.success(`Added ${quantity} × ${quickViewProduct.name} to bag`);
    closeQuickView();
    setQuantity(1);
  };

  const handleToggleWishlist = () => {
    const added = toggleItem(quickViewProduct);
    if (added) {
      toast.success("Saved to Wishlist");
    } else {
      toast.info("Removed from Wishlist");
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuickView}
          className="fixed inset-0 bg-[#352722]/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 280 }}
          className="relative w-full max-w-4xl bg-[#FAF7F2] border border-[#E6DFD5] shadow-2xl z-10 overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-20 p-2 text-[#352722] hover:bg-[#F3ECE3] rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left: Image Container */}
            <div className="md:col-span-5 relative bg-[#F3ECE3] min-h-[320px] md:min-h-[500px]">
              <Image
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {quickViewProduct.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 bg-[#352722] text-[#FAF7F2] text-[10px] uppercase font-semibold tracking-wider">
                    {quickViewProduct.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Right: Product Details & Controls */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF7F2]">
              <div>
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-xs text-[#8C7A70] mb-2">
                  <span className="uppercase tracking-[0.2em] font-semibold text-[#8C7A70]">
                    {quickViewProduct.category}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <div className="flex text-[#C88D8A]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold text-[#352722]">
                      {quickViewProduct.rating}
                    </span>
                    <span className="text-[#8C7A70]">
                      ({quickViewProduct.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#352722] font-normal leading-tight mb-2">
                  {quickViewProduct.name}
                </h3>

                {/* Size */}
                <p className="text-xs text-[#8C7A70] font-light mb-4">
                  {quickViewProduct.size}
                </p>

                {/* Price */}
                <div className="flex items-baseline space-x-3 mb-6">
                  <span className="font-serif text-2xl font-medium text-[#352722]">
                    {formatPrice(quickViewProduct.price)}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-sm text-[#8C7A70] line-through font-light">
                      {formatPrice(quickViewProduct.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Detail Tabs */}
                <div className="flex space-x-4 border-b border-[#E6DFD5] mb-4 text-xs uppercase tracking-wider font-medium">
                  <button
                    onClick={() => setActiveTab("about")}
                    className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                      activeTab === "about"
                        ? "border-[#352722] text-[#352722]"
                        : "border-transparent text-[#8C7A70] hover:text-[#352722]"
                    }`}
                  >
                    The Ritual
                  </button>
                  <button
                    onClick={() => setActiveTab("ingredients")}
                    className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                      activeTab === "ingredients"
                        ? "border-[#352722] text-[#352722]"
                        : "border-transparent text-[#8C7A70] hover:text-[#352722]"
                    }`}
                  >
                    Key Actives
                  </button>
                  <button
                    onClick={() => setActiveTab("howToUse")}
                    className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                      activeTab === "howToUse"
                        ? "border-[#352722] text-[#352722]"
                        : "border-transparent text-[#8C7A70] hover:text-[#352722]"
                    }`}
                  >
                    How To Use
                  </button>
                </div>

                {/* Tab Content */}
                <div className="text-sm text-[#4A3A34] font-light leading-relaxed min-h-[90px] mb-6">
                  {activeTab === "about" && (
                    <p>{quickViewProduct.description}</p>
                  )}
                  {activeTab === "ingredients" && (
                    <div className="flex flex-wrap gap-2">
                      {quickViewProduct.keyIngredients.map((ing, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#F3ECE3] text-[#352722] text-xs font-normal"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  )}
                  {activeTab === "howToUse" && (
                    <p>{quickViewProduct.howToUse}</p>
                  )}
                </div>
              </div>

              {/* Action controls */}
              <div className="pt-6 border-t border-[#E6DFD5] space-y-4">
                <div className="flex items-center gap-4">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#E6DFD5] bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 text-[#352722] hover:bg-[#F3ECE3] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-4 text-sm font-medium text-[#352722]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 text-[#352722] hover:bg-[#F3ECE3] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Bag button */}
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-3.5 px-6 bg-[#352722] hover:bg-[#4A3A34] text-[#FAF7F2] text-xs font-medium tracking-[0.16em] uppercase transition-colors flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#E9C9C5]" />
                    <span>
                      Add to Bag • {formatPrice(quickViewProduct.price * quantity)}
                    </span>
                  </button>

                  {/* Wishlist toggle */}
                  <button
                    onClick={handleToggleWishlist}
                    className={`p-3.5 border transition-colors ${
                      isFavorite
                        ? "border-[#C88D8A] bg-[#FAF7F2] text-[#C88D8A]"
                        : "border-[#E6DFD5] text-[#352722] hover:bg-[#F3ECE3]"
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFavorite ? "fill-[#C88D8A]" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
