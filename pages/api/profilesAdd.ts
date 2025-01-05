import { NextApiRequest, NextApiResponse } from "next";
import { getDB } from "./admin/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    console.log("API Request Received");

    const db = await getDB();
    const data = req.body;

    const {
      author,
      superuser = 0, 
      role = "",
      organization_name = "",
      organization_url = "",
      bio = "",
      interests = [], 
      education = "",
      profile_bio = "",
      social_links = [], 
      personal_website = "",
    } = data;

    console.log("Received Data:", data);

    if (!author) {
      return res.status(400).json({ message: "Author is required." });
    }
    console.log(interests);
    console.log(social_links);

    const interestsString = JSON.parse(interests).join(", ");
    const socialLinksString = JSON.parse(social_links).join(", ");
    await db.run(
      `INSERT INTO profiles (
        author, superuser, role, organization_name, organization_url, bio,
        interests, education, profile_bio, social_links, personal_website
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        author,
        superuser ? 1 : 0,
        role,
        organization_name,
        organization_url,
        bio,
        interestsString,
        education,
        profile_bio,
        socialLinksString,
        personal_website,
      ]
    );

    const insertedProfile = await db.get(
      "SELECT * FROM profiles WHERE author = ?",
      author
    );

    console.log("Inserted Profile:", insertedProfile);

    return res
      .status(200)
      .json({ message: "Profile added successfully", profile: insertedProfile });
  } catch (error) {
    console.error("Error in POST /api/admin/profiles:", error);
    return res.status(500).json({
      message: `Add failed: ${error.message || "Unknown error"}`,
    });
  }
}
