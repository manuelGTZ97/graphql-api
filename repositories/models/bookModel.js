const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  publishedDate: mongoose.Date,
  genre: String,
  authorId: Schema.Types.ObjectId,
});

module.exports = mongoose.model("book", bookSchema);
