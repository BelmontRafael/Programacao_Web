import db from "../database"
import { Curso } from "./curso"

export default class RepositoryCursos {
  getAll = async () => db.select("*").from("cursos")

  getOne = async (id: number) => db("cursos").where({ id }).first()

  create = async (curso: Curso) => {
    const [created] = await db("cursos").insert(curso).returning("*")
    return [created]
  }

  update = async (id: number, curso: Curso) => {
    const [updated] = await db("cursos").where({ id }).update(curso).returning("*")
    return [updated]
  }

  patch = async (id: number, patchCurso: Partial<Curso>) => {
    const [patch] = await db("cursos").where({ id }).update(patchCurso).returning("*")
    return [patch]
  }

  destroy = async (id: number) => {
    await db("cursos").where({ id }).del()
  }

  getAlunosDoCurso = async (id: number) => {
    return db("matriculas")
      .join("alunos", "matriculas.id_aluno", "alunos.id")
      .where("matriculas.id_curso", id)
      .select("alunos.*")
  }
}
