import * as cursosServ from "./service.js"

export const criarCurso = (request, response) => {
  try {
    const curso = cursosServ.criarCurso(request.body)
    response.status(201).send(`Curso "${curso.nome}" criado com sucesso!`)
  } catch (error) {
    switch (error.name) {
      case "dadosDuplicados":
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

export const listarCursos = (request, response) => {
  try {
    const cursos = cursosServ.listarCursos()
    response.status(200).json(cursos)
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

export const visualizarCurso = (request, response) => {
  try {
    const id = +request.params.id
    const curso = cursosServ.visualizarCurso(id - 1)
    response.status(200).json(curso)
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

export const atualizarCurso = (request, response) => {
  try {
    const id = +request.params.id
    cursosServ.atualizarCurso(id - 1, request.body)
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

export const atualizarCursoParcial = (request, response) => {
  try {
    const id = +request.params.id
    const curso = cursosServ.atualizarCursoParcial(id - 1, request.body)
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

export const deletarCurso = (request, response) => {
  try {
    const id = +request.params.id
    cursosServ.deletarCurso(id - 1)
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
