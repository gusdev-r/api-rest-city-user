import { CityModel } from "../../../models/City";
import { TablesNames } from "../../TableNames";
import { Knex } from "../../knex";

export const updateById = async (id: number, city: Omit<CityModel, "id">): Promise<void | Error> => {
  try {
    const result = await Knex(TablesNames.city)
    .update(city)
    .where("id", id);

    if(result > 0) return;
    return new Error("The element search for updation was not found in the system.")
  } catch (error) {
    console.log(error);
    return new Error("The element search for updation was not found in the system.")
  }
}