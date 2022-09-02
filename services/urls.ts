import { cryptoRandomString } from "crypto";
import { readDatabase, writeDatabase } from "../models/database.ts";

export const findAvailableHash = async () => {
  const database = await readDatabase();

  let hash = "";
  while (!hash) {
    const temp = cryptoRandomString({ length: 7, type: "alphanumeric" });
    if (!database[temp]) hash = temp;
  }

  return hash;
};

export const createUrl = async (hash: string, originalUrl: string) => {
  const database = await readDatabase();
  database[hash] = originalUrl;

  await writeDatabase(database);
};
