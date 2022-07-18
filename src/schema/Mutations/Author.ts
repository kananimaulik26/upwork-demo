import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
  } from "graphql";
  import { AuthorType } from "../TypeDefs/Author";
  import { Author } from "../../Entities/Author";
  
  export const CREATE_AUTHOR = {
    type: AuthorType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) }
    },
    async resolve(parent: any, args: any) {
      const { name, email} = args;
  
       await Author.insert({
        name,
        email
      });
  
      return { ...args};
    },
  };
  
  export const UPDATE_AUTHOR = {
    type: GraphQLBoolean,
    args: {
      id: { type: GraphQLID },
      input: {
        type: new GraphQLInputObjectType({
          name: "AuthorInput",
          fields: () => ({
            name: { type: GraphQLString },
            email: { type: GraphQLString}
          }),
        }),
      },
    },
    async resolve(_: any, { id, input }: any) {
      const userFound = await Author.findOneBy({ id });
      if (!userFound) throw new Error("User not found")
  
      const response = await Author.update({ id }, input);
  
      if (response.affected === 0) return { message: "User not found" };
  
        return true;
    },
  };
  
  export const DELETE_AUTHOR = {
    type: GraphQLBoolean,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, { id }: any) {
      const result = await Author.delete({ id });
      if (result.affected! > 0) return true;
      return false;
    },
  };

  