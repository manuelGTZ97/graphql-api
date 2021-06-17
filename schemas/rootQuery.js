const { ApolloServer, gql } = require("apollo-server-express");
const { merge } = require("lodash");

const BookSchema = require("./book");
const AuthorSchema = require("./author");

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation {
    _empty: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "🦇 What is a man?",
  },
};

const server = new ApolloServer({
  typeDefs: [typeDefs, BookSchema.typeDefs, AuthorSchema.typeDefs],
  resolvers: merge(resolvers, BookSchema.resolvers, AuthorSchema.resolvers),
  playground: true,
  introspection: true,
});

module.exports = server;
