import { Request, Response } from "express";
import { paramValidator } from "../../shared/middleware";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { CityProvider } from "../../database/provider/city";
import { idText } from "typescript";

interface ParamProperty {
  id?: number;
}

export const deleteCityByIdValidation = paramValidator((getSchema) => ({
  params: getSchema<ParamProperty>(
    yup.object().shape({
      id: yup.number().required().moreThan(0),
    })
  ),
}));

export const deleteCityById = async (
  request: Request<ParamProperty>,
  response: Response) => {
    
  if (!request.params.id) 
    return response.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: "The id is a required field"
      }
  });

  const result = await CityProvider.deleteById(request.params.id);
  if (result instanceof Error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  } 
  return response
  .status(StatusCodes.NO_CONTENT)
  .send(`The city with id ${request.params.id} was deleted`);
};
