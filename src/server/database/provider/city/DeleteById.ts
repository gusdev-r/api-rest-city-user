import { Knex } from "../../knex";
import { TablesNames } from "../../TableNames"

export const deleteById = async (id: number): Promise<void | Error> => {
  try {
    const result = await Knex(TablesNames.city)
    .where("id", "=", id)
    .del();

    if (result > 0) return;
    return new Error("The object searched for deletion was not in the system.");
  } catch (error) {
    console.log(error);
    return new Error("The object searched for deletion was not in the system.");
  }
}