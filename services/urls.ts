import { cryptoRandomString } from "crypto";
import { createRecord, isHashAvailable } from "../models/urls.ts";

export const findAvailableHash = async () => {
  let hash = "";
  while (!hash) {
    const temp = cryptoRandomString({ length: 7, type: "alphanumeric" });
    const isAvailable = await isHashAvailable(temp);
    if (isAvailable) hash = temp;
  }

  return hash;
};

export const relateData = async (hash: string, originalUrl: string) => {
  await createRecord(hash, originalUrl);
};
