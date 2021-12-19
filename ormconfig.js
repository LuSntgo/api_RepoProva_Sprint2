require('dotenv').config();

module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    migrationsTableName: "migrations",
    entities: ["dist/entities/*.js"],
    migrations: ["dist/migrations/*.js"],
    cli: {
      migrationsDir: "src/migrations",
      entitiesDir: "dist/entities/*.js"
    }
  };