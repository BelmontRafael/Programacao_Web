import express from "express"
import rotasAlunos from "./alunos/rotasAlunos"
import rotasCursos from "./cursos/rotasCursos"

const rotas = express.Router()
rotas.use(rotasAlunos)
rotas.use(rotasCursos)

export default rotas
