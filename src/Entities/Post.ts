import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from "typeorm"
import { Author } from "./Author"
import { Comment } from "./Comment"

@Entity()
export class Post extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @ManyToOne(() => Author, (author) => author.posts)
    authorId: Author

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[]
}