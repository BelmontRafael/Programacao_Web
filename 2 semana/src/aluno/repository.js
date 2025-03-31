import { getAlunos, setAlunos } from "../db.js"

export const create = (aluno) => {
  setAlunos(aluno)
}

export const findAll = () => getAlunos()

export const findOne = (id) => getAlunos()[id]

export const update = (id, aluno) => {
  let alunos = getAlunos()
  alunos[id] = aluno
}

export const patchUpdate = (id, aluno) => {
  let alunos = getAlunos()
  alunos[id] = { ...alunos[id], ...aluno }
}

export const destroy = (id) => {
  let alunos = getAlunos()
  alunos.splice(id, 1)
}
