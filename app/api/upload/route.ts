import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../lib/database';
import ProjectModel, { Project } from '../../models/Project'; // Passe den Pfad an, je nachdem, wo sich das Projektmodell befindet

export async function POST(req: Request) {
  await connectToDatabase(); // Stelle Verbindung zur MongoDB-Datenbank her

  try {
    const body: Project = await req.json();
    const { title, description, image, youtube_link, category } = body;

    if (!title || !description || !image || !youtube_link || !category) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const project = new ProjectModel({
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
