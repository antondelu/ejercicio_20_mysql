const mysql = require("mysql2/promise");

async function connectionDb(query) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ha_ejercicio_20",
  });
  const resultado = await connection.execute(query);
  connection.end(); // cierra la conexion
  return resultado;
}

module.exports = connectionDb;
