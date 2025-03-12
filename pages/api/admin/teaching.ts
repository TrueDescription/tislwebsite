import type { NextApiRequest, NextApiResponse } from "next";
import { getDB } from './db';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await getDB();

    if (req.method === "PUT") {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: "Missing content field" });
      }
      await db.run(`INSERT OR IGNORE INTO teaching (id, content) VALUES (1, '')`);
      await db.run(`UPDATE teaching SET content = ? WHERE id=1`, content);

      return res.status(200).json({ message: "Teaching content updated" });
    }

    if (req.method === "GET") {
      const row = await db.get(`SELECT content FROM teaching WHERE id=1`);
      if (!row) {
        return res.status(200).json({ content: "" });
      }
      return res.status(200).json({ content: row.content });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
