import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let _db: any = null;

export async function getDB() {
  if (_db) return _db;

  _db = await open({
    filename: 'data/content.db',
    driver: sqlite3.Database
  });

  return _db;
}
