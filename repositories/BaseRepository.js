const mongoose = require("mongoose");

class BaseRepository {
  constructor(model) {
    this._model = model;
  }

  async getById(id) {
    return this._model.findById(id).exec();
  }

  async getAll() {
    return this._model.find().exec();
  }

  async create(params) {
    params._id = new mongoose.Types.ObjectId();

    return this._model.create({ ...params });
  }

  async deleteById(id) {
    return this._model.findByIdAndRemove(id);
  }
}

module.exports = BaseRepository;
