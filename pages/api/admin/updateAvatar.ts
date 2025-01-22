// /pages/api/admin/updateAvatar.ts
import multer from "multer";
import path from "path";
import fs from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false, // Multer will handle the form parsing
  },
};

// 1) Configure Multer to store files in /public/authors with a TEMPORARY filename
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), "public", "authors");
    await fs.mkdir(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Here, `req.body.author` is not yet available.
    // We'll store using a timestamp or original file name.
    const ext = path.extname(file.originalname);
    // Example: temp-1679928591910.jpg
    cb(null, `temp-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });
const uploadMiddleware = upload.single("avatar");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // 2) Run Multer to handle the file upload
  await new Promise<void>((resolve, reject) => {
    uploadMiddleware(req, res, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });

  try {
    // 3) Now `req.body.author` should be available
    const author = req.body.author;
    if (!author) {
      // If author is not passed, handle the error
      throw new Error("Author is required in the request body.");
    }

    if (!req.file) {
      // If no file was uploaded, handle the error
      throw new Error("No file uploaded.");
    }

    // 4) Rename the file on disk to use the author’s name
    const uploadedFilePath = path.join(process.cwd(), "public", "authors", req.file.filename);
    const ext = path.extname(req.file.originalname); // keep original extension
    const newFileName = `${author.replace(/ /g, "-")}${ext}`;
    const newFilePath = path.join(process.cwd(), "public", "authors", newFileName);

    await fs.rename(uploadedFilePath, newFilePath);

    // 5) Return the path that can be used to access the file
    const fileURL = `/authors/${newFileName}`;

    console.log(`File uploaded for author ${author}: ${fileURL}`);
    res.status(200).json({ message: "Avatar updated successfully", filePath: fileURL });
  } catch (error: any) {
    console.error("Error handling upload:", error);
    res.status(500).json({ error: error.message || "Failed to upload avatar." });
  }
}
