import type { Router } from "oak";
import { getHash } from "../controllers/hash.ts";

const hash = (router: Router) => {
  router.get("/:hash", getHash);
};

export default hash;
