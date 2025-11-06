// ...existing code...
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, amount } = req.body;

    try {
      const response = await fetch("https://api.paystack.co/transaction/initialize", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: amount * 100,
          currency: "GHS",
        }),
      });

      const data = await response.json();
      if (data.status) res.status(200).json(data);
      else res.status(400).json(data);
    } catch (error) {
      res.status(500).json({ status: false, message: "Server error", error });
    }
  } else {
    res.status(405).json({ status: false, message: "Method not allowed" });
  }
}
// ...existing code...