"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { useUIStore } from "@/store/ui-store";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const [mounted, setMounted] = useState(false);
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    getSubtotal,
    getTotalItems,
  } = useCartStore();

  const { openCheckout } = useUIStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const subtotal = getSubtotal();
  const totalItems = getTotalItems();
  const freeShippingThreshold = 50;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleProceedCheckout = () => {
    closeCart();
    openCheckout();
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
            onClick={closeCart}
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
                <ShoppingBag className="w-5 h-5 text-[#352722]" />
                <h3 className="font-serif text-xl sm:text-2xl text-[#352722] font-normal tracking-wide">
                  Your Shopping Bag
                </h3>
                <span className="text-xs bg-[#E9C9C5] text-[#352722] font-semibold px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              </div>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="p-1.5 text-[#352722] hover:bg-[#F3ECE3] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div className="px-6 py-3.5 bg-[#F3ECE3] border-b border-[#E6DFD5]">
              <div className="flex items-center justify-between text-xs text-[#352722] mb-1.5 font-medium">
                {remainingForFreeShipping > 0 ? (
                  <span>
                    Add{" "}
                    <span className="font-bold text-[#C88D8A]">
                      {formatPrice(remainingForFreeShipping)}
                    </span>{" "}
                    more for free standard shipping
                  </span>
                ) : (
                  <span className="text-[#352722] font-semibold flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#C88D8A]" />
                    <span>You've unlocked complimentary shipping!</span>
                  </span>
                )}
                <span className="text-[10px] text-[#8C7A70]">
                  {Math.round(progressPercent)}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-[#E6DFD5] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C88D8A] transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#F3ECE3]">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="p-4 bg-[#F3ECE3] rounded-full text-[#8C7A70] mb-4">
                    <ShoppingBag className="w-8 h-8 stroke-[1.25]" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#352722] mb-2 font-normal">
                    Your bag is empty
                  </h4>
                  <p className="text-sm text-[#8C7A70] max-w-xs font-light mb-6">
                    Discover our best-selling botanical serums, creams, and lip tints
                    to begin your daily ritual.
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-6 py-3 bg-[#352722] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#4A3A34] transition-colors cursor-pointer"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.product.id} className="py-4 flex gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-20 h-24 bg-[#F3ECE3] shrink-0 border border-[#E6DFD5] overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
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
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            aria-label={`Remove ${item.product.name}`}
                            className="p-1 text-[#8C7A70] hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-[#8C7A70] mt-0.5 font-light">
                          {item.product.size}
                        </p>
                      </div>

                      {/* Quantity & Unit Price */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E6DFD5] bg-white">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="p-1.5 text-[#352722] hover:bg-[#F3ECE3] transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-medium text-[#352722]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="p-1.5 text-[#352722] hover:bg-[#F3ECE3] transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-serif text-base font-medium text-[#352722]">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-[#E6DFD5] space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-[#8C7A70] font-light">
                    <span>Subtotal</span>
                    <span className="font-serif text-[#352722] font-medium text-base">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#8C7A70] font-light text-xs">
                    <span>Estimated Shipping</span>
                    <span>
                      {subtotal >= freeShippingThreshold ? "Complimentary" : "$6.00"}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F3ECE3] flex justify-between items-baseline">
                  <span className="font-medium text-sm text-[#352722]">Total</span>
                  <span className="font-serif text-xl font-semibold text-[#352722]">
                    {formatPrice(
                      subtotal >= freeShippingThreshold ? subtotal : subtotal + 6
                    )}
                  </span>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={handleProceedCheckout}
                  className="w-full py-4 bg-[#352722] hover:bg-[#4A3A34] text-[#FAF7F2] text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={closeCart}
                  className="w-full text-center text-xs text-[#8C7A70] hover:text-[#352722] uppercase tracking-wider underline underline-offset-4 font-light cursor-pointer transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
