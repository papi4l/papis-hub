"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Payment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const services = [
    { id: "graphic", name: "Graphic Design", price: 250 },
    { id: "social", name: "Social Media Strategy", price: 400 },
    { id: "copy", name: "Copywriting", price: 300 },
    { id: "data", name: "Data Entry", price: 200 },
    { id: "sourcing", name: "Product Sourcing", price: 350 },
  ];

  // default to first service
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const selectedService =
    services.find((s) => s.id === selectedServiceId) || services[0];
  const [amount, setAmount] = useState(selectedService.price);

  // keep amount synced when the selected service changes
  useEffect(() => {
    const svc = services.find((s) => s.id === selectedServiceId);
    setAmount(svc ? svc.price : services[0].price);
  }, [selectedServiceId]);

  // update selection and amount
  const selectService = (id) => {
    setSelectedServiceId(id);
    const svc = services.find((s) => s.id === id);
    setAmount(svc ? svc.price : services[0].price);
  };

  const startPayment = async () => {
    if (!name.trim() || !email.trim()) {
      alert("Please enter name and email");
      return;
    }
    try {
      const resp = await fetch("/api/create-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          amount,
          // server converts to minor units
          metadata: { name, service: selectedService.name, serviceId: selectedService.id },
        }),
      });

      // Be defensive: some server errors return HTML/text, not JSON.
      const raw = await resp.text();
      let data;
      try {
        data = JSON.parse(raw);
      } catch (parseErr) {
        console.error("Invalid JSON response from /api/create-transaction:", raw);
        alert("Payment initialization failed: invalid server response (check terminal).");
        return;
      }

      if (!resp.ok) {
        console.error("Init failed:", data);
        alert(data.message || data.error || "Payment initialization failed");
        return;
      }
      const access_code = data?.data?.access_code;
      if (!access_code) {
        console.error("No access_code:", data);
        alert("Payment initialization failed (no access code)");
        return;
      }
      const PaystackPop = (await import("@paystack/inline-js")).default;
      const popup = new PaystackPop();
      popup.resumeTransaction(access_code);
    } catch (err) {
      console.error("startPayment error:", err);
      alert("An error occurred while starting payment.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "linear-gradient(135deg,#006D77 0%,#F7F3EB 100%)" }}
    >
      <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-[rgba(255,255,255,0.95)] rounded-2xl shadow">
        <div>
          <h2 className="text-xl font-bold mb-4" style={{ color: "#006D77" }}>
            Choose a service
          </h2>

          {/* Dropdown showing product names and amounts */}
          <div className="mb-4">
            <label htmlFor="serviceSelect" className="block mb-2 font-medium">
              Select service
            </label>
            <select
              id="serviceSelect"
              value={selectedServiceId}
              onChange={(e) => selectService(e.target.value)}
              className="w-full p-3 border rounded"
            >
              <option value="">-- Select a service --</option>
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} — ₵{s.price}
                </option>
              ))}
            </select>
          </div>

          {/* Optional visual list with radios (kept in case you want both UI patterns) */}
          <div className="space-y-3">
            {services.map((s) => (
              <label
                key={s.id}
                className={`flex items-center justify-between p-3 border rounded cursor-pointer transition ${
                  selectedServiceId === s.id
                    ? "border-[#B08D57] bg-[#fffaf2]"
                    : "border-gray-200 hover:shadow-sm"
                }`}
                onClick={() => selectService(s.id)}
              >
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="text-sm text-gray-500">Service</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-semibold">₵{s.price}</div>
                  <input
                    type="radio"
                    name="service"
                    checked={selectedServiceId === s.id}
                    onChange={() => selectService(s.id)}
                    className="w-4 h-4"
                  />
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4" style={{ color: "#006D77" }}>
            Your details & payment
          </h2>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full mb-3 p-3 border rounded"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full mb-3 p-3 border rounded"
          />

          <div className="mb-4 p-3 border rounded bg-white">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">Selected</span>
              <span className="text-sm text-gray-600">{selectedService.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">Total</div>
              <div className="text-2xl font-extrabold">₵{amount}</div>
            </div>
          </div>

          <button
            onClick={startPayment}
            className="w-full bg-[#B08D57] text-white py-3 rounded-full font-semibold"
          >
            Pay Now
          </button>

          <div className="mt-4 text-center">
            <Link href="/" className="text-[#006D77] hover:underline text-sm">
              ← Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}