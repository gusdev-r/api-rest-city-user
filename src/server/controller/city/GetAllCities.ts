import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { CityProvider } from "../../database/provider/city";
import { paramValidator } from "../../shared/middleware";

interface QueryProps {
  id?: number;
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllCitiesValidation = paramValidator((getSchema) => ({
  query: getSchema<QueryProps>(
    yup.object().shape({
      id: yup.number().integer().optional().moreThan(0),
      page: yup.number().optional().moreThan(0),
      limit: yup.number().optional().moreThan(0),
      filter: yup.string().optional(),
    })
  ),
}));

export const getAllCities = async (
  request : Request<{}, {}, {}, QueryProps>,
  response: Response) => {

  const result = await CityProvider.getAll(
    request.query.page || 1, 
    request.query.limit || 7, 
    request.query.filter || "", 
    Number(request.query.id));
  
  const count = await CityProvider.count(request.query.filter);

  if (result instanceof Error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  } else if (count instanceof Error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: count.message
      }
    });
  }
  response.setHeader("access-control-expose-headers", "x-total-count");
  response.setHeader("x-total-count", count);

  return response.status(StatusCodes.OK).json(result);
}