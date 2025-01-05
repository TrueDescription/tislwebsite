import { NextApiRequest, NextApiResponse } from "next";
import { getDB } from "./admin/db"; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "DELETE") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const db = await getDB();
    const { author } = req.body;

    if (!author) {
      return res.status(400).json({ message: "Missing 'author' in request body." });
    }

    await db.run("DELETE FROM profiles WHERE author = ?", [author]);

    return res.status(200).json({ message: `Profile for '${author}' removed successfully.` });
  } catch (error) {
    console.error("Error removing profile:", error);
    return res.status(500).json({
      message: `Failed to remove profile: ${error instanceof Error ? error.message : "Unknown error"}`
    });
  }
}
