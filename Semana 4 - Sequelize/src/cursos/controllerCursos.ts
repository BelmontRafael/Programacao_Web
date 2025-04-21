import { Request, Response } from "express"
import ServiceCursos from "./serviceCursos"

export default class ControllerCursos {
  listar = async (req: Request, res: Response) => {
    try {
      const cursos = await new ServiceCursos().listarCursos()
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
      const curso = await new ServiceCursos().visualizarCurso(+req.params.id)
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
      const curso = await new ServiceCursos().criarCurso(req.body)
      res.status(201).json("Curso cadastrado com sucesso!")
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
      await new ServiceCursos().atualizarCurso(+req.params.id, req.body)
      res.status(204).send("Curso atualizado com sucesso!")
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
      await new ServiceCursos().atualizarCursoParcial(+req.params.id, req.body)
      res.status(204).send("Curso atualizado com sucesso!")
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
      await new ServiceCursos().deletarCurso(+req.params.id)
      res.status(204).send("Curso deletado com sucesso!")
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
