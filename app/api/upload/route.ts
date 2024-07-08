import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route'; // Make sure this path is correct
import { openDB } from '../../lib/database';

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { title, description, image, youtube_link } = await request.json();

  if (!title || !description || !image || !youtube_link) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const db = await openDB();
  const result = await db.run(
    'INSERT INTO projects (title, description, image, youtube_link) VALUES (?, ?, ?, ?)',
    [title, description, image, youtube_link]
  );

  return NextResponse.json({ message: 'Project uploaded successfully.', project: { id: result.lastID, title, description, image, youtube_link } });
}
