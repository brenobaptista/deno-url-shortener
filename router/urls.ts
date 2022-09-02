import type { Router } from "oak";
import { postUrls } from "../controllers/urls.ts";

const urls = (router: Router) => {
  router.post("/urls", postUrls);
};

export default urls;
