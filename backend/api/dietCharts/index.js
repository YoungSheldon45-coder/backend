// File: pages/api/dietCharts/index.js
import { getDietCharts } from "../../controllers/dietChartController.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await getDietCharts(req, res);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
