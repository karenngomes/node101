import Knex from "knex";
import path from "path"; // vem com o node, para tratar caminhos no sistema de arquivos

const connection = Knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true, // não receber warning no servidor
});

export default connection;
