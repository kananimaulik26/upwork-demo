import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
  } from "graphql";
import { Author } from "../../Entities/Author";
import { AuthorType } from "../TypeDefs/Author";
  
  export const GET_ALL_AUTHORS = {
    type: new GraphQLList(AuthorType),
    resolve() {
      return Author.find();
    },
  };
  
  export const GET_AUTHOR = {
    type: AuthorType,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(_: any, args: any) {
      const result = await Author.findOneBy({ email: args.email});
      return result;
    },
  };
  