import { NextApiRequest, NextApiResponse } from "next";
import { getDB } from "./admin/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "GET":
        return handleGet(req, res);
      case "POST":
        return handlePost(req, res);
      case "PUT":
        return handlePut(req, res);
      default:
        return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error in API handler:", error);
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await getDB();
    const publications = await db.all("SELECT * FROM publications");
    return res.status(200).json(publications);
  } catch (error) {
    console.error("Error in GET /api/publications:", error);
    return res.status(500).json({ message: "Failed to fetch publications." });
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await getDB();
    const data = req.body;

    const defaults = {
      authors: "",
      date: "",
      publication_types: "",
      publication: "",
      publication_short: "",
      title: "",
      url_pdf: "",
      abstract: "",
      url_preprint: "",
      url_code: "",
      url_dataset: "",
      url_poster: "",
      url_project: "",
      url_slides: "",
      url_source: "",
      url_video: "",
      cite : ""
    };

    const dataWithDefaults = { ...defaults, ...data };

    const result = await db.run(
      `INSERT INTO publications (
        authors, date, publication_types, publication, publication_short, title,
        url_pdf, abstract, url_preprint, url_code, url_dataset, url_poster,
        url_project, url_slides, url_source, url_video, cite
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        dataWithDefaults.authors,
        dataWithDefaults.date,
        dataWithDefaults.publication_types,
        dataWithDefaults.publication,
        dataWithDefaults.publication_short,
        dataWithDefaults.title,
        dataWithDefaults.url_pdf,
        dataWithDefaults.abstract,
        dataWithDefaults.url_preprint,
        dataWithDefaults.url_code,
        dataWithDefaults.url_dataset,
        dataWithDefaults.url_poster,
        dataWithDefaults.url_project,
        dataWithDefaults.url_slides,
        dataWithDefaults.url_source,
        dataWithDefaults.url_video,
        dataWithDefaults.cite,
      ]
    );

    const insertedPublication = await db.get(
      "SELECT * FROM publications WHERE id = ?",
      result.lastID
    );

    return res
      .status(200)
      .json({ message: "Publication added successfully", publication: insertedPublication });
  } catch (error) {
    console.error("Error in POST /api/publications:", error);
    return res
      .status(500)
      .json({ message: "Failed to add publication: " + error.message });
  }
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await getDB();
    const data = req.body;

    const {
      id,
      authors,
      date,
      publication_types,
      publication,
      publication_short,
      title,
      url_pdf,
      abstract,
      url_preprint,
      url_code,
      url_dataset,
      url_poster,
      url_project,
      url_slides,
      url_source,
      url_video,
      cite,
    } = data;
    console.log(cite);

    if (!id) {
      return res.status(400).json({ message: "Publication ID is required." });
    }

    await db.run(
      `UPDATE publications SET
        authors = ?,
        date = ?,
        publication_types = ?,
        publication = ?,
        publication_short = ?,
        title = ?,
        url_pdf = ?,
        abstract = ?,
        url_preprint = ?,
        url_code = ?,
        url_dataset = ?,
        url_poster = ?,
        url_project = ?,
        url_slides = ?,
        url_source = ?,
        url_video = ?
        cite = ?
       WHERE id = ?`,
      [
        authors,
        date,
        publication_types,
        publication,
        publication_short,
        title,
        url_pdf,
        abstract,
        url_preprint,
        url_code,
        url_dataset,
        url_poster,
        url_project,
        url_slides,
        url_source,
        url_video,
        cite,
        id,
      ]
    );

    const updatedPublication = await db.get(
      "SELECT * FROM publications WHERE id = ?",
      id
    );

    return res
      .status(200)
      .json({ message: "Publication updated successfully", publication: updatedPublication });
  } catch (error) {
    console.error("Error in PUT /api/publications:", error);
    return res
      .status(500)
      .json({ message: "Failed to update publication: " + error.message });
  }
}
