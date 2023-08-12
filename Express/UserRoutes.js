const express = require("express");

//creating Router.
const router = express.Router();

//importing userController.
const registerUser = require("./UserController");

// router.route("/api/v1/register").post(registerUser);
router.route("/register").post(registerUser);


module.exports = router;