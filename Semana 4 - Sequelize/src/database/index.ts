import { Sequelize } from "sequelize-typescript"
import dotenv from "dotenv"
import path from "path"

const currentDir = path.resolve(__dirname)
dotenv.config()

const sequelize = new Sequelize({
  database: process.env.DB_NAME || "postgres",
  dialect: "postgres",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "1234",
  host: "127.0.0.1",
  port: Number(process.env.DB_PORT) || 5432,
  models: [currentDir + "/models"]
})

export default sequelize
