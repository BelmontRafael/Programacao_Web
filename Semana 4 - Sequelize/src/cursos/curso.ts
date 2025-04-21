import { Aluno } from "../alunos/aluno"

export interface Curso {
  id?: number
  nome?: string
  carga_horaria?: number
  alunos?: Aluno[]
}
