import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql";

export const PostType = new GraphQLObjectType({
    name: "Post",
    description: "Post Type Definition",
    fields: () => ({
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      authorId: {type: GraphQLInt}
    }),
  });