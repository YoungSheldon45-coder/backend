// File: pages/api/patients/index.js
import { getPatients } from "../../controllers/patientController.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await getPatients(req, res);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
