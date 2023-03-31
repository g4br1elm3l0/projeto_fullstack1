import { hashSync } from 'bcryptjs';
import { Exclude } from 'class-transformer';
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from './contact.entity';


@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    @Exclude()
    password: string

    @CreateDateColumn()
    registeredAt: Date

    @Column({ default: true })
    isActive: boolean

    @OneToMany(() => Contact, contact => contact.user, { eager: true })
    contact: Contact[]


    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = hashSync(this.password, 10)
    }
}