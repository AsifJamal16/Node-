const http = require("http");
function makeuserForm(req, res) {
  console.log(req.url,req.method);
  let pageUrl = req.url;
  //dont forgot this method=POST
  if (pageUrl === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      
<html>
<head>
</head>
<body>
  <h2>Enter you credential</h2>
  <form action="/submit_url" method="POST">
    <input type="text" placeholder="Enter your name"><br><br>
    <label for="">Gender</label><br><br>
    <label for="male">Male</label>
    <input type="radio" name="gender" id="male">
    <label for="female">female</label>
    <input type="radio" name="gender" id="female"><br><br>
    <button type="submit">submit</button>
  </form>
</body>
</html>
      `);

      return res.end();
  }
  else if(pageUrl==='/submit_url' && req.method==='POST'){
    res.setHeader("Content-Type", "text/html");
    res.write(`
      
<html>
<head>
</head>
<body>
  <h2>Your form is successfully saved </h2>
  
</body>
</html>
      `)
      req.on('data', chunk=>{
      console.log(chunk);
    })
    return res.end();
  }
  else{
    res.write('please enter valid url')
  }
}
let server=http.createServer(makeuserForm);
let pots=3003;
server.listen(pots,()=>{
  console.log(`your server is running on the adderess:http://localhost:${pots}`);
})
