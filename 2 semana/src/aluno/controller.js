import * as alunosServ from "./service.js"

export const criarAluno = (request, response) => {
  try {
    const aluno = alunosServ.criarAluno(request.body)
    response.status(201).send(`Aluno "${aluno.nome}" criado com sucesso!`)
  } catch (error) {
    switch (error.name) {
      case "dadosDuplicados":
        response.status(400).json({ msg: error.message })
        break
      case "cursoInexistente":
        response.status(400).json({ msg: error.message })
        break
      case "dadosIncompletos":
        response.status(400).json({ msg: error.message })
        break
      default:
        response.status(400).json({ error: "Ocorreu um erro com sua requisição!" })
        break
    }
  }
}

export const listarAlunos = (request, response) => {
  try {
    const alunos = alunosServ.listarAlunos()
    response.status(200).json(alunos)
  } catch (error) {
    switch (error.name) {
      case "listaVazia":
        response.status(400).json({ msg: error.message })
        break
      default:
        response.status(400).json({ error: "Ocorreu um erro com sua requisição!" })
        break
    }
  }
}

export const visualizarAluno = (request, response) => {
  try {
    const id = +request.params.id
    const aluno = alunosServ.visualizarAluno(id - 1)
    response.status(200).json(aluno)
  } catch (error) {
    switch (error.name) {
      case "indiceVazio":
        response.status(400).json({ msg: error.message })
        break
      default:
        response.status(400).json({ error: "Ocorreu um erro com sua requisição!" })
        break
    }
  }
}

export const atualizarAluno = (request, response) => {
  try {
    const id = +request.params.id
    const aluno = alunosServ.atualizarAluno(id - 1, request.body)
    response.status(204).send()
  } catch (error) {
    switch (error.name) {
      case "indiceVazio":
        response.status(400).json({ msg: error.message })
        break
      default:
        response.status(400).json({ error: "Ocorreu um erro com sua requisição!" })
        break
    }
  }
}

export const atualizarAlunoParcial = (request, response) => {
  try {
    const id = +request.params.id
    const aluno = alunosServ.atualizarAlunoParcial(id - 1, request.body)
    response.status(204).send()
  } catch (error) {
    switch (error.name) {
      case "indiceVazio":
        response.status(400).json({ msg: error.message })
        break
      default:
        response.status(400).json({ error: "Ocorreu um erro com sua requisição!" })
        break
    }
  }
}

export const deletarAluno = (request, response) => {
  try {
    const id = +request.params.id
    const aluno = alunosServ.deletarAluno(id - 1)
    response.status(204).send()
  } catch (error) {
    switch (error.name) {
      case "indiceVazio":
        response.status(400).json({ msg: error.message })
        break
      default:
        response.status(400).json({ error: "Ocorreu um erro com sua requisição!" })
        break
    }
  }
}
