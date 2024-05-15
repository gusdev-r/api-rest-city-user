import { createCity } from "./city/CreateCity";
import { deleteCityById } from "./city/DeleteCityById";
import { getAllCities } from "./city/GetAllCities";
import { getCityById } from "./city/GetCityById";
import { updateCityById } from "./city/UpdateCityById";


export const urlCityController: string = "/api/v1/city";


export const CityController = {
  ...deleteCityById,
  ...updateCityById,
  ...createCity,
  ...getAllCities,
  ...getCityById

}