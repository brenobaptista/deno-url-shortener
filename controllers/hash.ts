import { Status, type RouterContext } from "oak";
import { getOriginalUrl } from "../services/hash.ts";

export const getHash = async (ctx: RouterContext<"/:hash">) => {
  try {
    const originalUrl = await getOriginalUrl(ctx.params.hash);

    if (ctx.params && ctx.params.hash && originalUrl) {
      ctx.response.body = {
        message: "Found",
        original_url: originalUrl,
      };
      ctx.response.type = "json";
      ctx.response.status = Status.OK;
    } else {
      ctx.response.body = { message: "Not Found" };
      ctx.response.type = "json";
      ctx.response.status = Status.NotFound;
    }
  } catch (error) {
    ctx.response.body = { message: error.message };
    ctx.response.type = "json";
    ctx.response.status = Status.InternalServerError;
  }
};
