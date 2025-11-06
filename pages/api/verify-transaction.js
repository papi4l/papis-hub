// ...existing code...
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: false, message: "Method not allowed" });
  }

  const { email, amount } = req.body || {};

  if (!email || amount === undefined) {
    return res
      .status(400)
      .json({ status: false, message: "Missing required fields: email and amount" });
  }

  const numericAmount = Number(amount);
  if (Number.isNaN(numericAmount) || numericAmount <= 0) {
    return res
      .status(400)
      .json({ status: false, message: "Invalid amount. Must be a positive number." });
  }

  try {
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: Math.round(numericAmount * 100), // convert to kobo
        currency: "GHS",
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status || 400).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("create-transaction error:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
}
// ...existing code...