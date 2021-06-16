const Express = require("express");
const { dbContext } = require("./repositories");
const server = require("./schemas");

var cors = require("cors");
var app = Express();
app.use(cors());

server.applyMiddleware({ app });

dbContext().then(async () => {
  app.listen(3001, () => {
    console.log("server running at 3001");
  });
});
