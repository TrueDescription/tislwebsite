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
    const news = await db.all("SELECT * FROM news");
    return res.status(200).json(news);
  } catch (error) {
    console.error("Error in GET /api/news:", error);
    return res.status(500).json({ message: "Failed to fetch news." });
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await getDB();
    const data = req.body;

    const defaults = {
      class: "",
      date: "",
      content: "",
    };

    const dataWithDefaults = { ...defaults, ...data };

    const result = await db.run(
      `INSERT INTO news (
        class, date, content
      ) VALUES (?, ?, ?)`,
      [
        dataWithDefaults.class,
        dataWithDefaults.date,
        dataWithDefaults.content,
      ]
    );

    const insertedPublication = await db.get(
      "SELECT * FROM news WHERE id = ?",
      result.lastID
    );

    return res
      .status(200)
      .json({ message: "News added successfully", publication: insertedPublication });
  } catch (error) {
    console.error("Error in POST /api/news:", error);
    return res
      .status(500)
      .json({ message: "Failed to add news: " + error.message });
  }
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await getDB();
    const data = req.body;

    // const {
    //   id,
    //   iconType,
    //   date,
    //   content,
    // } = data;
    // const insertData = {"id" : data.id, 
    //     "class" : data.class, 
    //     "date" : data.date, 
    //     "content" : data.content}
    if (!data.id) {
      return res.status(400).json({ message: "News ID is required." });
    }

    await db.run(
      `UPDATE news SET
        class = ?,
        date = ?,
        content = ?,
       WHERE id = ?`,
      [
        data.class,
        data.date,
        data.content
      ]
    );

    const updatedPublication = await db.get(
      "SELECT * FROM publications WHERE id = ?",
      data.id
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
