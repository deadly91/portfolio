import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
let client: MongoClient;
let db: Db;

export async function connectToDatabase(): Promise<Db> {
  if (db) return db;

  client = new MongoClient(uri);
  await client.connect();
  db = client.db();

  return db;
}
