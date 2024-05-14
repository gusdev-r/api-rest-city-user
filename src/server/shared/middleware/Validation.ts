import { RequestHandler } from "express"
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from "yup";

type PropertyType = 'body' | 'header' | 'params' | 'query';
type GetSchemaType = <T>(schema: Schema<T>) => Schema<T>;
type AllSchemasType = Record<PropertyType, Schema<any>>;
type GetAllSchemasType = (getSchema: GetSchemaType) => Partial<AllSchemasType>
type ValidationType = (getAllSchemas: GetAllSchemasType) => RequestHandler;


export const paramValidator: ValidationType = (getAllSchemas) => async (request, response, next) => {

  const schemas = getAllSchemas(schema => schema)
  const errorsResult: Record<string, Record<string, string>> = {};

  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(request[key as PropertyType], { abortEarly: false });
    } catch (error) {
      const yupError = error as ValidationError;
      const eachErrors: Record<string, string> = {};
  
      yupError.inner.forEach(error => {
        if(!error.path) return;
        eachErrors[error.path] = error.message;
      });

      errorsResult[key] = eachErrors;
    }
  });
   
      if (Object.entries(errorsResult).length === 0) {
        return next();
      } else {
        return response.status(StatusCodes.BAD_REQUEST).json(errorsResult)
      }
}

