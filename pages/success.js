"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.push("/"), 7000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "linear-gradient(135deg,#006D77 0%,#F7F3EB 100%)" }}
    >
      <div className="max-w-md w-full bg-[rgba(255,255,255,0.95)] rounded-2xl shadow-2xl p-8 text-center border border-[#B08D57]/40">
        <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-[#B08D57] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold" style={{ color: "#006D77" }}>
          Payment Successful
        </h1>

        <p className="mt-3 text-sm text-[#7E837D]">
          Thank you — your payment was processed successfully. You will be redirected to the homepage shortly.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link href="/" className="px-4 py-2 bg-white text-[#006D77] border border-[#B08D57]/30 rounded-full">
            Back Home
          </Link>
          <Link href="/payment" className="px-4 py-2 bg-[#B08D57] text-white rounded-full">
            Make another payment
          </Link>
        </div>

        <p className="text-xs text-[#7E837D] mt-4">Redirecting automatically in a few seconds...</p>
      </div>
    </div>
  );
}