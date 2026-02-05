const http=require('http');
function getrequestFromClient(req,res){
  console.log(req.url,req.method);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Title name</title> </head>')
  res.write('<body><h1>this is the first server using the node js</h1> </body>')
  res.write('</html>');
  res.end();
}
const server=http.createServer(getrequestFromClient);
const port=3000;
server.listen(port,()=>{
  console.log(`your request is coming at the adderess: https://localhost:${port}`);
})




