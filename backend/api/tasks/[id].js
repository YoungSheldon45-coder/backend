import { getTaskById, updateTaskStatus, deleteTask } from "../../../backend/controllers/taskController.js";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    await getTaskById(req, res);
  } else if (req.method === "PUT") {
    await updateTaskStatus(req, res);
  } else if (req.method === "DELETE") {
    await deleteTask(req, res);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
