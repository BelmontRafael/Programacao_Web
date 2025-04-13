import RepositoryMatriculas from "./repositoryMatriculas"
import RepositoryAlunos from "../alunos/repositoryAlunos"
import RepositoryCursos from "../cursos/repositoryCursos" // Supondo que você tenha esse repositório
import { Matricula } from "./matricula"

export default class ServiceMatriculas {
  criarMatricula = async (matricula: Matricula) => {
    const aluno = await new RepositoryAlunos().getOne(matricula.id_aluno)
    if (!aluno) {
      const erro = new Error("Não foi possivel matricular aluno, pois não existe aluno com este id")
      erro.name = "idInexistente"
      throw erro
    }

    const curso = await new RepositoryCursos().getOne(matricula.id_curso)
    if (!curso) {
      const erro = new Error("Não foi possivel matricular aluno, pois não existe curso com este id")
      erro.name = "idInexistenteCurso"
      throw erro
    }

    const novaMatricula = await new RepositoryMatriculas().create(matricula)
    return novaMatricula
  }

  listarMatriculas = async () => {
    const matriculas = await new RepositoryMatriculas().getAll()

    if (!matriculas) {
      const erro = new Error("Não há matriculas cadastradas")
      erro.name = "bancoVazio"
      throw erro
    }
    return matriculas
  }

  listarCursosPorAluno = async (id_aluno: number) => {
    const cursos = await new RepositoryMatriculas().getCursosByAluno(id_aluno)
    if (!cursos) {
      const erro = new Error("Este aluno não está matriculado em nenhum curso")
      erro.name = "semCursos"
      throw erro
    }
    return cursos
  }

  listarAlunosPorCurso = async (id_curso: number) => {
    const alunos = await new RepositoryMatriculas().getAlunosByCurso(id_curso)
    if (!alunos) {
      const erro = new Error("Nenhum aluno está matriculado neste curso")
      erro.name = "semAlunos"
      throw erro
    }
    return alunos
  }

  deletarMatricula = async (id_aluno: number, id_curso: number) => {
    const matricula = await new RepositoryMatriculas().getOne(id_aluno, id_curso)
    if (!matricula) {
      const erro = new Error("Matrícula não encontrada")
      erro.name = "matriculaInexistente"
      throw erro
    }

    await new RepositoryMatriculas().destroy(id_aluno, id_curso)
  }
}
