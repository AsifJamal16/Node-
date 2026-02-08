const http=require('http');
const calculatorFunction=require('./calculator');

const server=http.createServer(calculatorFunction);
const pots=30012;
server.listen(pots,()=>{
  console.log(`your server is running on the adderess:http://localhost:${pots}`);
})

