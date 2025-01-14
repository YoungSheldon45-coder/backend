// File: pages/api/patients/[id].js
import { getPatientById, updatePatient, deletePatient } from "../../controllers/patientController.js";

export default async function handler(req, res) {
  const { id } = req.query; // Extract the patient ID from the query parameters

  if (req.method === "GET") {
    // Get a single patient by ID
    await getPatientById(req, res, id);
  } else if (req.method === "PUT") {
    // Update patient data
    await updatePatient(req, res, id);
  } else if (req.method === "DELETE") {
    // Delete patient
    await deletePatient(req, res, id);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
