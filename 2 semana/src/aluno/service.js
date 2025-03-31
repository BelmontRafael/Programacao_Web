import * as alunosRep from "./repository.js"
import { findAll } from "../curso/repository.js"

export const criarAluno = (aluno) => {
  //Regras //////////////////////////////////////////////////////////////////
  const alunos = alunosRep.findAll()
  const matriculaDuplicada = alunos.some((a) => a.matricula === aluno.matricula)

  const cursos = findAll()
  const curso_existe = cursos.find((curso) => curso.id === aluno.curso_id)

  if (matriculaDuplicada) {
    const error = new Error()
    error.name = "dadosDuplicados"
    error.message = "Não foi possivel criar o aluno, pois já existe um aluno com a mesma matricula."
    throw error
  }

  if (!curso_existe) {
    const error = new Error()
    error.name = "cursoInexistente"
    error.message = "Não foi possivel criar o aluno, pois o curso_id requisitado não corresponde a nenhum curso"
    throw error
  }

  if (!aluno.nome || !aluno.matricula || !aluno.curso_id) {
    const error = new Error()
    error.name = "dadosIncompletos"
    error.message = "Não foi possivel criar o aluno, pois não foi preenchido todas as informações."
    throw error
  }

  /////////////////////////////////////////////////////////////////////////////

  alunosRep.create(aluno)
  return aluno
}

export const listarAlunos = () => {
  const alunos = alunosRep.findAll()
  //Regra para listar aluno ///////////////////////////////////////////////////
  if (alunos.length === 0) {
    const error = new Error()
    error.name = "listaVazia"
    error.message = "Não foi possivel listar os alunos, pois não há alunos cadastrados."
    throw error
  }
  /////////////////////////////////////////////////////////////////////////////
  return alunos
}

export const visualizarAluno = (id) => {
  const aluno = alunosRep.findOne(id)
  //Regra para visualizar aluno ///////////////////////////////////////////////////
  if (!aluno) {
    const error = new Error()
    error.name = "indiceVazio"
    error.message = "Não foi possivel visualizar o aluno, pois não existe aluno neste índice"
    throw error
  }
  /////////////////////////////////////////////////////////////////////////////
  return aluno
}

export const atualizarAluno = (id, aluno) => {
  //REGRAS/////////////////////////////////////////////////////////////////////////
  const alunos = alunosRep.findAll()

  if (!alunos[id]) {
    const error = new Error()
    error.name = "indiceVazio"
    error.message = "Não foi possivel atualizar o aluno, pois não existe aluno neste índice"
    throw error
    /////////////////////////////////////////////////////////////////////////////
  }

  alunosRep.update(id, aluno)
}

export const atualizarAlunoParcial = (id, aluno) => {
  //REGRAS/////////////////////////////////////////////////////////////////////////
  const alunos = alunosRep.findAll()

  if (!alunos[id]) {
    const error = new Error()
    error.name = "indiceVazio"
    error.message = "Não foi possivel atualizar o aluno, pois não existe aluno neste índice"
    throw error
  }
  /////////////////////////////////////////////////////////////////////////////////

  const atributosPermitidos = ["nome"]
  const alunoFiltrado = {}

  for (const atributo of atributosPermitidos) {
    if (aluno.hasOwnProperty(atributo)) {
      alunoFiltrado[atributo] = aluno[atributo]
    }
  }

  alunosRep.patchUpdate(id, alunoFiltrado)
}

export const deletarAluno = (id) => {
  //REGRAS/////////////////////////////////////////////////////////////////////////
  const alunos = alunosRep.findAll()

  if (!alunos[id]) {
    const error = new Error()
    error.name = "indiceVazio"
    error.message = "Não foi possivel deletar o aluno, pois não existe aluno neste índice"
    throw error
    /////////////////////////////////////////////////////////////////////////////
  }

  alunosRep.destroy(id)
}
