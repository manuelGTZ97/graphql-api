const mongoose = require("mongoose");

const { Schema } = mongoose;

const authorSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  birthDate: mongoose.Date,
  biography: String,
  photo: String,
});

module.exports = mongoose.model("author", authorSchema);
