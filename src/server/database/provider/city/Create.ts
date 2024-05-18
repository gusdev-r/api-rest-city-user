import { Knex } from "../../knex";
import { CityModel } from "../../../models/City";
import { TablesNames } from "../../TableNames";

export const create = async (
  city: Omit<CityModel, "id">): Promise<number | Error> => {
  try {
    const [result] = await Knex(TablesNames.city).insert(city).returning("id");
    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error("Error to register the new city in the system.");
  } catch (error) {
    console.log(error);
    return new Error("Error to register the new city in the system.");
  }
}
