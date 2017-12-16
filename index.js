// Setup
var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000;
var bodyParser = require("body-parser");
var todoRoutes = require("./routes/todo");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

// Routes
app.get("/", function(req, res) {
  res.send("Hello from Root!");
});

app.use("/api/todos", todoRoutes);

// Setup Server
app.listen(PORT, function() {
  console.log(`Server running on ${PORT}`);
});
