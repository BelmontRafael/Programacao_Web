const alunos = [{ nome: "Rafael", matricula: "01SINF", curso_id: 1 }]
const cursos = [{ nome: "Programação Web", id: 1 }]

export const getAlunos = () => alunos
export const setAlunos = (aluno) => alunos.push(aluno)

export const getCursos = () => cursos
export const setCursos = (curso) => cursos.push(curso)
