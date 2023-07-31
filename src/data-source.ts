import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { ToDo } from "./entity/ToDo"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Mm008911-*",
    database: "todo",
    synchronize: true,
    logging: false,
    entities: [User, ToDo],
    migrations: [],
    subscribers: [],
})
