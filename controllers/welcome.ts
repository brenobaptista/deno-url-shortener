import { Status, type RouterContext } from "oak";

export const getWelcome = (ctx: RouterContext<"/">) => {
  ctx.response.body = { message: "Welcome" };
  ctx.response.type = "json";
  ctx.response.status = Status.OK;
};
