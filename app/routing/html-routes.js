console.log('HTML Route Connected!');

/* required dependencies */
var path = require('path');

/* routes */
function htmlRoutes(app) {
/* ("get") -> will load the survey.html page */
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

/* ("use") -> will load the home.html page */
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

}

/* exports to file server.js */
module.exports = htmlRoutes;
