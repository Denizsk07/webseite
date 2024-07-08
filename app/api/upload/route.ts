import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/authOptions';
import { openDB } from '../../lib/database';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession({ req, res }, authOptions);

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const db = await openDB();

  if (req.method === 'POST') {
    const { title, description, image, youtube_link, category } = req.body;

    if (!title || !description || !image || !youtube_link || !category) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      const result = await db.run(
        'INSERT INTO projects (title, description, image, youtube_link, category) VALUES (?, ?, ?, ?, ?)',
        [title, description, image, youtube_link, category]
      );

      return res.status(201).json({
        message: 'Project uploaded successfully.',
        project: {
          id: result.lastID,
          title,
          description,
          image,
          youtube_link,
          category,
        },
      });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
