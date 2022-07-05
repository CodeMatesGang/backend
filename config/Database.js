import { Sequelize } from "sequelize";

const db = new Sequelize("lccc", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
