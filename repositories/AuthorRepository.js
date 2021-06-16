const BaseRepository = require("./BaseRepository");
const { authorModel } = require("./models");

class AuthorRepository extends BaseRepository {
  constructor() {
    super(authorModel);
  }
}

module.exports = AuthorRepository;
