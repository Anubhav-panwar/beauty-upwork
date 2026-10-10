"use client";

import React, { useState } from "react";
import { ArrowUp, Heart, Sparkles } from "lucide-react";

// Clean, dependable inline SVGs for social brands
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  );
}

interface FooterProps {
  onSelectCategory?: (category: string) => void;
}

export default function Footer({ onSelectCategory }: FooterProps) {
  const [modalTitle, setModalTitle] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePlaceholderClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    setModalTitle(title);
  };

  return (
    <>
      <footer className="bg-[#352722] text-[#FAF7F2] pt-20 pb-12 border-t border-[#4A3A34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#4A3A34]">
            
            {/* Column 1: Brand & Bio (Span 4) */}
            <div className="lg:col-span-4">
              <span className="font-serif text-2xl tracking-[0.24em] font-light text-[#FAF7F2] block mb-3">
                MAISON BEAUTÉ
              </span>
              <p className="text-sm text-[#FAF7F2]/70 font-light leading-relaxed max-w-sm mb-6">
                A conscious celebration of daily beauty rituals. Thoughtfully
                crafted botanical skincare, velvety cosmetics, and restorative
                essentials that elevate your everyday routine.
              </p>
              
              <div className="flex items-center space-x-3 text-[#FAF7F2]/80">
                <a
                  href="#instagram"
                  onClick={(e) => handlePlaceholderClick(e, "Instagram")}
                  aria-label="Instagram"
                  className="p-2.5 bg-[#4A3A34] hover:bg-[#C88D8A] hover:text-[#FAF7F2] transition-colors rounded-full"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  onClick={(e) => handlePlaceholderClick(e, "Facebook")}
                  aria-label="Facebook"
                  className="p-2.5 bg-[#4A3A34] hover:bg-[#C88D8A] hover:text-[#FAF7F2] transition-colors rounded-full"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="#twitter"
                  onClick={(e) => handlePlaceholderClick(e, "Twitter")}
                  aria-label="Twitter"
                  className="p-2.5 bg-[#4A3A34] hover:bg-[#C88D8A] hover:text-[#FAF7F2] transition-colors rounded-full"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Shop (Span 3) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#E9C9C5] mb-5">
                The Collections
              </h4>
              <ul className="space-y-3 text-sm font-light text-[#FAF7F2]/80">
                <li>
                  <button
                    onClick={() => handleCategoryClick("Skincare")}
                    className="hover:text-[#E9C9C5] transition-colors cursor-pointer"
                  >
                    Botanical Skincare
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Makeup")}
                    className="hover:text-[#E9C9C5] transition-colors cursor-pointer"
                  >
                    Velvet Makeup
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Haircare")}
                    className="hover:text-[#E9C9C5] transition-colors cursor-pointer"
                  >
                    Restorative Haircare
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Body Care")}
                    className="hover:text-[#E9C9C5] transition-colors cursor-pointer"
                  >
                    Bath & Body Rituals
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("all")}
                    className="hover:text-[#E9C9C5] transition-colors cursor-pointer"
                  >
                    All Bestsellers
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Customer Care (Span 2) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#E9C9C5] mb-5">
                Customer Care
              </h4>
              <ul className="space-y-3 text-sm font-light text-[#FAF7F2]/80">
                <li>
                  <a
                    href="#shipping"
                    onClick={(e) => handlePlaceholderClick(e, "Shipping Policy")}
                    className="hover:text-[#E9C9C5] transition-colors"
                  >
                    Complimentary Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#returns"
                    onClick={(e) => handlePlaceholderClick(e, "Returns & Exchanges")}
                    className="hover:text-[#E9C9C5] transition-colors"
                  >
                    Returns & Guarantee
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handlePlaceholderClick(e, "FAQ & Care Guide")}
                    className="hover:text-[#E9C9C5] transition-colors"
                  >
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a
                    href="#tracking"
                    onClick={(e) => handlePlaceholderClick(e, "Order Tracking")}
                    className="hover:text-[#E9C9C5] transition-colors"
                  >
                    Track Demo Order
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: About & Atelier (Span 3) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#E9C9C5] mb-5">
                About The House
              </h4>
              <ul className="space-y-3 text-sm font-light text-[#FAF7F2]/80 mb-6">
                <li>
                  <a
                    href="#our-story"
                    className="hover:text-[#E9C9C5] transition-colors"
                  >
                    Our Founding Story
                  </a>
                </li>
                <li>
                  <a
                    href="#ingredients"
                    onClick={(e) => handlePlaceholderClick(e, "Clean Formulation Standard")}
                    className="hover:text-[#E9C9C5] transition-colors"
                  >
                    Botanical Sourcing
                  </a>
                </li>
                <li>
                  <a
                    href="#sustainability"
                    onClick={(e) => handlePlaceholderClick(e, "Packaging & Glass Recyclability")}
                    className="hover:text-[#E9C9C5] transition-colors"
                  >
                    Conscious Packaging
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handlePlaceholderClick(e, "Atelier Contact")}
                    className="hover:text-[#E9C9C5] transition-colors"
                  >
                    Client Relations
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/60 font-light gap-4">
            <div>
              <p>
                © {new Date().getFullYear()} MAISON BEAUTÉ. All rights reserved.
                Crafted as a client-ready luxury cosmetics e-commerce demo.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#privacy"
                onClick={(e) => handlePlaceholderClick(e, "Privacy Policy")}
                className="hover:text-[#FAF7F2] transition-colors"
              >
                Privacy
              </a>
              <a
                href="#terms"
                onClick={(e) => handlePlaceholderClick(e, "Terms of Service")}
                className="hover:text-[#FAF7F2] transition-colors"
              >
                Terms
              </a>
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top of page"
                className="inline-flex items-center space-x-1 hover:text-[#FAF7F2] transition-colors ml-4 cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Info placeholder modal for footer links */}
      {modalTitle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#352722]/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#FAF7F2] p-8 border border-[#E6DFD5] shadow-2xl text-[#352722]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C7A70] font-semibold block mb-1">
              DEMO PREVIEW NOTICE
            </span>
            <h3 className="font-serif text-2xl mb-3">{modalTitle}</h3>
            <p className="text-sm text-[#4A3A34] font-light leading-relaxed mb-6">
              This is a client demonstration page. In your customized production
              store, this link will navigate to your verified {modalTitle.toLowerCase()} page or integration.
            </p>
            <button
              onClick={() => setModalTitle(null)}
              className="w-full py-3 bg-[#352722] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#4A3A34] transition-colors"
            >
              Return to Demo
            </button>
          </div>
        </div>
      )}
    </>
  );
}
