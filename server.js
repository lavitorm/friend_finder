/* required dependencies */
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

/* create application/json parser */
app.use(bodyParser.json());

/* parse application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

/* static folder */
app.use(express.static("app/public"));

/* api routes */
require("./app/routing/api-route.js")(app);
require("./app/routing/html-route.js")(app);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
