import { Router } from "oak";
import hash from "./hash.ts";
import urls from "./urls.ts";

const router = new Router();

hash(router);
urls(router);

export default router;
