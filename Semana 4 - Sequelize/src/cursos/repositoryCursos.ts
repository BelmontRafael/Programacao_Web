import { Curso } from "./curso"
import CursoModel from "../database/models/Curso"

export default class RepositoryCursos {
  getAll = async (): Promise<Curso[]> => {
    const cursos = await CursoModel.findAll()
    return cursos.map((curso) => curso.get({ plain: true }))
  }

  getOne = async (id: number): Promise<Curso | null> => {
    const curso = await CursoModel.findByPk(id, { include: ["alunos"] })
    return curso ? curso.get({ plain: true }) : null
  }

  create = async (curso: Curso): Promise<Curso> => {
    const createdCurso = await CursoModel.create({
      nome: curso.nome,
      carga_horaria: curso.carga_horaria
    })
    return createdCurso.get({ plain: true })
  }

  update = async (id: number, curso: Curso): Promise<Curso | null> => {
    await CursoModel.update(curso, { where: { id } })
    const updatedCurso = await CursoModel.findByPk(id)
    return updatedCurso ? updatedCurso.get({ plain: true }) : null
  }

  patch = async (id: number, patchCurso: Partial<Curso>): Promise<Curso | null> => {
    await CursoModel.update(patchCurso, { where: { id } })
    const patchedCurso = await CursoModel.findByPk(id)
    return patchedCurso ? patchedCurso.get({ plain: true }) : null
  }

  destroy = async (id: number): Promise<void> => {
    await CursoModel.destroy({ where: { id } })
  }
}
