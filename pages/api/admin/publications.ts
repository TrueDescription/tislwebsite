import { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from './db';

async function handleGetAll(res: NextApiResponse) {
  const db = await getDB();
  const publications = await db.all('SELECT * FROM publications');
  res.status(200).json(publications);
}

async function handleUpdate(req: NextApiRequest, res: NextApiResponse) {
  const db = await getDB();
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
  } = req.body;

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
      id
    ]
  );

  res.status(200).json({ message: 'Publication updated successfully' });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.cookies['admin-auth']) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    return handleGetAll(res);
  } else if (req.method === 'PUT') {
    return handleUpdate(req, res);
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
