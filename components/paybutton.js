"use client";
import React from "react";

const PayButton = () => {
  const handlePayment = async () => {
    const res = await fetch("/api/create-transaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "Tfboppong@gmail.com", amount: 50 }),
    });

    const data = await res.json();

    if (data.status) {
      const handler = window.PaystackPop.setup({
        key: "pk_live_11d6dca05a321327a1bc8ba683255504c9aeada7",
        email: "Tfboppong@gmail.com",
        amount: 50 * 100,
        ref: data.data.reference,
        callback: async function (response) {
          try {
            const verifyRes = await fetch("/api/verify-transaction", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ reference: response.reference }),
            });
            const verifyData = await verifyRes.json();
            if (verifyData.status) window.location.href = "/success";
            else alert("Payment verification failed.");
          } catch (error) {
            alert("Error verifying payment.");
          }
        },
        onClose: function () { alert("Transaction cancelled."); },
      });
      handler.openIframe();
    } else alert("Failed to initialize transaction.");
  };

  return (
    <>
      <script src="https://js.paystack.co/v1/inline.js"></script>
      <button onClick={handlePayment}>Pay 50 GHS</button>
    </>
  );
};

export default PayButton;