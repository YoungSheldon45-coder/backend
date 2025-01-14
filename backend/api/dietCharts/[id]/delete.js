// File: pages/api/dietCharts/[id]/delete.js
import { deleteDietChart } from "../../../controllers/dietChartController.js";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;  // Get the diet chart ID from the query params
    await deleteDietChart(req, res, id);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
