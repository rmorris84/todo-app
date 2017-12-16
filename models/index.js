var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect(process.env.DB_HOST, { useMongoClient: true });
mongoose.Promise = global.Promise;
module.exports.Todo = require("./todo");
