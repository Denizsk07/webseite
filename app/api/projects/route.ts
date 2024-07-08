import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../lib/database';
import Project from '../../models/Project';

// GET-Methode
export async function GET(req: NextRequest) {
  await connectToDatabase();

  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '0', 10); // Standardlimit 0 (keine Begrenzung)

    let query = Project.find({}).sort({ _id: -1 }); // Sortierung in absteigender Reihenfolge nach _id
    if (limit > 0) {
      query = query.limit(limit); // Limit anwenden, wenn angegeben
    }

    const projects = await query.exec();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

// POST-Methode
export async function POST(request: NextRequest) {
  const { title, description, image, youtube_link, category } = await request.json();

  if (!title || !description || !image || !youtube_link || !category) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  await connectToDatabase();

  try {
    const newProject = new Project({ title, description, image, youtube_link, category });
    await newProject.save();
    return NextResponse.json({ message: 'Project created successfully.' });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
