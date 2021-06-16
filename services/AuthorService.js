const BaseServiceWithRepository = require("./BaseServiceWithRepository");
const { AuthorRepository } = require("../repositories");

class AuthorService extends BaseServiceWithRepository(AuthorRepository) {}

module.exports = AuthorService;
