export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: false, message: "Method not allowed" });
  }

  const { email, amount, metadata, callback_url } = req.body || {};

  if (!email || amount === undefined) {
    return res.status(400).json({ status: false, message: "Missing required fields: email and amount" });
  }

  const numericAmount = Number(amount);
  if (Number.isNaN(numericAmount) || numericAmount <= 0) {
    return res.status(400).json({ status: false, message: "Invalid amount. Must be a positive number." });
  }

  const payload = {
    email,
    amount: Math.round(numericAmount * 100), // convert to minor units (pesewas)
  };

  if (metadata) payload.metadata = metadata;
  if (callback_url) payload.callback_url = callback_url;

  const currencyEnv = process.env.PAYSTACK_CURRENCY || process.env.NEXT_PUBLIC_PAYSTACK_CURRENCY;
  if (currencyEnv) payload.currency = String(currencyEnv).toUpperCase();

  console.log("create-transaction payload:", payload);

  try {
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("Paystack response:", response.status, data);

    return res.status(response.ok ? 200 : response.status || 400).json(data);
  } catch (error) {
    console.error("create-transaction error:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
}