"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Plus, Eye, Star } from "lucide-react";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { useUIStore } from "@/store/ui-store";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const { addItem } = useCartStore();
  const { toggleItem, isInWishlist } = useWishlistStore();
  const { openQuickView } = useUIStore();

  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    addItem(product, 1);
    toast.success(`Added ${product.name} to your bag`, {
      description: `${product.size} • ${formatPrice(product.price)}`,
    });
    setTimeout(() => setIsAdding(false), 500);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    const added = toggleItem(product);
    if (added) {
      toast.success(`Saved to Wishlist`, {
        description: product.name,
      });
    } else {
      toast.info(`Removed from Wishlist`, {
        description: product.name,
      });
    }
  };

  const handleOpenQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <div
      className="group relative flex flex-col bg-[#FAF7F2] transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleOpenQuickView}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F3ECE3] border border-[#E6DFD5]/70">
        
        {/* Primary Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover object-center transition-all duration-700 ease-out ${
            isHovered && product.secondaryImage
              ? "opacity-0 scale-105"
              : "opacity-100 scale-100"
          }`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Secondary Image on Hover */}
        {product.secondaryImage && (
          <Image
            src={product.secondaryImage}
            alt={`${product.name} alternate view`}
            fill
            className={`object-cover object-center transition-all duration-700 ease-out ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}

        {/* Badge (Sale, Bestseller, New) */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span
              className={`px-2 py-0.5 text-[10px] uppercase font-semibold tracking-wider ${
                product.badge === "Sale"
                  ? "bg-[#C88D8A] text-[#FAF7F2]"
                  : product.badge === "New"
                  ? "bg-[#352722] text-[#FAF7F2]"
                  : "bg-[#FAF7F2] text-[#352722] border border-[#E6DFD5]"
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-2.5 right-2.5 z-10 p-2 rounded-full transition-all duration-300 ${
            isFavorite
              ? "bg-[#FAF7F2] text-[#C88D8A] shadow-md"
              : "bg-[#FAF7F2]/80 text-[#352722] hover:bg-[#FAF7F2] hover:text-[#C88D8A] shadow-sm"
          }`}
        >
          <Heart
            className={`w-4 h-4 transition-transform duration-200 active:scale-125 ${
              isFavorite ? "fill-[#C88D8A] text-[#C88D8A]" : "stroke-[1.75]"
            }`}
          />
        </button>

        {/* Desktop Quick Actions Floating Bar */}
        <div className="absolute inset-x-2 bottom-2 z-10 flex gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="flex-1 py-2.5 px-3 bg-[#352722] hover:bg-[#4A3A34] text-[#FAF7F2] text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{isAdding ? "Adding..." : "Quick Add"}</span>
          </button>

          <button
            onClick={handleOpenQuickView}
            aria-label="Quick preview"
            className="p-2.5 bg-[#FAF7F2] hover:bg-[#F3ECE3] text-[#352722] transition-colors border border-[#E6DFD5] shadow-md cursor-pointer"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="pt-3 pb-2 flex flex-col flex-1">
        
        {/* Category & Star Rating */}
        <div className="flex items-center justify-between text-[11px] text-[#8C7A70] mb-1">
          <span className="uppercase tracking-widest font-medium">
            {product.category}
          </span>
          <div className="flex items-center space-x-1 text-[#8C7A70]">
            <Star className="w-3 h-3 fill-[#C88D8A] text-[#C88D8A]" />
            <span className="font-medium text-[#352722]">{product.rating}</span>
            <span className="text-[10px] text-[#8C7A70]">({product.reviewCount})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="font-serif text-base sm:text-lg text-[#352722] group-hover:text-[#C88D8A] transition-colors line-clamp-1 font-normal mb-1">
          {product.name}
        </h3>

        {/* Size / Subtitle */}
        <p className="text-xs text-[#8C7A70] font-light mb-2">
          {product.size}
        </p>

        {/* Price Row */}
        <div className="mt-auto flex items-center justify-between pt-1">
          <div className="flex items-baseline space-x-2">
            <span className="font-serif text-base sm:text-lg font-medium text-[#352722]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#8C7A70] line-through font-light">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Mobile Quick Add Button */}
          <button
            onClick={handleAddToCart}
            className="md:hidden p-1.5 bg-[#352722] text-[#FAF7F2] rounded-none text-xs"
            aria-label={`Add ${product.name} to bag`}
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
