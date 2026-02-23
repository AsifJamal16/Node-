//naviagation bar with the different functions
//different function for the different section 
const https=require('http');
function HomeSection(res){
  res.setHeader('Content-Type','text/html');
  res.write(
    `
    <html>
<body>
  <h1>Welcome to our page</h1>
  <ul>
    <li>
      <a href="/home">home</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/contact">contact</a>
    </li>
    <li>
      <a href="/login">login</a>
    </li>
  </ul>
</body>
</html>
    `
  )
  return ;
}
function aboutSection(res){
  res.setHeader('Content-Type','text/html');
  res.write(
    `
    <h1>welcome to about section</h1>
    `
  )
  return ;
}
function loginSection(res){
  res.setHeader('Content-Type','text/html');
  res.write(
    `
    <h1>welcome to login section</h1>
    `
  )
  return ;
}
function contactSection(res){
  res.setHeader('Content-Type','text/html');
  res.write(
    `
    <h1>welcome to contact section</h1>
    `
  )
  return ;
}
function requestListener(req,res){
  let pageUrl=req.url;
  if(pageUrl==='/' || pageUrl==='/home'){
    HomeSection(res);
  }
  else if(pageUrl==='/login'){
    loginSection(res);
    
  }
  else if(pageUrl==='/contact'){
    contactSection(res);
   
  }
  else if(pageUrl==='/about'){
    aboutSection(res);
    
  }
  else{
    res.write('please enter valid url');
    res.end();
  }
}
const pots=3005;
const server=https.createServer(requestListener);
function listenServer(){
  console.log(`your server is running at the address http://localhost:${pots}`);
}
server.listen(pots,listenServer);
