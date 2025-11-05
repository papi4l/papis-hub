// components/Payment.js
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

export default function Payment() {
  const publicKey =
    process.env.NEXT_PUBLIC_PAYSTACK_KEY || "pk_test_REPLACE_WITH_YOUR_KEY";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(5000); // amount in kobo (₦50)

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      custom_fields: [
        {
          display_name: "Full Name",
          variable_name: "full_name",
          value: name,
        },
      ],
    },
    publicKey,
    text: "Pay with Paystack",
    onSuccess: (reference) => {
      alert(`Payment successful! Reference: ${reference.reference}`);
    },
    onClose: () => alert("Payment closed."),
  };

  return (
    <div
      className="max-w-md mx-auto p-8 rounded-2xl shadow-lg mt-10"
      style={{
        backgroundColor: "#f8f8f8",
        color: "#222",
      }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Make a Test Payment
      </h2>

      <label className="block text-sm mb-1">Full Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full mb-3 p-3 rounded border focus:outline-none focus:ring focus:ring-gray-300"
      />

      <label className="block text-sm mb-1">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full mb-3 p-3 rounded border focus:outline-none focus:ring focus:ring-gray-300"
      />

      <label className="block text-sm mb-1">Amount (NGN)</label>
      <input
        type="number"
        value={Math.round(amount / 100)}
        onChange={(e) => setAmount(Number(e.target.value) * 100)}
        className="w-full mb-4 p-3 rounded border focus:outline-none focus:ring focus:ring-gray-300"
      />

      <PaystackButton
        {...componentProps}
        className="w-full bg-black text-white py-3 rounded-lg font-medium hover:scale-105 transition-transform"
      />

      <p className="text-xs text-center mt-4 text-gray-500">
        Test Mode • Replace your Paystack test key in <code>.env.local</code>
      </p>
    </div>
  );
}
