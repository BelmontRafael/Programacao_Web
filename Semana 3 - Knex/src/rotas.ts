import express from "express"
import rotasAlunos from "./alunos/rotasAlunos"
import rotasCursos from "./cursos/rotasCursos"
import rotasMatriculas from "./matriculas/rotasMatriculas"

const rotas = express.Router()
rotas.use(rotasAlunos, rotasCursos, rotasMatriculas)

export default rotas
