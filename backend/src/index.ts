import { environment } from "./environments/environment";
import { Sequelize } from "sequelize-typescript";
import express from "express";

(async () => {
  const app = express();
  const port = 3000;

  const {
    postgres: { database, dialect, username, password, host, pool },
  } = environment;

  console.log(database, username, password, host, pool, dialect);

  const sequelize = new Sequelize({
    database,
    dialect: "postgres",
    username,
    password,
    host,
    pool,
    models: [__dirname + "/models"], // or [Player, Team],
  });

  //   console.log("This is the dirname", __dirname);

  sequelize
    .authenticate()
    .then(() => console.log("Data base connected..."))
    .catch((err) => console.log("Error", err));

  app.get("/", (_req, res) => res.send("Hello World!"));
  app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
  );
})();
