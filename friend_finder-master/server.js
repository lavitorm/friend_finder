// required dependencies
var express = require ("express");
var bodyParser = require("body-parser");
var path = require ("path");
var app = express();

// static folder
//app.use(express.static(path.join(__dirname, 'public')));

// create application/json parser
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api + json"}));

//api routes
require(path.join(__dirname, "./app/routing/api-routes.js"))(app);
require(path.join(__dirname, "./app/routing/html-routes.js"))(app);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

