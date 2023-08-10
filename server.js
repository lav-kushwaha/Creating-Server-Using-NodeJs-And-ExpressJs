const http = require("http");
const fs = require("fs");

const home = fs.readFileSync('./index.html');
// const PORT = 80; //By default port.
const PORT = 4000;
const hostname = "localhost";

const server = http.createServer((req,res)=>{
    // res.write("Lav Kushwaha");
    // res.end("  working");
    //  console.log(req.url);
    if(req.url==="/")
    {
       return res.end(home); //return isliye use kiya hai bcz if condition se bahar aana hai.
    }
    if(req.url==="/about")
    {
        return res.end("<h1>about</h1>");
    }
    if(req.url==="/contact")
    {
       return res.end("<h1>contact</h1>");
    }
    else
    {
       return res.end("<h1>404 Page Not Found</h1>");
    }
});


server.listen(PORT,hostname,()=>{
    console.log(`http://${hostname}:${PORT}`);
});