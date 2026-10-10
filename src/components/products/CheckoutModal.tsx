"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, CheckCircle2, Lock, CreditCard, Sparkles } from "lucide-react";
import { useUIStore } from "@/store/ui-store";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

export default function CheckoutModal() {
  const { isCheckoutOpen, closeCheckout } = useUIStore();
  const { items, getSubtotal, clearCart } = useCartStore();
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState("");

  const subtotal = getSubtotal();
  const shipping = subtotal >= 50 ? 0 : 6.0;
  const total = subtotal + shipping;

  const handlePlaceDemoOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const fakeId = `MB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(fakeId);
    setOrderComplete(true);
    clearCart();
    toast.success("Demo order placed successfully!", {
      description: `Reference number: ${fakeId}`,
    });
  };

  const handleClose = () => {
    setOrderComplete(false);
    closeCheckout();
  };

  if (!isCheckoutOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-[#352722]/65 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 280 }}
          className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#E6DFD5] shadow-2xl z-10 overflow-hidden my-6"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 p-2 text-[#352722] hover:bg-[#F3ECE3] rounded-full transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>

          {orderComplete ? (
            /* Order Success State */
            <div className="p-8 sm:p-12 text-center">
              <div className="w-16 h-16 bg-[#F3ECE3] text-[#C88D8A] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C7A70] font-semibold block mb-2">
                DEMO ORDER COMPLETE
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#352722] mb-3">
                Thank You for Your Ritual
              </h3>

              <p className="text-sm text-[#4A3A34] font-light max-w-md mx-auto mb-6 leading-relaxed">
                Your demo order reference is{" "}
                <span className="font-mono font-semibold text-[#352722]">
                  {orderId}
                </span>
                . In a live production deployment, this step triggers order
                confirmation emails, CRM updates, and payment fulfillment.
              </p>

              <div className="p-4 bg-[#F3ECE3]/70 border border-[#E6DFD5] max-w-md mx-auto text-xs text-[#8C7A70] text-left space-y-1 mb-8">
                <p className="font-medium text-[#352722]">Next Steps for Client Launch:</p>
                <p>• Connect Stripe, Shopify, or custom merchant gateway.</p>
                <p>• Hook up automated email confirmation notifications.</p>
                <p>• Sync inventory with your warehouse or store POS.</p>
              </div>

              <button
                onClick={handleClose}
                className="px-8 py-3.5 bg-[#352722] text-[#FAF7F2] text-xs font-medium uppercase tracking-[0.18em] hover:bg-[#4A3A34] transition-colors"
              >
                Return to Store
              </button>
            </div>
          ) : (
            /* Checkout Form & Demo Disclaimer */
            <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
              {/* Demo Notice Banner */}
              <div className="mb-6 p-4 bg-[#F3ECE3] border-l-4 border-[#C88D8A] flex items-start space-x-3 text-xs text-[#352722]">
                <ShieldCheck className="w-5 h-5 text-[#C88D8A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-0.5">
                    Client Demonstration Notice
                  </p>
                  <p className="text-[#8C7A70] leading-relaxed">
                    This is an interactive frontend demo. No actual charge will be
                    made. Live payment gateway integration (Stripe, PayPal, or
                    Shopify) will be connected during production setup.
                  </p>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#352722] mb-6">
                Demo Checkout Review
              </h3>

              {/* Order Items Preview */}
              <div className="mb-6 pb-6 border-b border-[#E6DFD5]">
                <span className="text-[11px] uppercase tracking-wider text-[#8C7A70] font-semibold block mb-3">
                  ITEMS IN YOUR BAG ({items.length})
                </span>
                <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative w-10 h-12 bg-[#F3ECE3] border border-[#E6DFD5] shrink-0">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-[#352722]">
                            {item.product.name}
                          </p>
                          <p className="text-[#8C7A70]">
                            Qty: {item.quantity} • {item.product.size}
                          </p>
                        </div>
                      </div>
                      <span className="font-serif font-medium text-sm text-[#352722]">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Shipping Form */}
              <form onSubmit={handlePlaceDemoOrder} className="space-y-4">
                <span className="text-[11px] uppercase tracking-wider text-[#8C7A70] font-semibold block">
                  SHIPPING & CONTACT (DEMO ONLY)
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#8C7A70] mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Sophia"
                      required
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E6DFD5] text-xs text-[#352722] focus:outline-none focus:border-[#352722]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#8C7A70] mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Laurent"
                      required
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E6DFD5] text-xs text-[#352722] focus:outline-none focus:border-[#352722]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-[#8C7A70] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="sophia.laurent@example.com"
                    required
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E6DFD5] text-xs text-[#352722] focus:outline-none focus:border-[#352722]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="block text-[11px] text-[#8C7A70] mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      defaultValue="New York"
                      required
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E6DFD5] text-xs text-[#352722] focus:outline-none focus:border-[#352722]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#8C7A70] mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      defaultValue="10001"
                      required
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E6DFD5] text-xs text-[#352722] focus:outline-none focus:border-[#352722]"
                    />
                  </div>
                </div>

                {/* Totals Breakdown */}
                <div className="pt-4 border-t border-[#E6DFD5] space-y-2 text-xs">
                  <div className="flex justify-between text-[#8C7A70]">
                    <span>Subtotal</span>
                    <span className="font-serif text-[#352722] text-sm">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#8C7A70]">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Complimentary" : "$6.00"}</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold text-[#352722] pt-2 border-t border-[#F3ECE3]">
                    <span>Total Amount</span>
                    <span className="font-serif text-lg">{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#352722] hover:bg-[#4A3A34] text-[#FAF7F2] text-xs font-medium tracking-[0.18em] uppercase transition-colors flex items-center justify-center space-x-2 shadow-md mt-6 cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Place Simulated Order ({formatPrice(total)})</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
