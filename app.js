const express = require("express"),
  port = process.env.PORT || 8000,
  mongoose = require("mongoose"),
  Sprint = require("./api/models/sprintModel"),
  bodyParser = require("body-parser"),
  cors = require("cors");

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(8810);
const io = require("socket.io").listen(server, { origins: "*:*" });

io.on("connection", listener => {
  //console.log(listener);
  console.log("a user is connected");
});
module.exports = io;

const routes = require("./api/routes/sprintRoutes"); //importing route
app.use(cors());
routes(app); //register the route

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/pinaddb", { useNewUrlParser: true });

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1", routes);

app.listen(port);

console.log("RESTful API server started on: " + port);
