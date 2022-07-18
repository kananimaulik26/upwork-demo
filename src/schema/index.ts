import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GREETING } from "./Queries/Greeting";
import { GET_ALL_USERS, GET_USER } from "./Queries/User";
import { GET_POST, GET_ALL_POST } from "./Queries/Post";
import { GET_ALL_AUTHORS, GET_AUTHOR } from "./Queries/Author";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutations/User";
import { CREATE_POST, DELETE_POST, UPDATE_POST } from "./Mutations/Post";
import { CREATE_AUTHOR, DELETE_AUTHOR, UPDATE_AUTHOR } from "./Mutations/Author";


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING,
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER,
    getPost: GET_POST,
    getAllPost: GET_ALL_POST,
    getAuthor: GET_AUTHOR,
    getAllAuthor: GET_ALL_AUTHORS
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updateUser: UPDATE_USER,
    createPost: CREATE_POST,
    deletePost: DELETE_POST,
    updatePost: UPDATE_POST,
    createAuthor: CREATE_AUTHOR,
    deleteAuthor: DELETE_AUTHOR,
    updateAuthor: UPDATE_AUTHOR
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
