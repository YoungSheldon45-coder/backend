// File: pages/api/dietCharts/[id].js
import { updateDietChart } from "../../controllers/dietChartController.js";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { id } = req.query;  // Get the diet chart ID from the query params
    await updateDietChart(req, res, id);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
