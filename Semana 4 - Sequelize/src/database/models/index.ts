import Aluno from "./aluno"
import Curso from "./curso"
import Matricula from "./matricula"

Aluno.belongsToMany(Curso, { through: Matricula, foreignKey: "id_aluno" })
Curso.belongsToMany(Aluno, { through: Matricula, foreignKey: "id_curso" })

export { Aluno, Curso, Matricula }
