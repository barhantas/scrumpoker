const express = require("express"),
  port = process.env.PORT || 8000,
  mongoose = require("mongoose"),
  Sprint = require("./api/models/sprintModel"),
  bodyParser = require("body-parser"),
  cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(8810);
const io = require("socket.io").listen(server, { origins: "*:*" });

io.on("connection", listener => {});
module.exports = io;

const routes = require("./api/routes/sprintRoutes");
app.use(cors());
routes(app);

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/scrumpokerdb", { useNewUrlParser: true });

app.listen(port);

console.log("RESTful API server started on: " + port);
