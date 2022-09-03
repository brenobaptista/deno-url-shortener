import { Router } from "oak";
import hash from "./hash.ts";
import urls from "./urls.ts";
import welcome from "./welcome.ts";

const router = new Router();

hash(router);
urls(router);
welcome(router);

export default router;
