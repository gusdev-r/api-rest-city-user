import { Request } from "express";
import { paramValidator } from "../../shared/middleware";
import * as yup from "yup";

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

    return "";
}