import { CityModel } from "../../../models/City";
import { TablesNames } from "../../TableNames";
import { Knex } from "../../knex";

export const getAll = async (page: number, limit: number, filter: string, id: number = 0): Promise<CityModel[] | Error> => {
  try {
    const result = await Knex(TablesNames.city)
    .select("*")
    .where("id", id)
    .orWhere("fullName", "like", `%${filter}%`)
    .offset((page - 1) * limit)
    .limit(limit);

    if (id > 0 && result.every(item => item.id !== id)) {
      const resultFilterById = await Knex(TablesNames.city)
      .select("*")
      .where("id", "=", id)
      .first();
      
      if (resultFilterById) return [...result, resultFilterById];
    }

    return result;
  } catch (error) {
    console.log(error);
    return new Error("Error to search all the elements availables.");
  }
}