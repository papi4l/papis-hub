// ...existing code...
"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import PaystackButton (browser only)
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

export default function Payment() {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY;
  const [email, setEmail] = useState(""); // user must fill
  const [amount, setAmount] = useState(250); // fixed capitalization
  const [name, setName] = useState("");
  const [service, setService] = useState("Graphic Design");

  const services = [
    { name: "Graphic Design", price: 250 },
    { name: "Social Media Strategy", price: 400 },
    { name: "Copywriting", price: 300 },
    { name: "Data Entry", price: 200 },
    { name: "Product Sourcing", price: 350 },
  ];

  useEffect(() => {
    const selected = services.find((s) => s.name === service);
    setAmount(selected ? selected.price : 250);
  }, [service]);

  // ...existing code...
  const componentProps = {
    email,
    amount: amount * 100, // amount in kobo
    metadata: { name, service },
    publicKey,
    text: `Pay ₵${amount}`,
    onSuccess: () => {
      window.location.href = "/success"; // redirect after success
    },
    onClose: () => alert("Payment cancelled."),
  };
  // ...existing code...

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-6"
      style={{
        background: "linear-gradient(135deg, #006D77 0%, #F7F3EB 100%)",
      }}
    >
      <div className="max-w-md w-full bg-[rgba(255,255,255,0.85)] backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-[#B08D57]/40">
        <h1
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: "#006D77" }}
        >
          Secure Payment
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg border border-[#B08D57]/30 focus:ring-2 focus:ring-[#B08D57] outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg border border-[#B08D57]/30 focus:ring-2 focus:ring-[#B08D57] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            className="w-full p-3 rounded-lg border border-[#B08D57]/30 focus:ring-2 focus:ring-[#B08D57] outline-none"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            {services.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name} — ₵{s.price}
              </option>
            ))}
          </select>

          <div className="text-center mt-6">
            <PaystackButton
              {...componentProps}
              className={`w-full bg-[#B08D57] hover:bg-[#7E837D] text-white font-semibold py-3 rounded-full transition-all shadow-lg hover:shadow-xl ${
                !email || !name ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!email || !name}
            />
          </div>
        </form>

        <div className="text-center mt-6">
          <Link href="/" className="text-[#006D77] hover:underline text-sm">
            ← Back Home
          </Link>
        </div>

        {/* Trust Badges Section */}
        <div className="mt-10 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#B08D57"
                viewBox="0 0 24 24"
                stroke="#B08D57"
                strokeWidth={1.5}
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11v2h6v-2zM4 13v-2a5 5 0 0110 0v2m1 0h5a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5a2 2 0 012-2h5z"
                />
              </svg>
              <span className="text-[#7E837D] text-sm font-medium">
                Verified & Encrypted — Powered by Paystack
              </span>
            </div>

            <div className="flex justify-center gap-4 flex-wrap mt-2">
              {[
                { src: "/trust/visa.png", alt: "Visa" },
                { src: "/trust/mastercard.png", alt: "Mastercard" },
                { src: "/trust/paystack.png", alt: "Paystack" },
                { src: "/trust/ssl-secure.png", alt: "SSL Secured" },
              ].map((badge) => (
                <div
                  key={badge.alt}
                  className="bg-white/80 border border-[#B08D57]/30 rounded-lg p-2 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
                >
                  <img
                    src={badge.src}
                    alt={badge.alt}
                    className="h-7 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-4 text-xs text-[#7E837D]">
              <div className="w-2 h-2 bg-[#B08D57] rounded-full animate-ping"></div>
              <span>100% Secure Checkout — SSL Encrypted & Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}