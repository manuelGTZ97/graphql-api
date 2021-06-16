function BaseServiceWithRepository(superclass) {
  return class {
    constructor() {
      this._repository = new superclass();
    }

    async getById(id) {
      return this._repository.getById(id);
    }

    async getAll() {
      return this._repository.getAll();
    }

    async create(params) {
      return this._repository.create(params);
    }
  };
}
module.exports = BaseServiceWithRepository;
