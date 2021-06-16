const BaseRepository = require("./BaseRepository");
const { bookModel } = require("./models");

class BookRepository extends BaseRepository {
  constructor() {
    super(bookModel);
  }

  async getAllByAuthorId(authorId) {
    return this._model.find({ authorId }).exec();
  }
}

module.exports = BookRepository;
