import { Request, Response } from "express"
import ServiceAlunos from "./serviceAlunos"

export default class ControllerAlunos {
  listar = async (req: Request, res: Response) => {
    try {
      const cursos = await new ServiceAlunos().listarAlunos()
      res.status(200).json(cursos)
    } catch (error) {
      if (error instanceof Error) {
        switch (error.name) {
          case "bancoVazio":
            res.status(400).json({ name: error.name, msg: error.message })
            break
          default:
            res.status(400).json("Ocorreu um erro inesperado com sua requisição!")
            break
        }
      }
    }
  }

  visualizar = async (req: Request, res: Response) => {
    try {
      const curso = await new ServiceAlunos().visualizarAluno(+req.params.id)
      res.status(200).json(curso)
    } catch (error) {
      if (error instanceof Error) {
        switch (error.name) {
          case "idInexistente":
            res.status(400).json({ name: error.name, msg: error.message })
            break
          default:
            res.status(400).json("Ocorreu um erro inesperado com sua requisição!")
            break
        }
      }
    }
  }

  criar = async (req: Request, res: Response) => {
    try {
      await new ServiceAlunos().criarAluno(req.body)
      res.status(201).send("Aluno cadastrado com sucesso!")
    } catch (error) {
      if (error instanceof Error) {
        switch (error.name) {
          case "dadosIncompletos":
            res.status(400).json({ name: error.name, msg: error.message })
            break
          default:
            res.status(400).json("Ocorreu um erro inesperado com sua requisição!")
            break
        }
      }
    }
  }

  atualizar = async (req: Request, res: Response) => {
    try {
      await new ServiceAlunos().atualizarAluno(+req.params.id, req.body)
      res.status(204).send("Aluno atualizado com sucesso!")
    } catch (error) {
      if (error instanceof Error) {
        switch (error.name) {
          case "idInexistente":
            res.status(400).json({ name: error.name, msg: error.message })
            break
          default:
            res.status(400).json("Ocorreu um erro inesperado com sua requisição!")
            break
        }
      }
    }
  }

  atualizarParcial = async (req: Request, res: Response) => {
    try {
      await new ServiceAlunos().atualizarAlunoParcial(+req.params.id, req.body)
      res.status(204).send("Aluno atualizado com sucesso!")
    } catch (error) {
      if (error instanceof Error) {
        switch (error.name) {
          case "idInexistente":
            res.status(400).json({ name: error.name, msg: error.message })
            break
          default:
            res.status(400).json("Ocorreu um erro inesperado com sua requisição!")
            break
        }
      }
    }
  }

  deletar = async (req: Request, res: Response) => {
    try {
      await new ServiceAlunos().deletarAluno(+req.params.id)
      res.status(204).send("Aluno deletado com sucesso!")
    } catch (error) {
      if (error instanceof Error) {
        switch (error.name) {
          case "idInexistente":
            res.status(400).json({ name: error.name, msg: error.message })
            break
          default:
            res.status(400).json("Ocorreu um erro inesperado com sua requisição!")
            break
        }
      }
    }
  }
}
