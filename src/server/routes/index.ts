import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CityController, urlCityController } from "../controller";

const router = Router();

router.get("/", (request, response) => {
  return response.send("Hello world!");
});


router.post(
  `${urlCityController}/create`,
  CityController.createValidation,
  CityController.create
);

export { router };
