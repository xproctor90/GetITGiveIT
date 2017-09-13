var express = require('express');
const request = require('ajax-request');


module.exports=function (app){

app.set('views', 'public/views');

app.set('view engine', '.hbs');

app.get('/', function(req, res) {
  res.render("home.hbs");
});

app.get('/survey', function(req, res) {
	res.render("survey.hbs");
});





app.get('/gift/:id', function (req, res){
//function grouponItems(category, count, callback){//express handler - get
	var category='eletronic'
	var count='2'
	var url='https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&filters=category:'+category+'&offset=0&limit='+count
	console.log(url)
	request({
	  url:url
	}, function(err, resp, body) {
		var x= JSON.parse(body)
		//console.log(x.deals);
	  var respond=[];
	  for(var i=0; i<x["deals"].length;i++){
	  	respond.push({dealTitle: x.deals[i].title, dealurl: x.deals[i].dealUrl, image: x.deals[i].smallImageUrl});
	  }
	  res.render("gift", { gift: respond });

	 // callback(respond)
	});



});


};