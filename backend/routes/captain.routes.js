const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const { authCaptain } = require("../middleware/auth.middleware");

router.post("/register", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("First name must be at least 3 characters long"),
    body('password').isLength({ min: 8 }).withMessage("password must be at least 8 characters long"),
    body('vehicle.color').isLength({ min: 3 }).withMessage("vehicle color must be at least 3 characters long"),
    body('vehicle.plate').isLength({ min: 3 }).withMessage("plate must be at least 6 characters long"),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage("capacity must be at least 1"),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage("invalid vehicle type"),
],
    // after check the value register process go on below controller
    captainController.registerCaptain
)


router.post("/login", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({ min: 8 }).withMessage("password must be at least 8 characters long"),
],
    // after check the value register process go on below controller
    captainController.loginCaptain
)

router.get("/profile", authCaptain, captainController.getCaptainProfile)

router.get("/logout", authCaptain, captainController.logoutCaptain)




module.exports = router;