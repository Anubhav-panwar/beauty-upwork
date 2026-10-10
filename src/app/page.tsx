"use client";

import React, { useState } from "react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CategorySection from "@/components/sections/CategorySection";
import BestsellersSection from "@/components/sections/BestsellersSection";
import CampaignSection from "@/components/sections/CampaignSection";
import NewArrivalsSection from "@/components/sections/NewArrivalsSection";
import BrandStorySection from "@/components/sections/BrandStorySection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { PRODUCTS } from "@/data/products";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#352722] selection:bg-[#E9C9C5] selection:text-[#352722]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Header */}
      <Header onSelectCategory={handleSelectCategory} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection />

        {/* 4. Category Collection */}
        <CategorySection onSelectCategory={handleSelectCategory} />

        {/* 5. Bestsellers Grid */}
        <BestsellersSection
          products={PRODUCTS}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* 6. Editorial Campaign Banner */}
        <CampaignSection />

        {/* 7. New Arrivals */}
        <NewArrivalsSection products={PRODUCTS} />

        {/* 8. Brand Philosophy / Story */}
        <BrandStorySection />

        {/* 9. Brand Benefits */}
        <BenefitsSection />

        {/* 10. Newsletter */}
        <NewsletterSection />
      </main>

      {/* 11. Complete Footer */}
      <Footer onSelectCategory={handleSelectCategory} />
    </div>
  );
}
