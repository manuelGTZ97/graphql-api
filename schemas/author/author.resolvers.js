const { AuthorService, BookService } = require("../../services");

const _authorService = new AuthorService();
const _bookService = new BookService();

const resolvers = {
  Query: {
    authors: (parent, args) => {
      return _authorService.getAll();
    },
    author: (parent, args) => {
      return _authorService.getById(args.id);
    },
  },
  Author: {
    books: (parent, args) => {
      return _bookService.getAllByAuthorId(parent._id);
    },
  },
  Mutation: {
    addAuthor: (parent, args) => {
      return _authorService.create(args.author);
    },
  },
};

module.exports = resolvers;
