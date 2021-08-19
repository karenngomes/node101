import path from "path";

module.exports = {
  client: "sqlite3",
  connection: { // onde ele vai se conectar ao banco de dados
    filename: path.resolve(__dirname, "src", "database", "database.sqlite"),
  },
  migrations: { // onde estão as migrations
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "src", "database", "seeds"),
  },
  useNullAsDefault: true,
};
