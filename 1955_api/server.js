var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/static')));

require("./server/config/mongoose.js");
var routes_setter = require("./server/config/routes.js");
routes_setter(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
