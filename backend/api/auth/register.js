import { registerUser } from "../../controllers/authController.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await registerUser(req, res);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
