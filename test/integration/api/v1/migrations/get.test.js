import database from "infra/database.js";

test("GET /api/v1/migrations", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);
});

test("MIGRATIONS pendentes de implementação", async () => {
  const Response = await fetch("http://localhost:3000/api/v1/migrations");
  const ResponseBody = await Response.json();
  expect(Array.isArray(ResponseBody)).toBe(true);
  expect(ResponseBody).toBeGraterThan(0);
});
