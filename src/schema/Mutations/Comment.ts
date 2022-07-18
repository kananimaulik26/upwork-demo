import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
  } from "graphql";
  import { Comment } from "../../Entities/Comment";
  import { CommentType } from "../TypeDefs/Comment";
  
  export const CREATE_COMMENT = {
    type: CommentType,
    args: {
      description: { type: new GraphQLNonNull(GraphQLString) }
    },
    async resolve(parent: any, args: any) {
      const { description} = args;
  
       await Comment.insert({
        description
      });
  
      return { ...args};
    },
  };
  
  export const UPDATE_COMMENT = {
    type: GraphQLBoolean,
    args: {
      id: { type: GraphQLID },
      input: {
        type: new GraphQLInputObjectType({
          name: "CommentInput",
          fields: () => ({
            description: { type: GraphQLString },
          }),
        }),
      },
    },
    async resolve(_: any, { id, input }: any) {
      const userFound = await Comment.findOneBy({ id });
      if (!userFound) throw new Error("Comment Not found")
  
      const response = await Comment.update({ id }, input);
  
      if (response.affected === 0) return { message: "Comment Not Found" };
  
        return true;
    },
  };
  
  export const DELETE_COMMENT = {
    type: GraphQLBoolean,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, { id }: any) {
      const result = await Comment.delete({ id });
      if (result.affected! > 0) return true;
      return false;
    },
  };

  