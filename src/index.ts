import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import { Layout, NewComponent } from "./layout";

const app = new Elysia()
  .use(html())
  .get("/", () =>
    Layout({
      children: NewComponent({
        children: ` 
          <div class="container mx-auto py-8 max-w-lg">
      <span class="htmx-indicator" id="loading">
        <img src="img/loader.gif" alt="Loading..." class="m-auto h-10" />
      </span>
      <div
        class="bg-gray-900 text-white p-4 border border-gray-600 rounded-lg max-w-lg m-auto"
      >
        <h3 class="text-2xl mb-3 text-center">Search Contacts</h3>
        <input
          class="border border-gray-600 bg-gray-800 p-2 rounded-lg w-full mb-5"
          type="search"
          name="search"
          placeholder="Start Searching for Users..."
          hx-post="/search"
          hx-trigger="input changed delay:500ms, search"
          hx-target="#search-results"
          hx-indicator="#loading"
        />
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
              >
                Email
              </th>
            </tr>
          </thead>
          <tbody id="search-results" class="divide-y divide-gray-600">
          <tr class="text-center">
          <td><div class="my-4 p-2">Sir paudel</div></td>
          <td><div class="my-4 p-2">paudelronish@gmail.com</div></td>
        </tr>
        <tr class="text-center">
        <td><div class="my-4 p-2">Sir paudel</div></td>
        <td><div class="my-4 p-2">paudelronish@gmail.com</div></td>
      </tr>
      </tbody>
        </table>
      </div>
    </div>
`,
      }),
    })
  )
  .get("/id", () => {
    const users = [
      { id: 1, name: "ronish" },
      { id: 2, name: "paudel" },
    ];
    return `<h1 class="text-2xl font-bold ">Users</h1>
  <ul>${users.map((user) => `<li>Name : ${user.name}</li>`).join(" ")}`;
  })
  .state("counter", 0)
  .get("/error", ({ store }) => store.counter)

  // .get("/", ({ store }) => store.counter)
  .post("/", () => "hi")
  .listen(3000);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
