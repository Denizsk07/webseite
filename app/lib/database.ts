import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

export async function openDB(): Promise<Database> {
  return open({
    filename: path.resolve(process.cwd(), 'app/lib/database.sqlite'),
    driver: sqlite3.Database
  });
}
