const http=require("http");
//exporting http module

const server=http.createServer((req,res)=>{
//creating a server using createServer()
//req=request //res=respond 
//this is an unambigous function

if(req.url==='/todo'){
res.write("hello from todo");
res.end();
}


})


server.listen(3000);
//listening on port no 3000
