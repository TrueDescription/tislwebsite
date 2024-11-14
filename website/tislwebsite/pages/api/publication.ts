import { NextApiRequest, NextApiResponse } from "next";
import { openDb } from "@/lib/db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Invalid or missing slug parameter" });
  }

  const db = openDb();
  const publication = db.prepare(`
    SELECT id, authors, date, publication_types, publication, publication_short, title, url_pdf, abstract, url_preprint, url_code, url_dataset, url_poster, url_project, url_slides, url_source, url_video
    FROM publications
    WHERE id = ?
  `).get(slug);

  if (publication) {
    res.status(200).json(publication);
  } else {
    res.status(404).json(null);
  }
}
