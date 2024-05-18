
import { Request, Response } from "express";
import { paramValidator } from "../../shared/middleware";
import * as yup from "yup";
import { CityModel } from "../../models/City";

interface RequestParams {
  id: number;
}

interface CityModelExtends extends Omit<CityModel, "id"> {
  fullName: string;
}

export const updateCityByIdValidation = paramValidator((getSchema) => ({
  params: getSchema<RequestParams>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
  body: getSchema<CityModelExtends>(
    yup.object().shape({
      fullName: yup.string().required().min(3),
    })
  ),
}));

export const updateCityById = async (
  request: Request<CityModelExtends>,
  response: Response) => {

    return "";
}