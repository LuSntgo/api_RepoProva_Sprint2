const dotenv = require("dotenv");

const path = process.env.NODE_ENV === "development" ? ".env.dev" : ".env";

dotenv.config({ path });

console.log('*********************** ', path, process.env.DATABASE_URL)
module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    migrationsTableName: "migrations",
    entities: ["dist/entities/*.js"],
    migrations: ["dist/migrations/*.js"],
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    cli: {
      migrationsDir: "src/migrations",
      entitiesDir: "dist/entities/*.js"
    }
  };