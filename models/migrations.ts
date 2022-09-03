import { Pool } from "postgres";

const databaseUrl = Deno.env.get("DATABASE_URL");
const pool = new Pool(databaseUrl, 3, true);

export const urlsTableUp = async () => {
  const connection = await pool.connect();

  try {
    await connection.queryObject`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `;
    await connection.queryObject`
      CREATE TABLE IF NOT EXISTS urls (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        original_url VARCHAR NOT NULL,
        hash CHAR(7) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;
  } finally {
    connection.release();
  }
};
