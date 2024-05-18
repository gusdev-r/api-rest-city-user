import { TablesNames } from "../../TableNames"
import { Knex } from "../../knex"


export const count = async (filter = ""): Promise<number | Error> => {

  try {
    const [{ count }] = await Knex(TablesNames.city)
    .where("fullName", "like", `%${filter}%`)
    .count<[{ count: number }]>(" * as count");

    if(Number.isInteger(Number(count))) return Number(count);
    return new Error("Error to count all the elements registered in the system.");
  } catch (error) {
    console.log(error);
    return new Error("Error to count all the elements registered in the system.");
  }
}