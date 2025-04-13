import db from "../database"
import { Aluno } from "./aluno"

export default class RepositoryAlunos {
  getAll = async () => db.select("*").from("alunos")

  getOne = async (id: number) => db("alunos").where({ id }).first()

  create = async (aluno: Aluno) => {
    const [created] = await db("alunos").insert(aluno).returning("*")
    return [created]
  }

  update = async (id: number, aluno: Aluno) => {
    const [updated] = await db("alunos").where({ id }).update(aluno).returning("*")
    return [updated]
  }

  patch = async (id: number, patchAluno: Partial<Aluno>) => {
    const [patch] = await db("alunos").where({ id }).update(patchAluno).returning("*")
    return [patch]
  }

  destroy = async (id: number) => {
    await db("alunos").where({ id }).del()
  }
}
