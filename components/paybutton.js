"use client";
import React, { useEffect } from "react";

const PayButton = () => {
  useEffect(() => {
    // Dynamically load Paystack script only on client
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handlePayment = async () => {
    try {
      const res = await fetch("/api/create-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "Tfboppong@gmail.com", amount: 50 }),
      });

      const data = await res.json();
      if (!data.status) {
        alert("Failed to initialize transaction.");
        return;
      }

      const handler = window.PaystackPop.setup({
        key: "pk_live_11d6dca05a321327a1bc8ba683255504c9aeada7",
        email: "Tfboppong@gmail.com",
        amount: 50 * 100,
        ref: data.data.reference,
        callback: async (response) => {
          try {
            const verifyRes = await fetch("/api/verify-transaction", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ reference: response.reference }),
            });
            const verifyData = await verifyRes.json();
            if (verifyData.status) {
              window.location.href = "/success";
            } else {
              alert("Payment verification failed.");
            }
          } catch {
            alert("Error verifying payment.");
          }
        },
        onClose: () => alert("Transaction cancelled."),
      });

      handler.openIframe();
    } catch (error) {
      alert("Something went wrong during payment setup.");
    }
  };

  return (
    <button
      onClick={handlePayment}
      style={{
        backgroundColor: "#0BCE83",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Pay 50 GHS
    </button>
  );
};

export default PayButton;
