    //add validation 
const http=require('http');
function requestListener(req,res){
  const method=req.method;
  const pageUrl=req.url;
  if(pageUrl==='/' || pageUrl==='/home'){
    res.setHeader('Content-Type','text/html');
    res.write(`
    <html >
    <head>
    </head>
    <body>
  <h1>Enter Your Credential</h1>
  <form action="/submit" method="POST">
    <label for="username">username</label><br>
    <input type="text" name="username" id="username"><br><br>
    <label for="email">email</label><br>
    <input type="email" name="email"><br><br>
    <label for="password">password</label><br>
    <input type="password" name="password" id="password"><br><br>
    <button>Submit</button>
  </form>
  </body>
  </html>
      `)
      res.end();
  }
  else if(pageUrl==='/submit' && method==="POST"){
    let body='';
    req.on('data',function(chunk){
      body+=chunk.toString();
    })

    req.on('end',function(){
      let params=new URLSearchParams(body);
      const username=params.get('username');
      const email=params.get('email');
      const password=params.get('password');
      if(!username || !email || !password){
        //all fields are not filled 
        res.setHeader('Content-Type','text/html');
        res.write(`
          <h2>All fields are required</h2>
          <a href="/">go back to home</a>
          `)
        return res.end();  
      }
      else if(username.length<3){
        res.setHeader('Content-Type','text/html');
        res.write(`
          <h2>username should be minimum 6 character</h2>
          <a href="/">go back to home</a>
          `)
        return res.end();  
      }
      else if(!email.includes('@')){
        res.setHeader('Content-Type','text/html');
        res.write(`
          <h2>Email is not valid</h2>
          <a href="/">go back to home</a>
          `)
        return res.end();  
      }
      else if(password.length<6){
        res.setHeader('Content-Type','text/html');
        res.write(`
          <h2>password should contain minimum 6 character</h2>
          <a href="/">go back to home</a>
          `)
        return res.end();  
      }
      res.setHeader('Content-Type','text/html');
      res.write(`
        <h1>your credential has been successfully saved</h1>
        <h2>name:${username}</h2>
        <h2>email:${email}</h2>
        <h2>password:${password}</h2>
        `)
      res.end();
    })
  }
  else{
    res.setHeader('Content-Type','text/html');
        res.write(`
          <h2>Please enter valid url </h2>
          <a href="/">go back to home page</a>
        `)
    res.end();    
  }
}
const pots=3003;
const server=http.createServer(requestListener);
function listenServer(){
  console.log(`your server is running at the address http://localhost:${pots}`);
}
server.listen(pots,listenServer);
