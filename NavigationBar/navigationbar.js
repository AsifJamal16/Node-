const http = require("http");
function navigationbar(req, res) {
  let pageurl = req.url;
  if(pageurl==='/'){
    res.write(`   
<html>
<head>
</head>
<body>
  <ul>
    <li>
      <a href="/home">Home</a>
    </li>
    <li>
      <a href="/men">men</a>
    </li>
    <li>
      <a href="/women">women</a>
    </li>
    <li>
      <a href="/kids">kids</a>
    </li>
    <li>
      <a href="/cart">cart</a>
    </li>
  </ul>
</body>
</html>
    `);
    return res.end();
  }
  if (pageurl === "/home") {
    res.write(`
      <html>
      <head>
</head>
<body>
  <h1>welcome to home page</h1>
</body>
</html>
      `);
      return res.end();
  }

  //men section 
  if (pageurl === "/men") {
    res.write(`
      <html>
      <head>
</head>
<body>
  <h1>welcome to men section page</h1>
</body>
</html>
      `);
      return res.end();
  }
  
  //women section page
  else if (pageurl === "/women") {
    res.write(`
      <html>
      <head>
</head>
<body>
  <h1>welcome to women section page</h1>
</body>
</html>
      `);
      return res.end();
  }

  //kids section page 

  else if (pageurl === "/kids") {
    res.write(`
      <html>
      <head>
</head>
<body>
  <h1>welcome to kids section page</h1>
</body>
</html>
      `);
      return res.end();
  }

  //cart section page 
  else if (pageurl === "/cart") {
    res.write(`
      <html>
      <head>
</head>
<body>
  <h1>welcome to cart section  page</h1>
</body>
</html>
      `);
      return res.end();
  }
  else{ 
    res.write(`
      please enter valid url
      `);
      return res.end();
  }


  return res.end();
}
const server = http.createServer(navigationbar);
const pots = 30002;
server.listen(pots, () => {
  console.log(
    `your server is running on the adderess: http://localhost:${pots}`,
  );
});

