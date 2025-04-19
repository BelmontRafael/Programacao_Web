import express from "express"
import ControllerAlunos from "./controllerAlunos"

const rotasAlunos = express.Router()

rotasAlunos.get("/alunos", new ControllerAlunos().listar)
rotasAlunos.get("/aluno/:id", new ControllerAlunos().visualizar)
rotasAlunos.get("/aluno/:id/cursos", new ControllerAlunos().listarCursos)
rotasAlunos.post("/aluno", new ControllerAlunos().criar)
rotasAlunos.post("/aluno/:id/matricular", new ControllerAlunos().matricular)
rotasAlunos.put("/aluno/:id", new ControllerAlunos().atualizar)
rotasAlunos.patch("/aluno/:id", new ControllerAlunos().atualizarParcial)
rotasAlunos.delete("/aluno/:id", new ControllerAlunos().deletar)

export default rotasAlunos
