import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    firstname: string

    @Column()
    lastname: string

    @Column({
        nullable: false,
        unique: true
    })
    username: string

    @Column({
        nullable: false
    })
    password: string

    @Column({
        type: 'date'
    })
    birthdate

}
