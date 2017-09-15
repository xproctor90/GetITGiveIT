var express = require('express');
const request = require('ajax-request');
const db= require("../app/models")


module.exports=function (app){

app.set('views', 'public/views');

app.set('view engine', '.hbs');

app.get('/', function(req, res) {
  res.render("home.hbs");
});

app.get('/survey', function(req, res) {
	res.render("survey.hbs");
});

app.get('/users', function(req, res) {
	res.render("user.hbs");
});



 // app.get("/api/authors/:id", function(req, res) {
 //    // Here we add an "include" property to our options in our findOne query
 //    // We set the value to an array of the models we want to include in a left outer join
 //    // In this case, just db.Post
 //    db.Author.findOne({
 //      where: {
 //        id: req.params.id
 //      },
 //      include: [db.Post]
 //    }).then(function(dbAuthor) {
 //      res.json(dbAuthor);
 //    });
 //  });


app.get('/gift/:id', function (req, res){
db.surveyAnswers.findOne({
      where: {
        userId: req.params.id
      },
     
     
    }).then(function(dbAuthor) {

    
  //console.log(dbAuthor.dataValues.response)

       
	
	
	var url='https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&filters=category:'+dbAuthor.dataValues.response+'&offset=0&limit=5'
	console.log(url)
	request({
	  url:url
	}, function(err, resp, body) {
		var x= JSON.parse(body)
		console.log(x.deals);
	  var respond=[];
	  for(var i=0; i<x["deals"].length;i++){
	  	respond.push({dealTitle: x.deals[i].title, dealURL: x.deals[i].dealUrl, dealImage: x.deals[i].smallImageUrl});
	  }
		console.log(respond)

	  res.render("gift", { gift: respond });

	 // callback(respond)
	});


	});
});


};