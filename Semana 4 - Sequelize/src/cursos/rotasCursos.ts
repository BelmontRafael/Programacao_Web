import express from "express"
import ControllerCursos from "./controllerCursos"

const rotasCursos = express.Router()

rotasCursos.get("/cursos", new ControllerCursos().listar)
rotasCursos.get("/curso/:id", new ControllerCursos().visualizar)
rotasCursos.get("/curso/:id/alunos", new ControllerCursos().listarAlunos)
rotasCursos.post("/curso", new ControllerCursos().criar)
rotasCursos.put("/curso/:id", new ControllerCursos().atualizar)
rotasCursos.patch("/curso/:id", new ControllerCursos().atualizarParcial)
rotasCursos.delete("/curso/:id", new ControllerCursos().deletar)

export default rotasCursos
