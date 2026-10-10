"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Heart, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { useUIStore } from "@/store/ui-store";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory?: (category: string) => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  onSelectCategory,
}: MobileMenuProps) {
  const { getTotalItems, openCart } = useCartStore();
  const { items: wishlistItems, openWishlist } = useWishlistStore();
  const { openSearch } = useUIStore();

  const navLinks = [
    { label: "Shop All", href: "#products", category: "all" },
    { label: "Skincare", href: "#products", category: "Skincare" },
    { label: "Makeup", href: "#products", category: "Makeup" },
    { label: "Haircare", href: "#products", category: "Haircare" },
    { label: "Body Care", href: "#products", category: "Body Care" },
    { label: "Our Story", href: "#our-story" },
    { label: "Why Us", href: "#benefits" },
  ];

  const handleLinkClick = (href: string, category?: string) => {
    onClose();
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
            onClick={onClose}
            className="fixed inset-0 bg-[#352722]/50 backdrop-blur-sm z-50 md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed inset-y-0 left-0 w-full max-w-sm bg-[#FAF7F2] z-50 md:hidden shadow-2xl flex flex-col justify-between"
          >
            {/* Top Bar */}
            <div className="p-6 border-b border-[#E6DFD5] flex items-center justify-between">
              <span className="font-serif text-xl tracking-[0.2em] font-medium text-[#352722]">
                MAISON BEAUTÉ
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 text-[#352722] hover:bg-[#F3ECE3] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav list */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <nav className="space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <button
                      onClick={() => handleLinkClick(link.href, link.category)}
                      className="w-full flex items-center justify-between py-3 text-lg font-serif tracking-wide text-[#352722] hover:text-[#C88D8A] transition-colors border-b border-[#F3ECE3]"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#8C7A70]/60" />
                    </button>
                  </motion.div>
                ))}
              </nav>

              {/* Quick Actions inside mobile menu */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={() => {
                    onClose();
                    openSearch();
                  }}
                  className="w-full flex items-center space-x-3 p-3 bg-[#F3ECE3]/70 hover:bg-[#F3ECE3] rounded-lg text-[#352722] text-sm font-medium transition-colors"
                >
                  <Search className="w-4 h-4 text-[#8C7A70]" />
                  <span>Search Products</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    openWishlist();
                  }}
                  className="w-full flex items-center justify-between p-3 bg-[#F3ECE3]/70 hover:bg-[#F3ECE3] rounded-lg text-[#352722] text-sm font-medium transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Heart className="w-4 h-4 text-[#C88D8A]" />
                    <span>My Wishlist</span>
                  </div>
                  {wishlistItems.length > 0 && (
                    <span className="text-xs bg-[#C88D8A] text-white px-2 py-0.5 rounded-full font-semibold">
                      {wishlistItems.length}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => {
                    onClose();
                    openCart();
                  }}
                  className="w-full flex items-center justify-between p-3 bg-[#352722] text-[#FAF7F2] hover:bg-[#4A3A34] rounded-lg text-sm font-medium transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <ShoppingBag className="w-4 h-4 text-[#E9C9C5]" />
                    <span>View Shopping Bag</span>
                  </div>
                  <span className="text-xs bg-[#FAF7F2] text-[#352722] px-2 py-0.5 rounded-full font-bold">
                    {getTotalItems()}
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="p-6 bg-[#F3ECE3]/50 border-t border-[#E6DFD5] text-xs text-[#8C7A70] text-center">
              <p className="font-serif italic text-sm text-[#352722] mb-1">
                "The art of everyday beauty"
              </p>
              <p>Clean formulation • Cruelty-free • Dermatologist tested</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
