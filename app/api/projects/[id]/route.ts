import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import { openDB } from '../../../lib/database';

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const db = await openDB();
  const { id } = req.query;

  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid project ID' });
  }

  try {
    const project = await db.get('SELECT * FROM projects WHERE id = ?', id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const result = await db.run('DELETE FROM projects WHERE id = ?', id);

    if (result.changes === 0) {
      return res.status(500).json({ message: 'Failed to delete project' });
    }

    res.status(200).json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
