const Express = require("express");
const { dbContext } = require("./repositories");
const server = require("./schemas");

var cors = require("cors");
var app = Express();
app.use(cors());

server.applyMiddleware({ app });

dbContext().then(async () => {
  app.listen(process.env.PORT || 4000, () => {
    console.log("server running at 4000");
  });
});
