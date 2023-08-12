const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    // res.send("Working..");
    res.sendFile(path.join( __dirname + "/LoginPage.html"));
});

app.post("/api/v1/login",(req,res)=>{
       const userName = req.body.name;
       const userEmail = req.body.email;
       const userPassword = req.body.password;

       res.json({
          success:true,
       });
})


app.listen(PORT,()=>{
    console.log(`Server working on:http://localhost:${PORT}`);
});

