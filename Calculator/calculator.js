const { URLSearchParams } = require("url");
function calculatorFunction(req, res) {
  const pageurl = req.url;
  const method = req.method;
  if (pageurl === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <head>
</head>
<body>
  <h1>Welcom to calculator</h1>
  <a href="/sumpage">
    <button>go to calculator</button>
  </a>
</body>
</html>
      `);
      return res.end();
  }
  else if(pageurl==='/sumpage' && method==="GET"){
    res.setHeader("Content-Type", "text/html");
    res.write(`
      
<html>
<head>
</head>
<body>
  <form action="/calculatedSum" method="POST">

    <label for="firstnum">First number</label>
    <input type="number" placeholder="Enter first number" name="number1" id="firstnum"><br><br>

    <label for="secondnum">Second Num</label>
    <input type="number" placeholder="Enter second number"  name="number2"><br><br>

    <button type="submit">Add number</button>
  </form>
  
</body>
</html>
      `)
      return res.end();
  }

  else if(pageurl === "/calculatedSum" && method === "POST"){
    let body="";
    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      const params = new URLSearchParams(body);
      const num1 = Number(params.get("number1"));   
      const num2 = Number(params.get("number2"));   
      const sum = num1 + num2; 

      res.setHeader("Content-Type", "text/html");
      res.write(`
        <html>
        <body>
          <h2>result</h2>
          <p>${num1} + ${num2} = ${sum}</p>
          <a href="/sumpage">go back</a>
        </body>
        </html>
      `);
      return res.end();
    });
  }
  else{
    res.write('please enter valid url')
    return res.end();
  }
}
module.exports=calculatorFunction;
