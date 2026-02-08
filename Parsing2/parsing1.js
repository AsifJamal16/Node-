const http=require('http');
const fs=require('fs');
function userinputForm(req,res){
  let pageUrl=req.url;
  if(pageUrl==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      
<html>
<head>
</head>
<body>
  <h1>Enter Your credential</h1>
  <form action="/submit_url" method="POST">
    <label for="username">Username</label>
    <input type="text" placeholder="username" name="username" id="username"><br><br>

    <label for="emailinput">Email</label>
    <input type="email"  placeholder="enter your email" id="emailinput" name="email"><br><br>

    <label for="passwordinput">Password</label>
    <input type="password"  name="password" id="passwordinput" placeholder="enter password"><br><br>

    <label for="ageinput">Age</label>
    <input type="number"  name="number" placeholder="enter your age" 
    id="ageinput"><br><br>

    <label for="dobinput">DOB</label>
    <input type="date" placeholder="DOB" name="dob"  id="dobinput"><br><br>
    
    <label for="">Gender</label><br><br>
    <label for="male">male</label>
    <input type="radio" name="gender" value="male"  id="male"><br><br>
    
    <label for="female">female</label>
    <input type="radio"  name="gender" value="female" id="female"><br><br>

    <label>
  <input type="checkbox" name="language" value="javascript"> javascript
</label><br>

<label>
  <input type="checkbox" name="language" value="cpp"> cpp
</label><br>

<label>
  <input type="checkbox" name="language" value="python"> python
</label>
    <br><br>
    <button type="submit">Submit</button>
  </form>
</body>
</html>

      `)
      return res.end(); 
  }
  else if(pageUrl==='/submit_url' && req.method==="POST"){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      
<html>
<head>
</head>
<body>
  <h1>Your credential has successfully saved</h1>
  
</body>
</html>

      `)
      let bodyArr=[];
      req.on('data',chunk=>{
        bodyArr.push(chunk);
      })
      req.on('end', ()=>{
        let parsebodyArr=Buffer.concat(bodyArr).toString();
        const params=new URLSearchParams(parsebodyArr);
        const inputobject={};
        for(const [key,val] of params.entries()){
          inputobject[key]=val;
        }
        console.log(inputobject);
        fs.writeFileSync('parsing4.txt', JSON.stringify(inputobject,null,2));
        return res.end(); 
      });
  }
  else{
    res.write('enter valid url');
    return res.end();
  }
}

const server=http.createServer(userinputForm);
const pots=30010;
server.listen(pots,()=>{
  console.log(`your serverg is running on the adderess https://localhost:${pots}`);
})



