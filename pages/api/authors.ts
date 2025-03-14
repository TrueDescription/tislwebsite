import { NextApiRequest, NextApiResponse } from "next";
import { getAllAuthors } from "@/lib/db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const authors = getAllAuthors();
  // console.log(authors);

  if (authors) {
    res.status(200).json(authors);
  } else {
    res.status(404).json(null);
  }
}
