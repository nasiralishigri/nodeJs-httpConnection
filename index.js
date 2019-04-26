const http = require('http');

const hostName = "localhost";
const port = 3000;

const server = http.createServer((req,res)=>{
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("content-type",'text/html');
  res.end('<html><head><body><h1>Hellow Shigries</h1></body></head></html>');

})

server.listen(port,hostName,() => {
console.log('Your Server is Listning at  http://' + hostName + ":"+3000);
});