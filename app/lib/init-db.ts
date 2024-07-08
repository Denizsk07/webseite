import { openDB } from './database.js';

async function setup() {
  const db = await openDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    );
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      image TEXT,
      youtube_link TEXT
    );
  `);
  console.log('Database setup complete');
}

setup();
