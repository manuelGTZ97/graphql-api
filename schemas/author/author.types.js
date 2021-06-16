const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    authors: [Author]
    author(id: ID!): Author
  }
  type Author {
    _id: ID!
    name: String!
    birthDate: String!
    biography: String!
    photo: ID!
    books: [Book]
  }
`;

module.exports = typeDefs;
