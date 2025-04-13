import type { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("matriculas", function (table) {
    table.integer("id_aluno").unsigned().notNullable()
    table.integer("id_curso").unsigned().notNullable()

    table.primary(["id_aluno", "id_curso"])

    table.foreign("id_aluno").references("id").inTable("alunos").onDelete("CASCADE")
    table.foreign("id_curso").references("id").inTable("cursos").onDelete("CASCADE")
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("matriculas")
}
