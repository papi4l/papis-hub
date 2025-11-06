"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Success() {
  const router = useRouter();
  const { ref, amount } = router.query; // Get transaction info from URL

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000); // Auto redirect after 5 seconds
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
      style={{
        background: "linear-gradient(135deg, #006D77 0%, #F7F3EB 100%)",
      }}
    >
      <div className="max-w-md w-full bg-[rgba(255,255,255,0.95)] backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-[#B08D57]/40">
        <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-[#B08D57] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold" style={{ color: "#006D77" }}>
          Payment Successful
        </h1>

        {/* Display transaction info */}
        <p className="mt-2 text-sm text-[#7E837D]">
          Payment Amount: {amount || "N/A"} GHS
        </p>
        <p className="text-sm text-[#7E837D]">
          Transaction Ref: {ref || "N/A"}
        </p>

        <p className="mt-3 text-sm text-[#7E837D]">
          Thank you — your payment was processed successfully.
        </p>

        <div className="mt-6 flex gap-3 justify-center">
          <Link
            href="/"
            className="px-4 py-2 bg-white text-[#006D77] border border-[#B08D57]/30 rounded-full hover:underline"
          >
            Back Home
          </Link>
          <Link
            href="/payment"
            className="px-4 py-2 bg-[#B08D57] text-white rounded-full hover:opacity-90"
          >
            Make another payment
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-4">Redirecting automatically in a few seconds...</p>

        <div className="mt-8 text-xs text-[#7E837D]">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-[#B08D57] rounded-full animate-ping"></div>
            <span>100% Secure Checkout — SSL Encrypted & Verified</span>
          </div>
        </div>
      </div>
    </main>
  );
}