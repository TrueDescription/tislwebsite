import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

const USERNAME = 'admin';
const PASSWORD = 'password123';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (username === USERNAME && password === PASSWORD) {
      const cookie = serialize('admin-auth', 'true', {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60,
      });
      res.setHeader('Set-Cookie', cookie);
      return res.status(200).json({ success: true });
    }

    return res.status(401).json({ error: 'Invalid credentials' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
