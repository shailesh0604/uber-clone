const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const BlacklistTokenModel = require("../models/blackList.model");

// register controller
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

// login controller
module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    console.log(req.body);

    const captain = await captainModel.findOne({ email: email }).select("+password");

    if (!captain) return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await captain.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

    const token = captain.generateAuthToken();

    res.cookie('token', token);
    return res.status(201).json({ token, captain })
}

//profile controller
module.exports.getCaptainProfile = async (req, res, next) => {
    return res.status(200).json({ req: req.captain });
}

//logout controller
module.exports.logoutCaptain = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    await BlacklistTokenModel.create({ token });
    res.status(200).json({ message: "Logged Out" });
}