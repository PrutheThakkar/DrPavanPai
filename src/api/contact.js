export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, phone, email, message } = req.body;

  try {
    // ✅ This must be Webhook1's URL (Dr. Pavan Pai), NOT Webhook (Dr. Prashant Makhija)
    const webhookUrl = "https://pruthe.app.n8n.cloud/webhook/b31572ee-6a3f-4b46-8f1c-eda3de345b35";

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        phone,
        email,
        message,
        submittedAt: new Date().toISOString(),
        source: "drpavanpai.com",
      }),
    });

    if (!response.ok) {
      console.error("n8n responded with:", response.status);
      return res.status(502).json({ success: false, error: "n8n webhook failed" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("n8n error:", error);
    return res.status(500).json({ success: false });
  }
}