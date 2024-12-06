import { NextApiRequest, NextApiResponse } from "next";
import { getAllPublications } from "@/lib/db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const publications = getAllPublications();

  if (publications) {
    res.status(200).json(publications);
  } else {
    res.status(404).json(null);
  }
}
