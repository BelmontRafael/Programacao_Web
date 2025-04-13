import express from "express"
import ControllerMatriculas from "./controllerMatriculas"

const rotasMatriculas = express.Router()

rotasMatriculas.post("/matricula", new ControllerMatriculas().criar)
rotasMatriculas.get("/matriculas", new ControllerMatriculas().listar)
rotasMatriculas.get("/aluno/:id_aluno/cursos", new ControllerMatriculas().listarCursosPorAluno)
rotasMatriculas.get("/curso/:id_curso/alunos", new ControllerMatriculas().listarAlunosPorCurso)
rotasMatriculas.delete("/matricula/:id_aluno/:id_curso", new ControllerMatriculas().deletar)

export default rotasMatriculas
