const http=require('http');
function requestListener(req,res){
  const url=req.url;
  const method=req.method;
  if(url==='/' || url==='/home'){
    res.setHeader('Content-Type','text/html');
  res.write(`
    <html>
    <head>
 
    </head>
    <body>
      <h1>Welcome to our page</h1>
      <a href="/calculator">calculator</a>
    </body>
    </html>

    `)
    res.end();
  }
  if(url==='/calculator'){
    res.setHeader('Content-Type','text/html')
    res.write(`

      <html>
      <head>
 
      </head>
      <body>
      <form action="/calculate-result" method="POST">
      <input type="number" name='value1' placeholder='enter first number'><br><br>
      <input type="number" name='value2' placeholder='enter second number'><br><br>
      <button >sum</button>
      </form>
      </body>
      </html>

      `)
    res.end();  
  }
  else if(url==='/calculate-result' && method==="POST"){
    let body='';
    req.on('data',function(chunk){
      body=body+chunk.toString();
    })
    req.on('end',function(){
      const params=new URLSearchParams(body);
      const num1=params.get('value1');
      const num2=params.get('value2');
      const result=Number(num1)+Number(num2);
      res.setHeader('Content-Type','text/html');
      res.write(`
      <h2>${num1}+ ${num2}=${result}</h2>
      <a href='/'>go to home </a>
      `)
      res.end();
    })
  }
}
const pots=3004;
const server=http.createServer(requestListener);
function listenRequest(){
  console.log(`your server is running on the address http://localhost:${pots}`);
}
server.listen(pots,listenRequest);

