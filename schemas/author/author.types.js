const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    authors: [Author]
    author(id: ID!): Author
  }

  input AuthorInput {
    name: String!
    birthDate: String!
    biography: String!
    photo: String!
  }

  extend type Mutation {
    addAuthor(author: AuthorInput): Author
  }

  type Author {
    _id: ID!
    name: String!
    birthDate: String!
    biography: String!
    photo: String!
    books: [Book]
  }
`;

module.exports = typeDefs;
