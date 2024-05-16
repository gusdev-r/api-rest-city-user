
import { Request, Response } from "express";
import { paramValidator } from "../../shared/middleware";
import * as yup from "yup";

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

    return "";
}
