// File: pages/api/dietCharts/create.js
import { createDietChart } from "../../../controllers/dietChartController.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await createDietChart(req, res);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
