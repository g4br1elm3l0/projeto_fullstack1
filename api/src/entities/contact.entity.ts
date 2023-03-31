import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user.entity';


@Entity()
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    phone: string

    @CreateDateColumn()
    registeredAt: Date

    @Column({ default: true })
    isActive: boolean

    @ManyToOne(() => User, user => user.contact)
    user: User

}