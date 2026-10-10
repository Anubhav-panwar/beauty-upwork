"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Client-side email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      toast.success("Welcome to Maison Beauté!", {
        description: "Your 15% demo welcome code is BEAUTY15.",
      });
      setEmail("");
    }, 600);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E6DFD5] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center justify-center p-3 bg-[#F3ECE3] rounded-full mb-6 text-[#C88D8A]">
          <Mail className="w-5 h-5 stroke-[1.5]" />
        </div>

        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C7A70] font-semibold block mb-3">
          JOIN OUR SOCIETY
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#352722] font-normal tracking-tight mb-4">
          A Little Beauty in Your Inbox
        </h2>

        <p className="text-base sm:text-lg text-[#8C7A70] font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Get beauty inspiration, new arrivals, and a little something special.
          Subscribers receive complimentary access to private seasonal edits.
        </p>

        {status === "success" ? (
          <div className="inline-flex items-center space-x-3 p-4 bg-[#F3ECE3] border border-[#C88D8A]/40 text-[#352722] animate-in fade-in zoom-in">
            <CheckCircle2 className="w-5 h-5 text-[#C88D8A]" />
            <div className="text-left">
              <p className="font-medium text-sm">You are on the list!</p>
              <p className="text-xs text-[#8C7A70]">
                Use code <span className="font-mono font-semibold text-[#352722]">BEAUTY15</span> for 15% off your first order.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter your email address"
                className={`w-full px-5 py-3.5 bg-white border ${
                  error ? "border-red-400" : "border-[#E6DFD5]"
                } text-[#352722] placeholder-[#8C7A70]/60 text-sm focus:outline-none focus:border-[#352722] transition-colors rounded-none`}
              />
              {error && (
                <p className="text-left text-xs text-red-600 mt-1 absolute left-0 -bottom-5">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-3.5 bg-[#352722] text-[#FAF7F2] hover:bg-[#4A3A34] text-xs font-medium tracking-[0.16em] uppercase transition-colors shrink-0 flex items-center justify-center space-x-2 rounded-none cursor-pointer"
            >
              <span>{status === "loading" ? "Subscribing..." : "Subscribe"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-[#8C7A70] font-light mt-6">
          * Demo newsletter simulation. No actual marketing emails will be sent.
        </p>

      </div>
    </section>
  );
}
