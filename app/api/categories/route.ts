import { NextResponse } from 'next/server';
import { openDB } from '../../lib/database';

export async function GET() {
  const db = await openDB();
  const categories = await db.all('SELECT name FROM categories');
  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  const { category } = await request.json();
  if (!category) {
    return NextResponse.json({ error: 'Category name is required.' }, { status: 400 });
  }

  const db = await openDB();
  await db.run('INSERT INTO categories (name) VALUES (?)', [category]);
  return NextResponse.json({ message: 'Category created successfully.' });
}
