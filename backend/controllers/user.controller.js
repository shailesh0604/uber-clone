const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");


module.exports.registerUser = async (req, res, next) => {
    // this registerUser method manage the validation came from user.router.js
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const { fullname, email, password } = req.body;

    console.log(req.body);

    // here hashedPassword came from user model where we create hashedPassword methods
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashedPassword
    })

    const token = user.generateAuthToken();
    return res.status(201).json({ token, user })
}