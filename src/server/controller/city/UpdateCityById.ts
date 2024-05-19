
import { Request, Response } from "express";
import { paramValidator } from "../../shared/middleware";
import * as yup from "yup";
import { CityModel } from "../../models/City";
import { StatusCodes } from "http-status-codes";
import { CityProvider } from "../../database/provider/city";

interface ParamProperty { 
  id?: number;
}

interface CityModelExtends extends Omit<CityModel, "id"> {
  name: string;
}

export const updateCityByIdValidation = paramValidator((getSchema) => ({
  params: getSchema<ParamProperty>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
  body: getSchema<CityModelExtends>(
    yup.object().shape({
      name: yup.string().required().min(3),
    })
  ),
}));

export const updateCityById = async (
  request: Request<ParamProperty>,
  response: Response) => {


    if (!request.params.id) {
      return response.status(StatusCodes.BAD_REQUEST).json({
        errors: {
          default: "The id is a required field"
        } 
      });
    }
    const result = CityProvider.updateById(request.params.id, request.body);
    if (result instanceof Error) {
      return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
          default: result.message
        }
      });
    }

    return response.status(StatusCodes.NO_CONTENT).json(result);
}