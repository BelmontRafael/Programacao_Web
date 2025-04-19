import AlunoModel from "../database/models/aluno"
import CursoModel from "../database/models/curso"
import MatriculaModel from "../database/models/matricula"
import { Aluno } from "./aluno"

export default class RepositoryAlunos {
  async getAll() {
    return await AlunoModel.findAll()
  }

  async getOne(id: number) {
    return await AlunoModel.findByPk(id)
  }

  async create(aluno: Aluno) {
    return await AlunoModel.create(aluno)
  }

  async update(id: number, aluno: Aluno) {
    const alunoInstance = await AlunoModel.findByPk(id)
    if (!alunoInstance) return null
    return await alunoInstance.update(aluno)
  }

  async patch(id: number, patchAluno: Partial<Aluno>) {
    const alunoInstance = await AlunoModel.findByPk(id)
    if (!alunoInstance) return null
    return await alunoInstance.update(patchAluno)
  }

  async destroy(id: number) {
    const alunoInstance = await AlunoModel.findByPk(id)
    if (!alunoInstance) return null
    await alunoInstance.destroy()
  }

  async getCursosDoAluno(id: number) {
    const aluno = await AlunoModel.findByPk(id, {
      include: [
        {
          model: CursoModel,
          through: { attributes: [] } // Exclude matriculas attributes
        }
      ]
    })
    return aluno ? aluno.Cursos : []
  }

  async matricularAluno(id: number, cursos: number[]) {
    const aluno = await AlunoModel.findByPk(id)
    if (!aluno) return null

    const cursosInstances = await CursoModel.findAll({
      where: { id: cursos }
    })

    await aluno.addCursos(cursosInstances)
  }
}
