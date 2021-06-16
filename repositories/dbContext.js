const mongoose = require("mongoose");

const mongoAtlasUri =
  "mongodb+srv://manu:manu@gql-example.ufutq.mongodb.net/library?retryWrites=true&w=majority";

const dbContext = () => {
  return mongoose.connect(mongoAtlasUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = dbContext;
