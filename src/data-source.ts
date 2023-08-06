import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { ToDo } from "./entity/ToDo"
import { config } from "dotenv"

config()

const db_uri = process.env.DB_URI

export const AppDataSource = new DataSource({
    type: "mysql",
    url: db_uri,
    synchronize: true,
    logging: false,
    entities: [User, ToDo],
    migrations: [],
    subscribers: [],
})
