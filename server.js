var http= require("http");

var server=http.createServer(function(request, response){

		response.writeHead(200,{'content-type':'text'});
		response.end("hello world")
});

server.listen(1813, function(){
	console.log("server is listening at 3000")
})