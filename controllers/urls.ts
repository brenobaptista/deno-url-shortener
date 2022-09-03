import { Status, type RouterContext } from "oak";
import { findAvailableHash, relateData } from "../services/urls.ts";

export const postUrls = async (ctx: RouterContext<"/urls">) => {
  try {
    const body = ctx.request.body();
    if (body.type === "json") {
      const bodyValue = await body.value;
      const hash = await findAvailableHash();
      await relateData(hash, bodyValue.original_url);

      ctx.response.body = { message: "Created", hash };
      ctx.response.type = "json";
      ctx.response.status = Status.Created;
    } else {
      throw new Deno.errors.InvalidData(
        "Only supported parsing the body text as JSON"
      );
    }
  } catch (error) {
    ctx.response.body = { message: error.message };
    ctx.response.type = "json";
    ctx.response.status = Status.InternalServerError;
  }
};
