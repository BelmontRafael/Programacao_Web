import express from "express"
import rotasAlunos from "./alunos/rotasAlunos"
import rotasCursos from "./cursos/rotasCursos"

const rotas = express.Router()
rotas.use(rotasAlunos, rotasCursos)

export default rotas
