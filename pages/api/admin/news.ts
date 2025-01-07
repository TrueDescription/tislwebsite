import { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from './db';

async function handleGetAll(res: NextApiResponse) {
  const db = await getDB();
  const news = await db.all('SELECT * FROM news');
  res.status(200).json(news);
}

async function handleUpdate(req: NextApiRequest, res: NextApiResponse) {
  const db = await getDB();
  const { id, class: newsClass, date, content } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'ID is required to update a news entry.' });
  }

  await db.run(
    `UPDATE news
     SET class = ?,
         date = ?,
         content = ?
     WHERE id = ?`,
    [newsClass, date, content, id]
  );

  res.status(200).json({ message: 'News entry updated successfully' });
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
