import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import CartDrawer from "@/components/products/CartDrawer";
import WishlistDrawer from "@/components/products/WishlistDrawer";
import ProductSearch from "@/components/products/ProductSearch";
import QuickViewModal from "@/components/products/QuickViewModal";
import CheckoutModal from "@/components/products/CheckoutModal";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAISON BEAUTÉ — Luxury Botanical Skincare & Cosmetics",
  description:
    "Discover thoughtfully formulated beauty essentials designed to make every everyday ritual feel extraordinary. Organic botanicals, clinical actives, and sensory indulgence.",
  keywords: [
    "luxury skincare",
    "botanical beauty",
    "clean cosmetics",
    "face serum",
    "beauty ritual",
    "anti-aging moisturizer",
  ],
  openGraph: {
    title: "MAISON BEAUTÉ — The Art of Everyday Beauty",
    description:
      "Curated beauty essentials made to elevate your personal ritual with botanical luxury.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#352722] font-sans selection:bg-[#E9C9C5] selection:text-[#352722]">
        {children}
        <CartDrawer />
        <WishlistDrawer />
        <ProductSearch />
        <QuickViewModal />
        <CheckoutModal />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#352722",
              color: "#FAF7F2",
              border: "1px solid #4A3A34",
              fontFamily: "var(--font-sans)",
              borderRadius: "0.5rem",
              padding: "12px 18px",
            },
          }}
        />
      </body>
    </html>
  );
}
