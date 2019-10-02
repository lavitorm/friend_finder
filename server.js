/* required dependencies */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

/* api routes */
var apiRoutes = require('./app/routing/api-routes.js');
var htmlRoutes = require('./app/routing/html-routes.js');

/* express app setup */
var app = express();

/* create application/json parser */
app.use(bodyParser.json());

/* set up of parse application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

/* static folder */
app.use(express.static('app/public'));

/* server routing for api and html */ 
apiRoutes(app); 
htmlRoutes(app);

/* server starter */
var PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
