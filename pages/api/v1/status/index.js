import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1");
  console.log(result);
  response.status(200).json({
    cahve: "endpoint status",
    result: [{ "?column?": 2 }],
  });
}

export default status;
