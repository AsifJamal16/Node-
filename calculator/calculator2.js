const http=require('http');
function requestListener(req,res){
  const url=req.url;
  const method=req.method;
  if(url==='/' ||  url==='/home'){
    res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
      <head>
 
      </head>
      <body>
      <h2>Welcome to our page</h2>
      <a href="/calculator">calculator</a>
      </body>
      </html>
      `)
      res.end();
  }
  else if(url==='/calculator'){
    res.setHeader('Content-Type','text/html');
    res.write(`

      <html>
      <head></head>
      <body>
      <form action="/resultPage" method="POST">
      <input type="number" name="value1" placeholder="enter first number"><br><br>
      <input type="number" name="value2" placeholder="enter second number"><br><br>
      <h2>Select Operator</h2>
      <button name='operator' value='sum'>Sum</button>
      <button name='operator' value='subtract'>Subtract</button>
      <button name='operator' value='multiplication'>Multiplication</button>
      <button name='operator' value='division'>Division</button>
      </form>
      </body>
      </html>

      `)
      res.end();
  }
  else if(url==='/resultPage' && method==="POST"){
    let body='';
    req.on('data',function(chunk){
      body+=chunk.toString();
    })
    req.on('end',function(){
      const params=new URLSearchParams(body);
      const num1=params.get('value1');
      const num2=params.get('value2');
      const operator=params.get('operator');
      let result;
      if(operator==='sum'){
        result=Number(num1)+Number(num2);
      }
      else if(operator==='subtract'){
        result=Number(num1)-Number(num2);
      }
      else if(operator==='multiplication'){
        result=Number(num1)*Number(num2);
      }
      else if(operator==='division'){
        if(num2===0){
          result='undefined';
        }
        else result =num1/num2;
      }
      res.setHeader('Content-Type','text/html');
      res.write(`
        <h1>Result:${result}</h1>
        <a href='/'>go to home</a>
        `)
        res.end();
    })
  }
}
const pots=3006;
const server=http.createServer(requestListener);
function serverListen(){
  console.log(`your server is running on the address http://localhost:${pots}`);
}
server.listen(pots,serverListen);
