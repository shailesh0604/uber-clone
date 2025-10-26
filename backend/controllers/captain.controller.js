const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;
    console.log(req.body);

    const isCaptainAlreadyExist = await captainModel.findOne({ email: email });

    if (isCaptainAlreadyExist) return res.status(401).json({ message: "Captain Already Exist" });

    // here hashedPassword came from captain model where we create hashedPassword methods
    const hashedPassword = await captainModel.hashPassword(password);


    //here using the user service to save the data in db
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashedPassword, color: vehicle.color, plate: vehicle.plate, capacity: vehicle.capacity, vehicleType: vehicle.vehicleType
    })

    const token = captain.generateAuthToken();
    return res.status(201).json({ token, captain })
}