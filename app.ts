import "dotenv";
import { Application } from "oak";
import { urlsTableUp } from "./models/migrations.ts";
import router from "./router/index.ts";

await urlsTableUp();

export const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const port = Number(Deno.env.get("PORT"));
app.listen({ port });
console.log(`Listening on http://localhost:${port}/`);
