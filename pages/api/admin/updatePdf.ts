import multer from "multer";
import path from "path";
import fs from "fs/promises";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const baseDir = path.join(process.cwd(), "public", "publication");
    await fs.mkdir(baseDir, { recursive: true });
    cb(null, baseDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // should be ".pdf"
    cb(null, `temp-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });
const uploadMiddleware = upload.single("pdf");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    await new Promise<void>((resolve, reject) => {
      uploadMiddleware(req, res, (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });

    const { title } = req.body;

    if (!title) {
      throw new Error("A 'title' field is required in the form data.");
    }

    if (!req.file) {
      throw new Error("No PDF file uploaded.");
    }

    const sanitizedTitle = title.replace(/ /g, "-");
    const pdfDir = path.join(process.cwd(), "public", "publication", sanitizedTitle);
    await fs.mkdir(pdfDir, { recursive: true }); // ensure sub-folder

    const oldPath = path.join(process.cwd(), "public", "publication", req.file.filename);

    const newFileName = `${sanitizedTitle}.pdf`; 
    const newPath = path.join(pdfDir, newFileName);

    await fs.rename(oldPath, newPath);

    const fileURL = `/publication/${sanitizedTitle}/${newFileName}`;

    console.log(`PDF uploaded for publication "${title}": ${fileURL}`);

    return res.status(200).json({
      message: "PDF updated (uploaded) successfully",
      filePath: fileURL,
    });
  } catch (error: any) {
    console.error("Error in updatePdf handler:", error);
    return res.status(500).json({
      error: error.message || "Failed to upload PDF.",
    });
  }
}
