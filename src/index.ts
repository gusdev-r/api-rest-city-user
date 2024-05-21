import { server } from "./server/Server";
import dotenv from 'dotenv'
import { Knex } from "./server/database/knex";

dotenv.config();
// Use 8080 as a default port instead 'process.env.PORT'
const startServer = () => {
  server.listen(process.env.PORT, () => {
    console.log("Application working fine!")
  });
}

if (process.env.IS_LOCALHOST !== "true") {
  Knex.migrate.latest()
  .then(() => {
    startServer();
  })
  .catch(console.log)
} else {
  startServer();
}