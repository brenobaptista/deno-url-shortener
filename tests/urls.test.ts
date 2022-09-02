import { superoak } from "superoak";
import { app } from "../app.ts";

Deno.test("it should create a new url", async () => {
  const request = await superoak(app);
  await request
    .post("/urls")
    .send({ original_url: "https://brenobaptista.me" })
    .expect(/{"message":"Created","hash":"/)
    .expect("Content-Type", "application/json; charset=utf-8")
    .expect(201);
});
