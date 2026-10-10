"use client";

import React, { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="relative bg-[#352722] text-[#FAF7F2] text-xs sm:text-[13px] tracking-wide font-normal overflow-hidden z-40"
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center space-x-2 text-center">
            <Sparkles className="w-3.5 h-3.5 text-[#E9C9C5] hidden sm:inline-block animate-pulse" />
            <span className="font-light">
              Your beauty ritual starts here — discover your new favourites.
            </span>
            <span className="hidden md:inline text-[#E9C9C5] font-medium ml-2 underline underline-offset-4 cursor-pointer hover:text-white transition-colors">
              Complimentary shipping over $50
            </span>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close announcement"
            className="text-[#FAF7F2]/60 hover:text-[#FAF7F2] p-1 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
