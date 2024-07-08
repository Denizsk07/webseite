import { NextResponse } from 'next/server';
import { openDB } from '../../lib/database';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const limit = url.searchParams.get('limit');
  
  const db = await openDB();
  const query = limit ? `SELECT * FROM projects LIMIT ${limit}` : 'SELECT * FROM projects';
  const projects = await db.all(query);
  
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const { title, description, image, youtube_link, category } = await request.json();

  if (!title || !description || !image || !youtube_link || !category) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const db = await openDB();
  const result = await db.run(
    'INSERT INTO projects (title, description, image, youtube_link, category) VALUES (?, ?, ?, ?, ?)',
    [title, description, image, youtube_link, category]
  );

  return NextResponse.json({ message: 'Project uploaded successfully.', project: { id: result.lastID, title, description, image, youtube_link, category } });
}
