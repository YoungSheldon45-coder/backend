// File: pages/api/patients/create.js
import { createPatient } from "../../controllers/patientController.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await createPatient(req, res);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
