import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { openDB } from '../../../lib/database';

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    console.log('Unauthorized access attempt.');
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const db = await openDB();
  const { pathname } = new URL(req.url);
  const id = pathname.split('/').pop();  // Get the last part of the URL
  const projectId = Array.isArray(id) ? id[0] : id;

  console.log(`Received request to delete project with ID: ${projectId}`);
  if (!projectId) {
    return NextResponse.json({ message: 'Project ID is required' }, { status: 400 });
  }

  try {
    const project = await db.get('SELECT * FROM projects WHERE id = ?', projectId);
    console.log(`Project found: ${JSON.stringify(project)}`);

    if (!project) {
      console.log('Project not found.');
      return NextResponse.json({ message: 'Project not found' }, { status: 404 });
    }

    const result = await db.run('DELETE FROM projects WHERE id = ?', projectId);
    console.log(`Deletion result: ${JSON.stringify(result)}`);

    if (result.changes === 0) {
      console.log('Failed to delete project.');
      return NextResponse.json({ message: 'Failed to delete project' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Project deleted' }, { status: 200 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
