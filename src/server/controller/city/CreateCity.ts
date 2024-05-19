import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { paramValidator } from "../../shared/middleware";
import { CityModel } from "../../models/City";
import { CityProvider } from "../../database/provider/city";

interface CityModelExtends extends Omit<CityModel, "id"> {
  name: string;
}

export const createCityValidation = paramValidator((getSchema) => ({
  body: getSchema<CityModelExtends>(
    yup.object().shape({
      name: yup.string().required().min(3).max(150),
    })
  ),
}));

export const createCity = async (
  request: Request<{}, {}, CityModelExtends>,
  response: Response) => {

  const resultCityCreated = await CityProvider.create(request.body);

  if (resultCityCreated instanceof Error) {
    return response
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({
      errors: {
        default: resultCityCreated.message
      }
    })
  }
return response.status(StatusCodes.CREATED)
  .json(resultCityCreated);
}
