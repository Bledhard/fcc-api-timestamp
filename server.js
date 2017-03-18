var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var routes = require('~/workspace/timestamp/index.js');
var api = require('~/workspace/timestamp/timestamp.js');    
var port = process.env.PORT || 8080;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));
    
routes(app);
api(app);

app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});