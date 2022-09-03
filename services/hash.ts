import { findOriginalUrlByHash } from "../models/hash.ts";

export const getOriginalUrl = async (hash: string) => {
  try {
    const originalUrl = await findOriginalUrlByHash(hash);

    return originalUrl;
  } catch (error) {
    throw error;
  }
};
