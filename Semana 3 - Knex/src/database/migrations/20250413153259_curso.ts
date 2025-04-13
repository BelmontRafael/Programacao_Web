import type { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cursos", function (table) {
    table.increments("id").primary()
    table.string("nome").notNullable()
    table.integer("carga-horaria").notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("cursos")
}
