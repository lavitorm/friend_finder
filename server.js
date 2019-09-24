var express = require ('express');
var path = require ('path');
var app = express();
// static folder
app.use(express.static(path.join(__dirname, 'public')));
var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
