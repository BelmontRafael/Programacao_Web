import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  DeletedAt,
  BelongsToMany
} from "sequelize-typescript"
import Matricula from "./Matricula"
import Curso from "./Curso"

@Table({
  tableName: "alunos",
  modelName: "Aluno",
  timestamps: true
})
export default class Aluno extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number

  @Column(DataType.STRING)
  declare nome: string

  @Column(DataType.DATE)
  declare idade: number

  @CreatedAt
  declare createdAt: Date

  @DeletedAt
  declare deletedAt: Date

  @BelongsToMany(() => Curso, () => Matricula)
  declare cursos?: Curso[]
}
