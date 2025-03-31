import * as cursosRep from "./repository.js"

export const criarCurso = (curso) => {
  //REGRAS/////////////////////////////////////////////////////////////////////////
  const cursos = cursosRep.findAll()
  const idDuplicado = cursos.some((c) => c.id === curso.id)

  if (idDuplicado) {
    const error = new Error()
    error.name = "dadosDuplicados"
    error.message = "Não foi possivel criar o curso, pois já existe um curso com o mesmo ID."
    throw error
  }

  if (!curso.nome || !curso.id) {
    const error = new Error()
    error.name = "dadosIncompletos"
    error.message = "Não foi possivel criar o curso, pois não foi preenchido todas as informações."
    throw error
  }
  //////////////////////////////////////////////////////////////////////////////
  cursosRep.create(curso)
  return curso
}

export const listarCursos = () => {
  const cursos = cursosRep.findAll()
  //REGRAS/////////////////////////////////////////////////////////////////////////
  if (cursos.length === 0) {
    const error = new Error()
    error.name = "listaVazia"
    error.message = "Não foi possivel listar os cursos, pois não há cursos cadastrados!"
    throw error
  }
  /////////////////////////////////////////////////////////////////////////////
  return cursos
}

export const visualizarCurso = (id) => {
  const curso = cursosRep.findOne(id)
  //REGRAS/////////////////////////////////////////////////////////////////////////
  if (!curso) {
    const error = new Error()
    error.name = "indiceVazio"
    error.message = "Não foi possivel visualizar o curso, pois não existe curso nesse índice!"
    throw error
  }
  /////////////////////////////////////////////////////////////////////////////
  return curso
}

export const atualizarCurso = (id, curso) => {
  //REGRAS/////////////////////////////////////////////////////////////////////////
  const cursos = cursosRep.findAll()

  if (!cursos[id]) {
    const error = new Error()
    error.name = "indiceVazio"
    error.message = "Não foi possivel atualizar o curso, pois não existe curso nesse índice!"
    throw error
    /////////////////////////////////////////////////////////////////////////////
  }

  cursosRep.update(id, curso)
}

export const atualizarCursoParcial = (id, curso) => {
  //REGRAS/////////////////////////////////////////////////////////////////////////
  const cursos = cursosRep.findAll()

  if (!cursos[id]) {
    const error = new Error()
    error.name = "indiceVazio"
    error.message = "Não foi possivel atualizar o curso, pois não existe curso neste índice"
    throw error
  }
  /////////////////////////////////////////////////////////////////////////////////

  const atributosPermitidos = ["nome"]
  const cursoFiltrado = {}

  for (const atributo of atributosPermitidos) {
    if (curso.hasOwnProperty(atributo)) {
      cursoFiltrado[atributo] = curso[atributo]
    }
  }

  cursosRep.patchUpdate(id, cursoFiltrado)
}

export const deletarCurso = (id) => {
  //REGRAS/////////////////////////////////////////////////////////////////////////
  const cursos = cursosRep.findAll()

  if (!cursos[id]) {
    const error = new Error()
    error.name = "indiceVazio"
    error.message = "Não foi possivel deletar o curso, pois não existe curso nesse índice!"
    throw error
    /////////////////////////////////////////////////////////////////////////////
  }

  cursosRep.destroy(id)
}
