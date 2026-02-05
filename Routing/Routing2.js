const http=require('http');
function functionWorkForClien(req,res){
  console.log(req.url,req.method);
  let searchurl=req.url;
  if (searchurl === '/') {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html>');
  res.write('<head><title>default page</title></head>');
  res.write('<body><h1>welcome to our first routing page</h1></body>');
  res.write('</html>');
 }
  else if(searchurl==='/home'){
    res.write('<html>')
    res.write('<head><title>this is home page title</title></head>')
    res.write('<body><h1>home page</h1></body>')
    res.write('</html>')
  }
  else if(searchurl==='/about'){
    res.write('<html>')
    res.write('<head><title>title for the about page</title></head>')
    res.write('<body><h1>this is heading of about page</h1></body>')
    res.write('</html>')
  }
  else if(searchurl==='/login'){
    res.write('<html>')
    res.write('<head><title>this is title of the loginpage</title></head>')
    res.write('<body><h1>this is heading of login page</h1></body>')
    res.write('</html>')
  }
  else if(searchurl==='/contact'){
    res.write('<html>')
    res.write('<head><title>this is title of the contect page</title></head>')
    res.write('<body><h1>this is heading of contact page</h1></body>')
    res.write('</html>')
  }
  else{
    res.write('please write valid url')
  }
  res.end();
}
const server=http.createServer(functionWorkForClien);
const port=3000;
server.listen(port,()=>{
  console.log(`server is running or the adderess: https://localhost:${port}`);
})



