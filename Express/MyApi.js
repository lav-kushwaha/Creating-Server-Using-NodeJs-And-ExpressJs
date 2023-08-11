const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./UserRoutes"); //imported router.

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json()); //when we are creating post API Then we have to call this method.
app.use("/api/v1" + router);//Here Used Router.

app.get('/',(req,res)=>{
     res.sendFile(path.join(__dirname + "/LoginPage.html"));
});

// app.post('/api/v1/register',(req,res)=>{
//     const userName = req.body.name;
//     const userEmail = req.body.email;
//     const userPassword = req.body.password;

//     res.json({
//         sucess:true,
//         // name:userName,
//         // email:userEmail,
//         // password:userPassword,
//     });
// });

app.listen(PORT,()=>{
    console.log(`server is working on:${PORT}`);
});