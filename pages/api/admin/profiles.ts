import { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from './db';

async function handleGetAll(res: NextApiResponse) {
  const db = await getDB();
  const profiles = await db.all('SELECT * FROM profiles');
  res.status(200).json(profiles);
}

async function handleUpdate(req: NextApiRequest, res: NextApiResponse) {
  const db = await getDB();
  const { author, superuser, role, organization_name, organization_url, bio, interests, education, profile_bio, social_links, personal_website } = req.body;

  await db.run(
    `UPDATE profiles SET
      superuser = ?,
      role = ?,
      organization_name = ?,
      organization_url = ?,
      bio = ?,
      interests = ?,
      education = ?,
      profile_bio = ?,
      social_links = ?,
      personal_website = ?
     WHERE author = ?`,
    [
      superuser ? 1 : 0,
      role,
      organization_name,
      organization_url,
      bio,
      interests,
      education,
      profile_bio,
      social_links,
      personal_website,
      author
    ]
  );

  res.status(200).json({ message: 'Profile updated successfully' });
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
