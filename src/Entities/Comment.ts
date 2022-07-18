import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm"
import { Post } from "./Post"

@Entity()
export class Comment extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @ManyToOne(() => Post, (post) => post.comments)
    post: Post
}