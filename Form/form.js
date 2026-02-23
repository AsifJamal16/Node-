const http=require('http');
function requestListen(req,res){
  const pageUrl=req.url;
  if(pageUrl==='/' && req.method==='GET'){
    res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
<head>
  
</head>
<body>
  <h1>Enter Your Credential</h1>
  <form action="/submit" method="POST">
    <label for="username">username</label><br>
    <input type="text" name="username"  id="username">
    <br><br>
    <label for="useremail">Email</label><br>
    <input type="email" name="email" id="useremail"><br><br>
    <label for="password">Password</label><br>
    <input type="password" id="password" name="password"><br><br>
    <button>Submit</button>
  </form>
</body>
</html>
      `)
    res.end();
  }
  else if(pageUrl==='/submit' && req.method==='POST'){
    let body='';
    req.on('data',function(chunk){
      body=body+chunk.toString();
    });
    req.on('end',function(){
      const params=new URLSearchParams(body);
      const username=params.get('username');
      const email=params.get('email');
      const password=params.get('password');
      res.setHeader('Content-Type','text/html');
      res.write(`
        <h1>Your Form has been saved successfully</h1>
        <h2>UserName:${username}</h2>
        <h2>Email:${email}</h2>
        <h2>password:${password}</h2>
        `)
    res.end();
    })
  }
  else{
    res.write('please enter valid url');
    res.end();
  }
}
const pots=3005;
const server=http.createServer(requestListen);
function listenServer(){
  console.log(`your server is running on the address http://localhost:${pots}`);
}
server.listen(pots,listenServer);

