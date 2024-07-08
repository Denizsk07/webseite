// app/api/projects/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../lib/database';
import Project from '../../models/Project';

// GET-Methode
export async function GET() {
  await connectToDatabase();

  try {
    const projects = await Project.find({});
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

// POST-Methode
export async function POST(request: Request) {
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
