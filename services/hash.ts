import { readDatabase } from "../models/database.ts";

export const getOriginalUrl = async (hash: string) => {
  try {
    const database = await readDatabase();

    return database[hash]?.original_url;
  } catch (error) {
    throw error;
  }
};
