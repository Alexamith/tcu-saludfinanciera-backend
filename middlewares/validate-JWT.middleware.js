const {response} = require('express');
const jwt = require("jsonwebtoken");
const {validationStatus400, validationStatus401} = require("../controllers/validations.controller");



const validateJWT = (req, res = response, next) =>{
    const token = req.header('x-token');


    if (!token) {
        validationStatus401(res, 'Without token');
    }

    try {


        const {uid, name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        )

    req.uid = uid;
    req.name = name;

        
    } catch (error) {
        return validationStatus401(res, 'Unauthenticated');
    }

    next();
};

module.exports = {
    validateJWT
}