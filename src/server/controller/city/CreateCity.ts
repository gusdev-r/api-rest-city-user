import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import  {paramValidator } from "../../shared/middleware";

interface CityDto {
  name: string;
  state: string;
}

export const createValidation = paramValidator((getSchema) => ({
  body: getSchema<CityDto>(
    yup.object().shape({
      name: yup.string().required().min(3),
      state: yup.string().required().min(2),
    })
  ),
}));

export const createCity = async (
  request: Request<{}, {}, CityDto>,
  response: Response) => {

console.log(request.body);
return response.send("Created! - CreateRequest");
}
