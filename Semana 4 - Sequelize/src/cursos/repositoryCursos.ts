import CursoModel from "../database/models/curso"
import AlunoModel from "../database/models/aluno"
import { Curso } from "./curso"

export default class RepositoryCursos {
  async getAll() {
    return await CursoModel.findAll()
  }

  async getOne(id: number) {
    return await CursoModel.findByPk(id)
  }

  async create(curso: Curso) {
    return await CursoModel.create(curso)
  }

  async update(id: number, curso: Curso) {
    const cursoInstance = await CursoModel.findByPk(id)
    if (!cursoInstance) return null
    return await cursoInstance.update(curso)
  }

  async patch(id: number, patchCurso: Partial<Curso>) {
    const cursoInstance = await CursoModel.findByPk(id)
    if (!cursoInstance) return null
    return await cursoInstance.update(patchCurso)
  }

  async destroy(id: number) {
    const cursoInstance = await CursoModel.findByPk(id)
    if (!cursoInstance) return null
    await cursoInstance.destroy()
  }

  async getAlunosDoCurso(id: number) {
    const curso = await CursoModel.findByPk(id, {
      include: [
        {
          model: AlunoModel,
          through: { attributes: [] } // Exclude matriculas attributes
        }
      ]
    })
    return curso ? curso.Alunos : []
  }
}
