"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.production = exports.development = void 0;
const path_1 = __importDefault(require("path"));
exports.development = {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: path_1.default.resolve(__dirname, "..", "..", "..", "..", "database.sqlite")
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, "..", "migration")
    },
    seeds: {
        directory: path_1.default.resolve(__dirname, "..", "seeds")
    },
    pool: {
        afterCreate: (connection, done) => {
            connection.run("PRAGMA foreign_keys = ON");
            done();
        }
    },
};
exports.production = Object.assign({}, exports.development);
exports.test = Object.assign(Object.assign({}, exports.development), { connection: "memory:" });
