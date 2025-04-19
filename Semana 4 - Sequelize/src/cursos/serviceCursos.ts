import { Curso } from "./curso"
import RepositoryCursos from "./repositoryCursos"

export default class ServiceCursos {
  async listarCursos() {
    const cursos = await new RepositoryCursos().getAll()
    if (!cursos || cursos.length === 0) {
      const erro = new Error("Não há cursos cadastrados!")
      erro.name = "bancoVazio"
      throw erro
    }
    return cursos
  }

  async visualizarCurso(id: number) {
    const curso = await new RepositoryCursos().getOne(id)
    if (!curso) {
      const erro = new Error("Não foi encontrado curso com este Id!")
      erro.name = "idInexistente"
      throw erro
    }
    return curso
  }

  async criarCurso(curso: Curso) {
    const { nome, carga_horaria } = curso
    if (!nome || !carga_horaria) {
      const erro = new Error("Dados incompletos, por favor preencher todas as informações do curso!")
      erro.name = "dadosIncompletos"
      throw erro
    }
    return await new RepositoryCursos().create(curso)
  }

  async atualizarCurso(id: number, curso: Curso) {
    const cursoExiste = await new RepositoryCursos().getOne(id)
    if (!cursoExiste) {
      const erro = new Error("Não foi encontrado curso com este Id!")
      erro.name = "idInexistente"
      throw erro
    }
    return await new RepositoryCursos().update(id, curso)
  }

  async atualizarCursoParcial(id: number, curso: Partial<Curso>) {
    const cursoExiste = await new RepositoryCursos().getOne(id)
    if (!cursoExiste) {
      const erro = new Error("Não foi encontrado curso com este Id!")
      erro.name = "idInexistente"
      throw erro
    }
    return await new RepositoryCursos().patch(id, curso)
  }

  async deletarCurso(id: number) {
    const curso = await new RepositoryCursos().getOne(id)
    if (!curso) {
      const erro = new Error("Não foi encontrado curso com este Id!")
      erro.name = "idInexistente"
      throw erro
    }
    await new RepositoryCursos().destroy(id)
  }

  async listarAlunosDoCurso(id: number) {
    const curso = await new RepositoryCursos().getOne(id)
    if (!curso) {
      const erro = new Error("Curso não encontrado")
      erro.name = "idInexistente"
      throw erro
    }
    return await new RepositoryCursos().getAlunosDoCurso(id)
  }
}
