const getItems=require('../controllers/gift_controller').getItems;

function lengthTest(count){
	var items=getItems("health-and-fitness", count, getArray);
}	 

function getArray(respond){
	respond.map(v => {
		console.log(JSON.stringify(v,null,2));
	})
	//console.log("respond"+JSON.stringify(respond));
}
lengthTest(10);

// describe("test ajax call", function(done){
// 	it("should return 2 eletronics", function(){
// 		expect.lengthTest(10)
// 	})
	// it("should return 10 eletronics", function(){
	// 	expect(lengthTest(10)).to.equal(10)
	// })
