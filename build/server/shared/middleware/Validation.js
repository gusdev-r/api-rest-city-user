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
exports.paramValidator = void 0;
const http_status_codes_1 = require("http-status-codes");
const paramValidator = (getAllSchemas) => (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const schemas = getAllSchemas(schema => schema);
    const errorsResult = {};
    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(request[key], { abortEarly: false });
        }
        catch (error) {
            const yupError = error;
            const eachErrors = {};
            yupError.inner.forEach(error => {
                if (!error.path)
                    return;
                eachErrors[error.path] = error.message;
            });
            errorsResult[key] = eachErrors;
        }
    });
    if (Object.entries(errorsResult).length === 0) {
        return next();
    }
    else {
        return response.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(errorsResult);
    }
});
exports.paramValidator = paramValidator;
