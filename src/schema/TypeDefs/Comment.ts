import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const CommentType = new GraphQLObjectType({
  name: "Comment",
  description: "Author Type Definition",
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString }
  }),
});