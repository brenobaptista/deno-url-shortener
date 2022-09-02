import { superoak } from "superoak";
import { app } from "../app.ts";

Deno.test("it should find an url", async () => {
  const request = await superoak(app);
  await request
    .get("/SrbwN2s")
    .expect('{"message":"Found","original_url":"https://google.com"}')
    .expect("Content-Type", "application/json; charset=utf-8")
    .expect(200);
});

Deno.test("it should not find an url", async () => {
  const request = await superoak(app);
  await request
    .get("/q")
    .expect('{"message":"Not Found"}')
    .expect("Content-Type", "application/json; charset=utf-8")
    .expect(404);
});
