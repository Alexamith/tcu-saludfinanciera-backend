const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const {generateJWT} = require("../helpers/jwt.helper");
const {validationStatus400, validationStatus201,validationStatus201WithData, validationStatus500} = require("./validations.controller");


const login = async (req, res) =>{
    try {
        //Email validation
        let user = await userUniqueValuesValidation({email:req.body.email}, res);
        if (!user){
          return;
        }

        // Validate password
       if (!bcrypt.compareSync(req.body.password, user.password)) {
        return await validationStatus400(res,`Incorect password`);
       }

       // generate token
       const token = await generateJWT(user._id, user.name);
       return await validationStatus201WithData(res, {name : user.name, token});

      } catch (error) {
        console.log(error);
        await validationStatus500(res);
      }
};

const renewToken = async (req, res) =>{

    const uid = req.uid;
    const name = req.name;
    const token = await generateJWT(uid, name);

    return await validationStatus201WithData(res, {name : name, token});
};

const userUniqueValuesValidation = async (data, res) => {
    let user = await User.findOne(data);
    if (!user) {
       await validationStatus400(res,`Email is not correct`);
       return false;
    }
    return user;
  }



module.exports = {
    login,
    renewToken
}