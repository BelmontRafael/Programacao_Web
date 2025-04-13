import db from "../database"
import { Matricula } from "./matricula"

export default class RepositoryMatriculas {
  getAll = async () => db("matriculas").select("*")

  getOne = async (id_aluno: number, id_curso: number) => db("matriculas").select({ id_aluno, id_curso }).first()

  create = async (matricula: Matricula) => {
    const [created] = await db("matriculas").insert(matricula).returning("*")
    return [created]
  }

  getCursosByAluno = async (id_aluno: number) => {
    return db("matriculas")
      .select("cursos.*")
      .join("cursos", "matriculas.id_curso", "cursos.id")
      .where("matriculas.id_aluno", id_aluno)
  }

  getAlunosByCurso = async (id_curso: number) => {
    return db("matriculas")
      .select("alunos.*")
      .join("alunos", "matriculas.id_aluno", "alunos.id")
      .where("matriculas.id_curso", id_curso)
  }

  async destroy(id_aluno: number, id_curso: number) {
    await db("matriculas").where({ id_aluno, id_curso }).del()
  }
}
