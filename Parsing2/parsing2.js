const http = require("http");
const { buffer } = require("stream/consumers");
const { URLSearchParams } = require("url");
function makeuserForm(req, res) {
  console.log(req.url,req.method);
  let pageUrl = req.url;
  //dont forgot this method=POST
  //dont forgot this name="username"
  //dont forgot this name="gender"
  if (pageUrl === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      
<html>
<head>
</head>
<body>
  <h2>Enter you credential</h2>
  <form action="/submit_url" method="POST">
    
  <input type="text" name="username" placeholder="Enter your name"><br><br>

  <input type="email" name="email" placeholder="Enter your email"><br><br>

  <input type="password" name="password" placeholder="Enter your password"><br><br>

  <input type="number" name="age" placeholder="Enter your age"><br><br>

  <input type="text" name="city" placeholder="Enter your city"><br><br>

  <label>Gender</label><br><br>
  <label for="male">Male</label>
  <input type="radio" name="gender" value="male" id="male">

  <label for="female">Female</label>
  <input type="radio" name="gender" value="female" id="female">
  <br><br>

  <label>Skills</label><br>
  <input type="checkbox" name="skills" value="js"> JavaScript  
  <input type="checkbox" name="skills" value="node"> Node.js  
  <input type="checkbox" name="skills" value="html"> HTML  
  <br><br>

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
<head></head>
<body>
  <h2>Your form is successfully saved</h2>
</body>
</html>
  `);

  let bodyArr = [];

  req.on('data', chunk => {
    bodyArr.push(chunk);
  });

  req.on('end', () => {
    let parsedbody = Buffer.concat(bodyArr).toString();
    console.log(parsedbody);

    const params = new URLSearchParams(parsedbody);
    const bodyobject = {};

    for (const [key, val] of params.entries()) {
      bodyobject[key] = val;
    }

    console.log(bodyobject);
    res.end();   // ✅ end response here
  });
}
  else{
    res.write('please enter valid url')
  }
}
let server=http.createServer(makeuserForm);
let pots=3008;
server.listen(pots,()=>{
  console.log(`your server is running on the adderess:http://localhost:${pots}`);
})




