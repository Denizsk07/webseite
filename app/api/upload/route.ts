import { NextResponse } from 'next/server';
import { openDB } from '../../../lib/database';

export async function POST(req: Request) {
  const db = await openDB();
  const body = await req.json();
  const { title, description, image, youtube_link, category } = body;

  if (!title || !description || !image || !youtube_link || !category) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    const result = await db.run(
      'INSERT INTO projects (title, description, image, youtube_link, category) VALUES (?, ?, ?, ?, ?)',
      [title, description, image, youtube_link, category]
    );

    return NextResponse.json({
      message: 'Project uploaded successfully.',
      project: {
        id: result.lastID,
        title,
        description,
        image,
        youtube_link,
        category,
      },
    }, { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
