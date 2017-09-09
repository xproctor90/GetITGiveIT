const getItems=require('../controllers/gift_controller').getItems;
const expect=require("chai").expect;
function lengthTest(count){
	var items=getItems("eletronics", count, getArray);
}	 

function getArray(respond){
	console.log(respond);
}
lengthTest(2);

// describe("test ajax call", function(done){
// 	it("should return 2 eletronics", function(){
// 		console.log(respond)
// 	})
// 	it("should return 10 eletronics", function(){
// 		expect(lengthTest(10)).to.equal(10)
// 	})

// })