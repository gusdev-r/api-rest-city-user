import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { CityProvider } from "../../database/provider/city";
import { paramValidator } from "../../shared/middleware";

interface ParamProperty { 
  id?: number;
}

export const getCityByIdValidation = paramValidator(getSchema => ({
  params: getSchema<ParamProperty>(
     yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
     })
    ),
}));

export const getCityById = async (
  request: Request<ParamProperty>,
  response: Response) => {

    if (!request.params.id) {
      return response.status(StatusCodes.BAD_REQUEST).json({
        errors: {
          default: "The id is a required field"
        }
      });
    }

    const result = await CityProvider.getById(request.params.id);
    console.log(CityProvider.getById(request.params.id));
    if (result instanceof Error) {
      return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
          default: result.message
        }
      });
    }

    return response.status(StatusCodes.OK).json(result);
}
