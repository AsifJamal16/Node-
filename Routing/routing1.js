const http = require('http');

function createRequestofclice(req, res) {
  console.log(req.url);
  console.log(req.method);

  let searchurl = req.url;

  if (searchurl === '/') {
    res.write('text for the defaoul ');
  } 
  else if (searchurl === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>home</title></head>');
    res.write('<body><h1>asif ansari</h1></body>');
    res.write('</html>');
  } 
  else {
    res.write('text for the wrong url');
  }

  res.end();
}

const server = http.createServer(createRequestofclice);
const port = 3000;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
