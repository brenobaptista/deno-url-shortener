import type { Router } from "oak";
import { getWelcome } from "../controllers/welcome.ts";

const welcome = (router: Router) => {
  router.get("/", getWelcome);
};

export default welcome;
