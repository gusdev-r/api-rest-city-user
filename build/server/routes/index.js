"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// import * as method from "../controller";
const controller_1 = require("./../controller");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (_, response) => {
    return response.send("Hello world!");
});
router.get(`${controller_1.urlCityController}/all`, controller_1.CityController.getAllCitiesValidation, controller_1.CityController.getAllCities);
router.get(`${controller_1.urlCityController}/:id`, controller_1.CityController.getCityByIdValidation, controller_1.CityController.getCityById);
router.put(`${controller_1.urlCityController}/:id`, controller_1.CityController.updateCityByIdValidation, controller_1.CityController.updateCityById);
router.post(`${controller_1.urlCityController}/create`, controller_1.CityController.createCityValidation, controller_1.CityController.createCity);
router.delete(`${controller_1.urlCityController}/:id`, controller_1.CityController.deleteCityByIdValidation, controller_1.CityController.deleteCityById);
