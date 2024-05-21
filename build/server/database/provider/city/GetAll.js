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
exports.getAll = void 0;
const TableNames_1 = require("../../TableNames");
const knex_1 = require("../../knex");
const getAll = (page_1, limit_1, filter_1, ...args_1) => __awaiter(void 0, [page_1, limit_1, filter_1, ...args_1], void 0, function* (page, limit, filter, id = 0) {
    try {
        const result = yield (0, knex_1.Knex)(TableNames_1.TablesNames.city)
            .select("*")
            .where("id", Number(id))
            .orWhere("name", "like", `%${filter}%`)
            .offset((page - 1) * limit)
            .limit(limit);
        if (id > 0 && result.every(item => item.id !== id)) {
            const resultFilterById = yield (0, knex_1.Knex)(TableNames_1.TablesNames.city)
                .select("*")
                .where("id", "=", id)
                .first();
            if (resultFilterById)
                return [...result, resultFilterById];
        }
        return result;
    }
    catch (error) {
        console.log(error);
        return new Error("Error to search all the elements availables.");
    }
});
exports.getAll = getAll;
