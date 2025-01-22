import multer from "multer";
import path from "path";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), "public", "authors");
    await fs.mkdir(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `temp-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });
const uploadMiddleware = upload.single("avatar");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  await new Promise((resolve, reject) => {
    uploadMiddleware(req, res, (err) => {
      if (err) return reject(err);
      resolve(null);
    });
  });

  try {
    const { author } = req.body;
    if (!author) {
      throw new Error("Author is required in the request body.");
    }
    if (!req.file) {
      throw new Error("No file uploaded.");
    }

    const uploadedFilePath = path.join(process.cwd(), "public", "authors", req.file.filename);
    const ext = path.extname(req.file.originalname);
    const newFileName = `${author.replace(/ /g, "-")}${ext}`;
    const newFilePath = path.join(process.cwd(), "public", "authors", newFileName);

    await fs.rename(uploadedFilePath, newFilePath);

    const filePath = `/authors/${newFileName}`;
    console.log(`File uploaded for author "${author}": ${filePath}`);

    return res.status(200).json({ message: "Avatar updated successfully", filePath });
  } catch (error) {
    console.error("Error handling upload:", error);
    return res.status(500).json({ error: error.message || "Failed to upload avatar." });
  }
}
