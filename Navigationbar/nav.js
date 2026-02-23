//navigation bar
const http = require("http");
function requestListener(req, res) { 
  const pageUrl = req.url;
  console.log(req.method)
  if (pageUrl === "/" || pageUrl === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
<head>
</head>
<body>
  <h1>Welcome to home</h1>
  <ul>
    <li>
      <a href="home">home</a><br>
      <a href="about">about</a><br>
      <a href="contact">contact</a><br>
      <a href="login">login</a>
    </li>
  </ul>
</body>
</html>
      `);
    return res.end();
  }
  else if(pageUrl==='/about'){
    res.setHeader("Content-Type", "text/html");
    res.write(
      `
      <h1>About Us section</h1>
      `
    )
    return res.end();
  }
  else if(pageUrl==='/contact'){
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <h1>contact here</h1>
      `)
      return res.end();
  }
  else if(pageUrl==='/login'){
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <h1>login here</h1>
      `)
      return res.end();
  }
  else{
    res.write('please enter valid url')
    return res.end();
  }
}

const pots=3009;
const server=http.createServer(requestListener);
function serverListen(){
  console.log(`your server is running at the address http://localhost:${pots}`);
}
server.listen(pots,serverListen);

