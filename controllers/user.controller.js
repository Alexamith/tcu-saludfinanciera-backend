const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const {generateJWT} = require("../helpers/jwt.helper");
const {validationStatus400, validationStatus201,validationStatus201WithData, validationStatus500} = require("./validations.controller");

// GET USERS INTO DB
const getUsers = async (req, res) => {
  try {
    let users;
    if (req.query['id']){
      let id = req.query['id'];
      users = await User.findById(id);
      return await validationStatus201WithData(res, users);
    }
    users = await User.find();
    return await validationStatus201WithData(res, users);
  } catch (error) {
    console.log(error);
    await validationStatus500(res);
  }
};

// POST USER INTO DB
const createUser = async (req, res) => {
  try {
    if (await userUniqueValuesValidation({email:req.body.email}, res) ){
      return;
    }
    user = new User(req.body);

    await encriptationPassword(user);
    await user.save();
    const token = await generateJWT(user._id, user.name);
    return await validationStatus201WithData(res, {
      name : user.name,
      token
    });
  } catch (error) {
    console.log(error);
    await validationStatus500(res);
  }
};

const userUniqueValuesValidation = async (data, res) => {
  let user = await User.findOne(data);
  if (user) {
     await validationStatus400(res,`The email already exist`);
     return true;
  }
}

const encriptationPassword = async (user) => {
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(user.password, salt);
}

module.exports = {
  getUsers,
  createUser,
};