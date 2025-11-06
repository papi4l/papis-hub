"use client";
import React from "react";
import dynamic from "next/dynamic";

const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

export default function PayButton(props) {
  // Forward all props to the PaystackButton
  return <PaystackButton {...props} />;
}