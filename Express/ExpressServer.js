const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const Port = 4000;

// Apply bodyParser middleware to parse the request body
app.use(bodyParser.urlencoded({extended: false}));


//GET SERVER - READ DATA.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "LoginPage.html"));
});

//POST SERVER - CREATE DATA.
app.post("/api/v1/login", (req, res) => {
    // Now you should be able to access the data in req.body
    const userName = req.body.name;
    res.send(`<h1>Login Successful. Welcome, ${userName}!</h1>`);
    console.log(req.body);
});

app.listen(Port, () => {
    console.log(`Server is running at http://localhost:${Port}`);
});
