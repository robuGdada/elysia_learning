import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "hello")
  .get("/id/:id", ({ params: { id } }) => id)
  .post("/", () => "hi")
  .route("M-SEARCH", "/", () => "connect")
  .listen(3000);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
