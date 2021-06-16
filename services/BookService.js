const BaseServiceWithRepository = require("./BaseServiceWithRepository");
const { BookRepository } = require("../repositories");

class BookService extends BaseServiceWithRepository(BookRepository) {
  async getAllByAuthorId(authorId) {
    return this._repository.getAllByAuthorId(authorId);
  }
}

module.exports = BookService;
