import { getUserProfile } from "../../controllers/authController.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Call the getUserProfile controller logic
    await getUserProfile(req, res);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
