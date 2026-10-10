"use client";

import React, { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { useUIStore } from "@/store/ui-store";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  onSelectCategory?: (category: string) => void;
}

export default function Header({ onSelectCategory }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { getTotalItems, openCart } = useCartStore();
  const { items: wishlistItems, openWishlist } = useWishlistStore();
  const { openSearch } = useUIStore();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalCartCount = mounted ? getTotalItems() : 0;
  const totalWishlistCount = mounted ? wishlistItems.length : 0;

  const handleNavClick = (href: string, category?: string) => {
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E6DFD5] py-3.5"
            : "bg-[#FAF7F2] py-5 border-b border-[#F3ECE3]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Mobile hamburger & Desktop primary nav */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="p-1.5 -ml-1.5 text-[#352722] hover:text-[#C88D8A] md:hidden transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>

              <nav className="hidden md:flex items-center space-x-7 text-xs lg:text-[13px] tracking-[0.14em] uppercase font-medium text-[#352722]">
                <button
                  onClick={() => handleNavClick("#products", "all")}
                  className="hover:text-[#C88D8A] transition-colors py-1 relative group cursor-pointer"
                >
                  Shop All
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C88D8A] transition-all duration-300 group-hover:w-full" />
                </button>
                <button
                  onClick={() => handleNavClick("#products", "Skincare")}
                  className="hover:text-[#C88D8A] transition-colors py-1 relative group cursor-pointer"
                >
                  Skincare
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C88D8A] transition-all duration-300 group-hover:w-full" />
                </button>
                <button
                  onClick={() => handleNavClick("#products", "Makeup")}
                  className="hover:text-[#C88D8A] transition-colors py-1 relative group cursor-pointer"
                >
                  Makeup
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C88D8A] transition-all duration-300 group-hover:w-full" />
                </button>
                <button
                  onClick={() => handleNavClick("#products", "Haircare")}
                  className="hover:text-[#C88D8A] transition-colors py-1 relative group cursor-pointer"
                >
                  Haircare
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C88D8A] transition-all duration-300 group-hover:w-full" />
                </button>
                <button
                  onClick={() => handleNavClick("#our-story")}
                  className="hover:text-[#C88D8A] transition-colors py-1 relative group cursor-pointer"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C88D8A] transition-all duration-300 group-hover:w-full" />
                </button>
              </nav>
            </div>

            {/* Center: Brand Logo */}
            <div className="text-center">
              <a
                href="#"
                className="group inline-flex flex-col items-center text-center cursor-pointer"
              >
                <span className="font-serif text-2xl sm:text-3xl lg:text-[32px] tracking-[0.24em] font-light text-[#352722] group-hover:text-[#C88D8A] transition-colors">
                  MAISON BEAUTÉ
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#8C7A70] -mt-1 font-sans hidden sm:block">
                  PARIS • NEW YORK
                </span>
              </a>
            </div>

            {/* Right: Icons (Search, Wishlist, Bag) */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Search button */}
              <button
                onClick={openSearch}
                aria-label="Search catalog"
                className="p-2 text-[#352722] hover:text-[#C88D8A] transition-colors rounded-full hover:bg-[#F3ECE3]/60 cursor-pointer"
              >
                <Search className="w-5 h-5 stroke-[1.75]" />
              </button>

              {/* Wishlist button */}
              <button
                onClick={openWishlist}
                aria-label="View wishlist"
                className="relative p-2 text-[#352722] hover:text-[#C88D8A] transition-colors rounded-full hover:bg-[#F3ECE3]/60 cursor-pointer"
              >
                <Heart className="w-5 h-5 stroke-[1.75]" />
                {totalWishlistCount > 0 && (
                  <span className="absolute top-1 right-1 flex items-center justify-center min-w-4 h-4 px-1 bg-[#C88D8A] text-white text-[10px] font-bold rounded-full animate-in zoom-in">
                    {totalWishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Bag button */}
              <button
                onClick={openCart}
                aria-label="Open shopping bag"
                className="relative p-2 text-[#352722] hover:text-[#C88D8A] transition-colors rounded-full hover:bg-[#F3ECE3]/60 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
                {totalCartCount > 0 && (
                  <span className="absolute top-1 right-1 flex items-center justify-center min-w-4 h-4 px-1 bg-[#352722] text-[#FAF7F2] text-[10px] font-bold rounded-full animate-in zoom-in">
                    {totalCartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onSelectCategory={onSelectCategory}
      />
    </>
  );
}
