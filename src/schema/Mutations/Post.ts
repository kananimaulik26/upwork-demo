import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString,
  } from "graphql";
import { Post } from "../../Entities/Post";
import { PostType } from "../TypeDefs/Post";

export const CREATE_POST = {
  type: PostType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLInt) },
  },
  async resolve(parent: any, args: any) {
    const { title, description, authorId } = args;

    const result = await Post.insert({
      title,
      description,
      authorId
    });

    return { ...args};
  },
};

export const DELETE_POST = {
  type: GraphQLBoolean,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, { id }: any) {
    const result = await Post.delete({ id });
    if (result.affected! > 0) return true;
    return false;
  },
}

export const UPDATE_POST = {
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID },
    input: {
      type: new GraphQLInputObjectType({
        name: "PostInput",
        fields: () => ({
          title: { type: GraphQLString },
          description: { type: GraphQLString },
        }),
      }),
    },
  },
  async resolve(_: any, { id, input }: any) {
    const postFound = await Post.findOneBy({ id });
    if (!postFound) throw new Error("User not found");

      const response = await Post.update({ id }, input);

     if (response.affected === 0) return { message: "User not found" };

    return true;
  },
}