"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const TableNames_1 = require("../TableNames");
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema
            .createTable(TableNames_1.TablesNames.city, (table) => {
            table.bigIncrements("id").primary().index();
            table.string("name").index().notNullable();
            table.comment("Table for storing the cities in the system");
        })
            .then(() => {
            console.log(`# Created table ${TableNames_1.TablesNames.city}`);
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema
            .dropTableIfExists(TableNames_1.TablesNames.city)
            .then(() => {
            console.log(`# Dropped table ${TableNames_1.TablesNames.city}`);
        });
    });
}
exports.down = down;
