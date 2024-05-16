import { Knex } from "knex";
import { TablesNames } from "../TableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(TablesNames.city, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("name").index().notNullable();

      table.comment("Table for storing the cities in the system");
    })
    .then(() => {
      console.log(`# Created table ${TablesNames.city}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema
  .dropTableIfExists(TablesNames.city)
  .then(() => {
    console.log(`# Dropped table ${TablesNames.city}`);
  });
}
