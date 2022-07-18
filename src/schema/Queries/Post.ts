import {
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
  } from "graphql";
import { Post } from "../../Entities/Post";
import { PostType } from "../TypeDefs/Post";

export const GET_ALL_POST = {
    type: new GraphQLList(PostType),
    resolve() {
      return Post.find();
    },
  };
  
  export const GET_POST = {
    type: PostType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) },
    },
    async resolve(_: any, args: any) {
      const result = await Post.findOneBy({ authorId: args.id });
      return result;
    },
  };