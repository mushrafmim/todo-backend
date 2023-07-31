import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class ToDo {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    title: string

    @Column()
    description: string

    @ManyToOne(() => User, (user) => user.todos)
    user: User
}