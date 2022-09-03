import { Pool } from "postgres";

const databaseUrl = Deno.env.get("DATABASE_URL");
const pool = new Pool(databaseUrl, 3, true);

export const createRecord = async (hash: string, originalUrl: string) => {
  const connection = await pool.connect();

  try {
    await connection.queryObject`
      INSERT INTO urls
      (original_url, hash)
      VALUES
      (${originalUrl}, ${hash})
    `;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
};

export const isHashAvailable = async (hash: string) => {
  const connection = await pool.connect();

  try {
    const result = await connection.queryObject<{ id: string }>`
      SELECT id
      FROM urls
      WHERE hash = (${hash})
    `;

    return result.rows.length === 0;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
};
