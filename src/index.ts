import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", ({ set }) => {
    set.status = 200;
    set.headers["Content-Type"] = "text/plain";

    return "hi";
  })
  .get("/id/:id", ({ params: { id } }) => id)
  .post("/", () => "hi")
  .route("M-SEARCH", "/", () => "connect")
  .listen(3000);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
