import { Pool } from "postgres";

const databaseUrl = Deno.env.get("DATABASE_URL");
const pool = new Pool(databaseUrl, 3, true);

export const findOriginalUrlByHash = async (hash: string) => {
  const connection = await pool.connect();

  try {
    const result = await connection.queryObject<{ original_url: string }>`
      SELECT original_url
      FROM urls
      WHERE hash = (${hash})
    `;

    return result.rows[0]?.original_url;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
};
