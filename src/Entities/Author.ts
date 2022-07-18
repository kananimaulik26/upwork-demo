import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm"
import { Post } from "./Post"   

@Entity()
export class Author extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @OneToMany(() => Post, (post) => post.authorId)
    posts: Post[]
}

