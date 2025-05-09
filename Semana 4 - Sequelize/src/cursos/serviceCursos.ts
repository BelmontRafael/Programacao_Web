import { Curso } from "./curso"
import RepositoryCursos from "./repositoryCursos"

export default class ServiceCursos {
  listarCursos = async () => {
    const cursos = await new RepositoryCursos().getAll()
    if (!cursos || cursos.length === 0) {
      // Changed check
      const erro = new Error("Não há cursos cadastrados!")
      erro.name = "bancoVazio"
      throw erro
    }
    return cursos
  }

  visualizarCurso = async (id: number) => {
    const curso = await new RepositoryCursos().getOne(id)
    if (!curso) {
      const erro = new Error("Não foi encontrado curso com este Id!")
      erro.name = "idInexistente"
      throw erro
    }
    return curso
  }

  criarCurso = async (curso: Curso) => {
    const { nome, carga_horaria } = curso
    if (!nome || !carga_horaria) {
      const erro = new Error("Dados incompletos, por favor preencher todas as informações do curso!")
      erro.name = "dadosIncompletos"
      throw erro
    }
    const cursoCriado = await new RepositoryCursos().create(curso)
    return cursoCriado
  }

  atualizarCurso = async (id: number, curso: Curso) => {
    const cursoExiste = await new RepositoryCursos().getOne(id)
    if (!cursoExiste) {
      const erro = new Error("Não foi encontrado curso com este Id!")
      erro.name = "idInexistente"
      throw erro
    }
    const cursoAtualizado = await new RepositoryCursos().update(id, curso)
    if (!cursoAtualizado) {
      throw new Error("Curso não encontrado") // Or handle this differently
    }
    return cursoAtualizado
  }

  atualizarCursoParcial = async (id: number, curso: Partial<Curso>) => {
    const cursoExiste = await new RepositoryCursos().getOne(id)
    if (!cursoExiste) {
      const erro = new Error("Não foi encontrado curso com este Id!")
      erro.name = "idInexistente"
      throw erro
    }
    const cursoAtualizado = await new RepositoryCursos().patch(id, curso)
    if (!cursoAtualizado) {
      throw new Error("Curso não encontrado")
    }
    return cursoAtualizado
  }

  deletarCurso = async (id: number) => {
    const curso = await new RepositoryCursos().getOne(id)
    if (!curso) {
      const erro = new Error("Não foi encontrado curso com este Id!")
      erro.name = "idInexistente"
      throw erro
    }
    await new RepositoryCursos().destroy(id)
  }
}
