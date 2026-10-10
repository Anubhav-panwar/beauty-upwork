"use client";

import React from "react";
import { Sparkles, ShoppingBag, ShieldCheck, Headphones } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Thoughtfully Selected",
      subtitle: "Beauty Essentials",
      description:
        "Every formula is hand-curated to ensure soothing textures and effortless skin harmony.",
    },
    {
      icon: ShoppingBag,
      title: "Simple & Convenient",
      subtitle: "Seamless Shopping",
      description:
        "Intuitive navigation, quick bag access, and a delightful digital shopping experience.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Experience",
      subtitle: "Protected Checkout",
      description:
        "Modern encryption standards ready for production payment gateway integration.",
    },
    {
      icon: Headphones,
      title: "Here For You",
      subtitle: "Dedicated Support",
      description:
        "Friendly ritual assistance and beauty recommendations whenever you need guidance.",
    },
  ];

  return (
    <section id="benefits" className="py-16 lg:py-20 bg-[#FAF7F2] border-b border-[#E6DFD5] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {benefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start p-6 bg-[#F3ECE3]/40 border border-[#E6DFD5]/80 hover:border-[#C88D8A]/50 transition-colors duration-300"
              >
                <div className="p-3 bg-[#FAF7F2] border border-[#E6DFD5] text-[#352722] mb-5 shadow-sm">
                  <IconComponent className="w-5 h-5 stroke-[1.5] text-[#C88D8A]" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A70] font-semibold mb-1">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-lg text-[#352722] font-normal mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#4A3A34]/80 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
