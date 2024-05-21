"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
const dotenv_1 = __importDefault(require("dotenv"));
const knex_1 = require("./server/database/knex");
dotenv_1.default.config();
// Use 8080 as a default port instead 'process.env.PORT'
const startServer = () => {
    Server_1.server.listen(process.env.PORT, () => {
        console.log("Application working fine!");
    });
};
if (process.env.IS_LOCALHOST !== "true") {
    knex_1.Knex.migrate.latest()
        .then(() => {
        startServer();
    })
        .catch(console.log);
}
else {
    startServer();
}
