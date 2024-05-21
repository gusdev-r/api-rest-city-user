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
exports.create = void 0;
const knex_1 = require("../../knex");
const TableNames_1 = require("../../TableNames");
const create = (city) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [result] = yield (0, knex_1.Knex)(TableNames_1.TablesNames.city).insert(city).returning("id");
        if (typeof result === "object") {
            return result.id;
        }
        else if (typeof result === "number") {
            return result;
        }
        return new Error("Error to register the new city in the system.");
    }
    catch (error) {
        console.log(error);
        return new Error("Error to register the new city in the system.");
    }
});
exports.create = create;
