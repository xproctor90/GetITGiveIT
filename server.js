var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
var path = require('path');


//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app);
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

app.listen(8080, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});

//For Handlebars
app.set('views', './views');
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
  res.render("home.hbs");
}); 

app.get('/survey', function(req, res) {
	res.render("survey.hbs");
});