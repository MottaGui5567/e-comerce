import database from "infra/database.js";

async function status(request, response) {
  //obter ultima atualização do status
  const UpdateAt = new Date().toISOString();

  //obter conexões maximas
  const MaxConections = await database.query(
    "SELECT current_setting('max_connections')::int AS max_connections",
  );
  const maxconn = MaxConections.rows[0].max_connections;

  //oberter conexões usadas
  const dataBaseName = process.env.POSTGRES_DB;
  const usedConections = await database.query(
    `SELECT count(*) ::int FROM pg_stat_activity WHERE datname = $1`,
    [dataBaseName],
  );
  const usedconn = usedConections.rows[0].count;

  //obter versão do banco de dados
  const version = await database.query("SHOW server_version");
  const versionNumber = version.rows[0].server_version;

  response.status(200).json({
    update_at: UpdateAt,
    dependencies: {
      database: {
        version: versionNumber,
        conexoes_max: maxconn,
        conexoes_usadas: usedconn,
      },
    },
  });
}

export default status;
