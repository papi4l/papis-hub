"use client";
import PayButton from "../components/PayButton.js";

export default function Checkout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Checkout</h1>
      <PayButton />
    </div>
  );
}
