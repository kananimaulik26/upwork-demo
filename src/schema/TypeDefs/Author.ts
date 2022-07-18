import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "Author Type Definition",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString}
  }),
});
