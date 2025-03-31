import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

const alunos = [];
const cursos = [];

//Listar alunos
app.get("/alunos", (request, response) => {
  response.status(200).json(alunos);
});

//Visualizar aluno
app.get("/aluno/:id", (request, response) => {
  const id = +request.params.id;
  const aluno = alunos.find((aluno) => aluno.id === id);

  aluno
    ? response.status(200).json(aluno)
    : response
        .status(200)
        .send("Aluno não encontrado!\nNão existe aluno com este ID.");
});

//Criar aluno
app.post("/aluno", (request, response) => {
  let newAluno = request.body;

  if (
    alunos.some(
      (aluno) =>
        aluno.id === newAluno.id || aluno.matricula === newAluno.matricula
    )
  ) {
    response.status(404).send("Já existe aluno com este ID ou matricula");
  } else {
    alunos.push(newAluno);
    response.status(201).send(`Aluno "${newAluno.nome}" criado com sucesso!`);
  }
});

//Atualizar aluno (total)
app.put("/aluno/:id", (request, response) => {
  const { nome, matricula } = request.body;
  const id = +request.params.id;
  const i = alunos.findIndex((aluno) => aluno.id === id);

  if (i === -1) {
    response
      .status(404)
      .send("Não foi possivel encontrar o aluno correspondente ao ID");
  } else {
    alunos[i].nome = nome ? nome : alunos[i].nome;
    alunos[i].matricula = matricula ? matricula : alunos[i].matricula;
    response.status(204).send();
  }
});

//Atualizar aluno (parcial)
app.patch("/aluno/:id", (request, response) => {
  const { nome } = request.body;
  const id = +request.params.id;
  const i = alunos.findIndex((aluno) => aluno.id === id);

  if (i === -1) {
    response
      .status(404)
      .send("Não foi possivel encontrar o aluno correspondente ao ID");
  } else {
    alunos[i].nome = nome ? nome : alunos[i].nome;
    alunos[i].matricula = matricula ? matricula : alunos[i].matricula;
    response.status(204).send();
  }
});

//Deletar aluno
app.delete("/aluno/:id", (request, response) => {
  const id = +request.params.id;
  const i = alunos.findIndex((aluno) => aluno.id === id);

  if (i === -1) {
    response
      .status(404)
      .send("Não foi possivel encontrar o aluno correspondente ao ID!");
  } else {
    alunos.splice(i, 1);
    response.status(204).send();
  }
});

//CURSOS -------------------------------------------------------------------------------------------------------------------------------------------

// Listar cursos
app.get("/cursos", (request, response) => {
  response.status(200).json(cursos);
});

// Visualizar curso
app.get("/curso/:id", (request, response) => {
  const id = +request.params.id;
  const curso = cursos.find((curso) => curso.id === id);

  curso
    ? response.status(200).json(curso)
    : response
        .status(404)
        .send("Curso não encontrado!\nNão existe curso com este ID.");
});

// Criar curso
app.post("/curso", (request, response) => {
  let newCurso = request.body;

  if (alunos.some((curso) => curso.id === newCurso.id)) {
    response.status(404).send("Já existe curso com este ID");
  } else {
    cursos.push(newCurso);
    response.status(201).send(`Curso "${newCurso.nome}" criado com sucesso!`);
  }
});

// Atualizar curso (total)
app.put("/curso/:id", (request, response) => {
  const { nome, duracao } = request.body;
  const id = +request.params.id;
  const i = cursos.findIndex((curso) => curso.id === id);

  if (i === -1) {
    response
      .status(404)
      .send("Não foi possível encontrar o curso correspondente ao ID.");
  } else {
    cursos[i].nome = nome ? nome : cursos[i].nome;
    cursos[i].duracao = duracao ? duracao : cursos[i].duracao;
    response.status(204).send();
  }
});

// Atualizar curso (parcial)
app.patch("/curso/:id", (request, response) => {
  const { duracao } = request.body;
  const id = +request.params.id;
  const i = cursos.findIndex((curso) => curso.id === id);

  if (i === -1) {
    response
      .status(404)
      .send("Não foi possível encontrar o curso correspondente ao ID.");
  } else {
    cursos[i].duracao = duracao ? duracao : curso[i].duracao;
    response.status(204).send();
  }
});

// Deletar curso
app.delete("/curso/:id", (request, response) => {
  const id = +request.params.id;
  const i = cursos.findIndex((curso) => curso.id === id);

  if (i === -1) {
    response
      .status(404)
      .send("Não foi possível encontrar o curso correspondente ao ID.");
  } else {
    cursos.splice(i, 1);
    response.status(204).send();
  }
});

app.listen(port, () => console.log("Api está sendo executada!"));
