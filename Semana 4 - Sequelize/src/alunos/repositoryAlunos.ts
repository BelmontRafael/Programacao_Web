// src/alunos/repositoryAlunos.ts
import { Aluno } from "./aluno"
import AlunoModel from "../database/models/Aluno"

export default class RepositoryAlunos {
  getAll = async (): Promise<Aluno[]> => {
    const alunos = await AlunoModel.findAll()
    return alunos.map((aluno) => ({
      id: aluno.id,
      nome: aluno.nome,
      idade: aluno.idade,
      cursos: aluno.cursos
    }))
  }

  getOne = async (id: number): Promise<Aluno | null> => {
    const aluno = await AlunoModel.findByPk(id, { include: ["cursos"] })
    return aluno
      ? {
          id: aluno.id,
          nome: aluno.nome,
          idade: aluno.idade,
          cursos: aluno.cursos
        }
      : null
  }

  create = async (aluno: Aluno): Promise<Aluno> => {
    const createdAluno = await AlunoModel.create({
      nome: aluno.nome,
      idade: aluno.idade
    })

    if (aluno.id_cursos && aluno.id_cursos.length > 0) {
      await createdAluno.$set(
        "cursos",
        aluno.id_cursos.map((curso) => curso)
      )
    }

    return {
      id: createdAluno.id,
      nome: createdAluno.nome,
      idade: createdAluno.idade,
      cursos: aluno.cursos
    }
  }

  update = async (id: number, aluno: Aluno): Promise<Aluno | null> => {
    await AlunoModel.update(aluno, { where: { id } })
    const updatedAluno = await AlunoModel.findByPk(id)
    return updatedAluno ? updatedAluno.get({ plain: true }) : null
  }

  patch = async (id: number, patchAluno: Partial<Aluno>): Promise<Aluno | null> => {
    await AlunoModel.update(patchAluno, { where: { id } })
    const patchedAluno = await AlunoModel.findByPk(id)
    return patchedAluno ? patchedAluno.get({ plain: true }) : null
  }

  destroy = async (id: number): Promise<void> => {
    await AlunoModel.destroy({ where: { id } })
  }
}
