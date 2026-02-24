//add validation 
const http=require('http');
function renderForm(res,errorMessage='',oldData={}){
  res.setHeader('Content-Type','text/html');
  res.write(`
  <html >
<head>
</head>
<body>
  ${errorMessage?`<h1 style="color: red;">${errorMessage}</h1>`:''}
  <h1>Enter Your Credential</h1>
  <form action="/submit"  method="POST">
    <label for="username">username</label><br>
    <input type="text" name="username" id="username" value="${oldData.username || ''}"><br><br>
    <label for="email">email</label><br>
    <input type="email" name="email" value="${oldData.email || ''}"><br><br>
    <label for="password">password</label><br>
    <input type="password" name="password" id="password" value="${oldData.password ||''}"><br><br>
    <button>Submit</button>
  </form>
  
</body>
</html>
    `)
    res.end();
}

function requestListener(req,res){
  const method=req.method;
  const pageUrl=req.url;
  if(pageUrl==='/'){//home page
    return renderForm(res)
  }
  else if(pageUrl==='/submit'&&method==='POST'){
    let body='';
    req.on('data',function(chunk){
      body=body+chunk.toString();
    })
    req.on('end',function(){
      const params=new URLSearchParams(body);
      const username=params.get('username');
      const email=params.get('email');
      const password=params.get('password');
      if(!username || !email || !password){
        return renderForm(res,'All fields are required',{
          username,
          email,
          password,
        })
      }
      else if(username.length<3){
        return renderForm(res,'username should consist at least 3 character',{
          //username,
          email,
          password,
        })
      }
      else if(!email.includes('@')){
        return renderForm(res,'email should at least contain @', {
          username,
          //email,
          password,
        })
      }
      else if(password.length<6){
        return renderForm(res,'your password should at least 6 character',{
          username,
          email,
        })
      }
      //now credentials are valid store the data of the user 
      res.setHeader('Content-Type','text/html');
      res.write(`
        <h1 style="color: green;">Your Credential has been successfully saved</h1>
        <h2>username:${username}</h2>
        <h2>email:${email}</h2>
        <h2>password:${password}</h2>
        `)
        res.end();
    })
  }
  else{
    res.setHeader('Content-Type','text/html');
    res.write('please enter valid url');
  }
}
const pots=3004;
const server=http.createServer(requestListener);
function listenServer(){
  console.log(`server is running at address http://localhost:${pots}`);
}
server.listen(pots,listenServer);
