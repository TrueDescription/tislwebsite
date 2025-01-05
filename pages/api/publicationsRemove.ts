import { NextApiRequest, NextApiResponse } from "next";
import { getDB } from "./admin/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "DELETE") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const db = await getDB();
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Missing 'id' in request body." });
    }

    await db.run("DELETE FROM publications WHERE id = ?", [id]);

    return res.status(200).json({ message: `Publication with ID '${id}' removed successfully.` });
  } catch (error) {
    console.error("Error removing publication:", error);
    return res.status(500).json({
      message: `Failed to remove publication: ${error instanceof Error ? error.message : "Unknown error"}`
    });
  }
}
