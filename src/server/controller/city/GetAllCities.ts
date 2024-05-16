import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { paramValidator } from "../../shared/middleware";
import * as yup from "yup";

interface QueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllCitiesValidation = paramValidator((getSchema) => ({
  query: getSchema<QueryProps>(
    yup.object().shape({
      page: yup.number().optional().moreThan(0),
      limit: yup.number().optional().moreThan(0),
      filter: yup.string().optional(),
    })
  ),
}));

export const getAllCities = async (
  request : Request<{}, {}, {}, QueryProps>,
  response: Response) => {

}