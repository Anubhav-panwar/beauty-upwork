"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Trash2, Plus, ShoppingBag } from "lucide-react";
import { useWishlistStore } from "@/store/wishlist-store";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

export default function WishlistDrawer() {
  const [mounted, setMounted] = useState(false);
  const { items, isOpen, closeWishlist, removeItem } = useWishlistStore();
  const { addItem } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleMoveToCart = (product: any) => {
    addItem(product, 1);
    removeItem(product.id);
    toast.success(`Moved ${product.name} to your bag`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeWishlist}
            className="fixed inset-0 bg-[#352722]/50 backdrop-blur-sm z-50 transition-opacity"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-[#FAF7F2] z-50 shadow-2xl flex flex-col justify-between border-l border-[#E6DFD5]"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#E6DFD5] flex items-center justify-between bg-[#FAF7F2]">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 fill-[#C88D8A] text-[#C88D8A]" />
                <h3 className="font-serif text-xl sm:text-2xl text-[#352722] font-normal tracking-wide">
                  Saved Rituals
                </h3>
                <span className="text-xs bg-[#E9C9C5] text-[#352722] font-semibold px-2 py-0.5 rounded-full">
                  {items.length}
                </span>
              </div>
              <button
                onClick={closeWishlist}
                aria-label="Close wishlist"
                className="p-1.5 text-[#352722] hover:bg-[#F3ECE3] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#F3ECE3]">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="p-4 bg-[#F3ECE3] rounded-full text-[#8C7A70] mb-4">
                    <Heart className="w-8 h-8 stroke-[1.25]" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#352722] mb-2 font-normal">
                    Your wishlist is empty
                  </h4>
                  <p className="text-sm text-[#8C7A70] max-w-xs font-light mb-6">
                    Tap the heart icon on any product to curate your personal
                    beauty wishlist.
                  </p>
                  <button
                    onClick={closeWishlist}
                    className="px-6 py-3 bg-[#352722] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#4A3A34] transition-colors cursor-pointer"
                  >
                    Explore Products
                  </button>
                </div>
              ) : (
                items.map((product) => (
                  <div key={product.id} className="py-4 flex gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-20 h-24 bg-[#F3ECE3] shrink-0 border border-[#E6DFD5] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center"
                        sizes="80px"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif text-base text-[#352722] font-normal leading-tight">
                            {product.name}
                          </h4>
                          <button
                            onClick={() => removeItem(product.id)}
                            aria-label={`Remove ${product.name}`}
                            className="p-1 text-[#8C7A70] hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-[#8C7A70] mt-0.5 font-light">
                          {product.category} • {product.size}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <span className="font-serif text-base font-medium text-[#352722]">
                          {formatPrice(product.price)}
                        </span>

                        <button
                          onClick={() => handleMoveToCart(product)}
                          className="px-3 py-1.5 bg-[#352722] hover:bg-[#4A3A34] text-[#FAF7F2] text-[11px] font-medium tracking-wider uppercase transition-colors flex items-center space-x-1 cursor-pointer"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Add to Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-[#E6DFD5]">
                <button
                  onClick={closeWishlist}
                  className="w-full py-3.5 bg-[#FAF7F2] border border-[#352722] text-[#352722] hover:bg-[#F3ECE3] text-xs font-medium tracking-[0.16em] uppercase transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
