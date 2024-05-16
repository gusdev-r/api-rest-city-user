// import { createCity, createCityValidation } from "./city/CreateCity";
import * as createCity from './city/CreateCity';
import * as deleteCityById from "./city/DeleteCityById";
import * as getAllCities from "./city/GetAllCities";
import * as getCityById from "./city/GetCityById";
import * as updateCityById from "./city/UpdateCityById";


export const urlCityController: string = "/api/v1/city";


export const CityController = {

  ...deleteCityById,
  ...updateCityById,
  ...createCity,
  ...getAllCities,
  ...getCityById

}