"use client";
import React from "react";
import dynamic from "next/dynamic";

const PaystackButton = dynamic(
  () => import("react-paystack").then((m) => m.PaystackButton),
  {
    ssr: false,
    loading: () => (
      <button
        type="button"
        disabled
        className="w-full bg-[#B08D57] text-white font-semibold py-3 rounded-full opacity-60 cursor-not-allowed"
      >
        Loading…
      </button>
    ),
  }
);

export default function PayButton(props) {
  // prefer provided publicKey prop, otherwise rely on env read in parent
  return <PaystackButton {...props} />;
}