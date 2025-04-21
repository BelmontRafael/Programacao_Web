import { Curso } from "../cursos/curso"

export interface Aluno {
  id?: number
  nome?: string
  idade?: number
  id_cursos?: number[]
  cursos?: Curso[]
}
