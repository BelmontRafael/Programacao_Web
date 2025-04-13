import { Aluno } from "./aluno"
import RepositoryAlunos from "./repositoryAlunos"

export default class ServiceAlunos {
  async listarAlunos() {
    const alunos = await new RepositoryAlunos().getAll()

    if (!alunos) {
      const erro = new Error("Não há alunos cadastrados!")
      erro.name = "bancoVazio"
      throw erro
    }

    return alunos
  }

  async visualizarAluno(id: number) {
    const aluno = await new RepositoryAlunos().getOne(id)

    if (!aluno) {
      const erro = new Error("Não foi possivel visualizar o aluno, pois não existe aluno com este id")
      erro.name = "idInexistente"
      throw erro
    }

    return aluno
  }

  async criarAluno(aluno: Aluno) {
    const { nome, idade } = aluno

    if (!nome || !idade) {
      const erro = new Error("Dados incompletos, por favor preencher todas as informações do curso!")
      erro.name = "dadosIncompletos"
      throw erro
    }

    const alunoCriado = await new RepositoryAlunos().create(aluno)
    return alunoCriado
  }

  async atualizarAluno(id: number, dados: Aluno) {
    const aluno = await new RepositoryAlunos().getOne(id)

    if (!aluno) {
      const erro = new Error("Não foi possivel visualizar o aluno, pois não existe aluno com este id")
      erro.name = "idInexistente"
      throw erro
    }

    const alunoAtualizado = await new RepositoryAlunos().update(id, dados)
    return alunoAtualizado
  }

  async atualizarAlunoParcial(id: number, dados: Partial<Aluno>) {
    const aluno = await new RepositoryAlunos().getOne(id)

    if (!aluno) {
      const erro = new Error("Não foi possivel visualizar o aluno, pois não existe aluno com este id")
      erro.name = "idInexistente"
      throw erro
    }

    const alunoParcialmenteAtualizado = await new RepositoryAlunos().patch(id, dados)
    return alunoParcialmenteAtualizado
  }

  async deletarAluno(id: number) {
    const aluno = await new RepositoryAlunos().getOne(id)

    if (!aluno) {
      const erro = new Error("Não foi possivel visualizar o aluno, pois não existe aluno com este id")
      erro.name = "idInexistente"
      throw erro
    }

    await new RepositoryAlunos().destroy(id)
  }
}
