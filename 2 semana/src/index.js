import express from "express"
import {
  atualizarAluno,
  atualizarAlunoParcial,
  criarAluno,
  deletarAluno,
  listarAlunos,
  visualizarAluno,
} from "./aluno/controller.js"
import {
  atualizarCurso,
  atualizarCursoParcial,
  criarCurso,
  deletarCurso,
  listarCursos,
  visualizarCurso,
} from "./curso/controller.js"
const app = express()
const port = 3000

app.use(express.json())

app.post("/aluno", criarAluno)
app.get("/alunos", listarAlunos)
app.get("/aluno/:id", visualizarAluno)
app.put("/aluno/:id", atualizarAluno)
app.patch("/aluno/:id", atualizarAlunoParcial)
app.delete("/aluno/:id", deletarAluno)

app.post("/curso", criarCurso)
app.get("/cursos", listarCursos)
app.get("/curso/:id", visualizarCurso)
app.put("/curso/:id", atualizarCurso)
app.patch("/curso/:id", atualizarCursoParcial)
app.delete("/curso/:id", deletarCurso)

/*

//Atualizar aluno (parcial)
app.patch("/aluno/:id", (request, response) => {
  const { nome } = request.body
  const id = +request.params.id
  const i = alunos.findIndex((aluno) => aluno.id === id)

  if (i === -1) {
    response.status(404).send("Não foi possivel encontrar o aluno correspondente ao ID")
  } else {
    alunos[i].nome = nome ? nome : alunos[i].nome
    alunos[i].matricula = matricula ? matricula : alunos[i].matricula
    response.status(204).send()
  }
})

*/

app.listen(port, () => console.log("Api está sendo executada!"))
