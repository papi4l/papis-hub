"use client";
import dynamic from "next/dynamic";

const PayButton = dynamic(() => import("../components/PayButton"), { ssr: false });

export default function Checkout() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Checkout</h1>
      <PayButton />
    </div>
  );
}
