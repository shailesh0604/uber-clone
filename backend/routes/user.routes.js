const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post("/register", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("First name must be at least 3 characters long"),
    body('password').isLength({ min: 8 }).withMessage("password must be at least 8 characters long"),
],
    // after check the value register process go on below controller
    userController.registerUser
)

module.exports = router;