import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
  } from "graphql";
import { Comment } from "../../Entities/Comment";
import { CommentType } from "../TypeDefs/Comment";
  
  export const GET_ALL_COMMENT = {
    type: new GraphQLList(CommentType),
    resolve() {
      return Comment.find();
    },
  };
  
  export const GET_COMMENT = {
    type: CommentType,
    args: {
      postId: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, args: any) {
      const result = await Comment.findOneBy({ post: args.postId });
      return result;
    },
  };
  