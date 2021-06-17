const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    books: [Book]
    book(id: ID!): Book
  }

  input BookInput {
    title: String!
    genre: String!
    publishedDate: String!
    authorId: ID!
  }

  extend type Mutation {
    addBook(book: BookInput): Book
  }

  type Book {
    _id: ID!
    title: String!
    publishedDate: String!
    genre: String!
    authorId: ID!
    author: Author
  }
`;

module.exports = typeDefs;
