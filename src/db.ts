import { DataSource } from "typeorm";
import { Users } from "./Entities/Users";
import { Author } from "./Entities/Author";
import { Comment } from "./Entities/Comment";
import { Post } from "./Entities/Post";
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME } from "./config";

export const AppDataSource = new DataSource({
  type: "mysql",
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  synchronize: true,
  entities: [Users,Comment, Post, Author],
});
