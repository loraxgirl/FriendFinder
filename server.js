// Required NPM packages
var express = require("express");
var bodyParser = require("body-parser");

// ==============================================================================
// Express Config - sets up basic properties for express server

// Tells node to create express server
var app = express();

// Sets initial port
var PORT = process.env.PORT || 8080;

// Setup BodyParser with standard code to make it easy for server to interpret received data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// Route Files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ==============================================================================
// Server "Listen" code & console log to test/confirm
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
