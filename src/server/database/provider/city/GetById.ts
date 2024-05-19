import { CityModel } from "../../../models/City";
import { Knex } from "../../knex";
import { TablesNames } from "../../TableNames";

export const getById = async (id: number): Promise<CityModel | Error> => {
  try {
    const result = await Knex(TablesNames.city)
    .select("*")
    .where("id", "=", Number(id))
    .first();


    console.log("inside the provider")
    console.log(result)

    if (result) return result;

    return new Error("The object searched was not found in the system.");
  } catch (error) {
    console.log(error);
    return new Error("The object searched was not found in the system.");
  }
}