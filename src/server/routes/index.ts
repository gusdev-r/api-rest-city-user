import { Router } from "express";
import { StatusCodes } from "http-status-codes";

// import * as method from "../controller";
import { CityController, urlCityController } from "./../controller";

const router = Router();

router.get("/", (_, response) => {
  return response.send("Hello world!");
});

router.get(
  `${urlCityController}/all`,
  CityController.getAllCitiesValidation,
  CityController.getAllCities
);

router.get(
  `${urlCityController}/:id`,
  CityController.getCityByIdValidation,
  CityController.getCityById
);

router.put(
  `${urlCityController}/:id`,
  CityController.updateCityByIdValidation,
  CityController.updateCityById
);

router.post(
  `${urlCityController}/create`,
  CityController.createCityValidation,
  CityController.createCity
);

router.delete(
  `${urlCityController}/:id`,
  CityController.deleteCityByIdValidation,
  CityController.deleteCityById
);

export { router };
