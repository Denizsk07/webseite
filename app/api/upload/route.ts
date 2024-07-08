import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/database';
import Project from '@/app/models/Project';

export async function POST(req: NextRequest) {
  await connectToDatabase(); // Stelle Verbindung zur MongoDB-Datenbank her

  try {
    const body = await req.json();
    const { title, description, image, youtube_link, category } = body;

    if (!title || !description || !image || !youtube_link || !category) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const project = new Project({
      title,
      description,
      image,
      youtube_link,
      category,
    });

    const savedProject = await project.save();

    return NextResponse.json({
      message: 'Project uploaded successfully.',
      project: savedProject,
    }, { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
