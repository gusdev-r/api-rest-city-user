
import { Request } from "express";
import { paramValidator } from "../../shared/middleware";
import * as yup from "yup";

interface ParamProperty {
  id?: number;
}

export const updateByIdValidation = paramValidator((getSchema) => ({
  params: getSchema<ParamProperty>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  )
}))

export const updateCityById = async (
  request: Request<ParamProperty>,
  response: Response) => {

    return "";
}