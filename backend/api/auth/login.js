import { loginUser } from "../../controllers/authController.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Call the loginUser controller logic
    await loginUser(req, res);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
