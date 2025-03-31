import { getCursos, setCursos } from "../db.js"

export const create = (curso) => {
  setCursos(curso)
}

export const findAll = () => getCursos()

export const findOne = (id) => getCursos()[id]

export const update = (id, curso) => {
  let cursos = getCursos()
  cursos[id] = curso
}

export const patchUpdate = (id, curso) => {
  let cursos = getCursos()
  cursos[id] = { ...cursos[id], ...curso }
}

export const destroy = (id) => {
  let cursos = getCursos()
  cursos.splice(id, 1)
}
