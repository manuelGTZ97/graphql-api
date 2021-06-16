const { BookService, AuthorService } = require("../../services");

const _bookService = new BookService();
const _authorService = new AuthorService();

const resolvers = {
  Query: {
    books: (parent, args) => {
      return _bookService.getAll();
    },
    book: (parent, args) => {
      return _bookService.getById(args.id);
    },
  },
  Book: {
    author: (parent, args) => {
      return _authorService.getById(parent.authorId);
    },
  },
  Mutation: {
    addBook: (parent, args) => {
      return _bookService.create(args.book);
    },
  },
};

module.exports = resolvers;
