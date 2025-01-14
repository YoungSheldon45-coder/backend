// File: pages/api/dietCharts/patient/[patientId].js
import { getDietChartForPatient } from "../../../controllers/dietChartController.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { patientId } = req.query;  // Get the patient ID from the query params
    await getDietChartForPatient(req, res, patientId);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
