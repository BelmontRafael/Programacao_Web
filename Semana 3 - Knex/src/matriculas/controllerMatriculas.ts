import { Request, Response } from "express"
import ServiceMatriculas from "./serviceMatriculas"

export default class ControllerMatriculas {
  criar = async (req: Request, res: Response) => {
    try {
      const matricula = await new ServiceMatriculas().criarMatricula(req.body)
      res.status(201).json(matricula)
    } catch (error) {
      if (error instanceof Error) {
        switch (error.name) {
          case "idInexistente":
            res.status(400).json({ name: error.name, msg: error.message })
            break
          case "idInexistenteCurso":
            res.status(400).json({ name: error.name, msg: error.message })
            break
          default:
            res.status(400).json("Ocorreu um erro inesperado com sua requisição!")
            break
        }
      }
    }
  }

  listar = async (req: Request, res: Response) => {
    try {
      const matriculas = await new ServiceMatriculas().listarMatriculas()
      res.status(200).json(matriculas)
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

  listarCursosPorAluno = async (req: Request, res: Response) => {
    try {
      const cursos = await new ServiceMatriculas().listarCursosPorAluno(+req.params.id_aluno)
      res.status(200).json(cursos)
    } catch (error) {
      if (error instanceof Error) {
        switch (error.name) {
          case "semCursos":
            res.status(400).json({ name: error.name, msg: error.message })
            break
          default:
            res.status(400).json("Ocorreu um erro inesperado com sua requisição!")
            break
        }
      }
    }
  }

  listarAlunosPorCurso = async (req: Request, res: Response) => {
    try {
      const alunos = await new ServiceMatriculas().listarAlunosPorCurso(+req.params.id_curso)
      res.status(200).json(alunos)
    } catch (error) {
      if (error instanceof Error) {
        switch (error.name) {
          case "semAlunos":
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
      const result = await new ServiceMatriculas().deletarMatricula(+req.params.id_aluno, +req.params.id_curso)
      res.status(200).json(result)
    } catch (error) {
      if (error instanceof Error) {
        switch (error.name) {
          case "matriculaInexistente":
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
