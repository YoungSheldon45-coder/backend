import { getTasks, createTasks } from "../../backend/controllers/taskController.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await getTasks(req, res);
  } else if (req.method === "POST") {
    await createTasks(req, res);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
