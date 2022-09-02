import { Application } from "oak";
import router from "./router/index.ts";

export const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
console.log(`Listening on http://localhost:8080/`);
