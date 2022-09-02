import { superoak } from "superoak";
import { app } from "../app.ts";

Deno.test("it should send a welcome message", async () => {
  const request = await superoak(app);
  await request
    .get("/")
    .expect('{"message":"Welcome"}')
    .expect("Content-Type", "application/json; charset=utf-8")
    .expect(200);
});
