const bcrypt = require("bcryptjs");
const Consultant = require("../models/Consultant.model");
const {generateJWT} = require("../helpers/jwt.helper");
const {validationStatus400, validationStatus201,validationStatus201WithData, validationStatus500} = require("./validations.controller");

// GET consultantS INTO DB
const getConsultants = async (req, res) => {
  try {
    let consultants;
    if (req.query['id']){
      let id = req.query['id'];
      consultants = await Consultant.findById(id);
      return await validationStatus201WithData(res, consultants);
    }
    consultants = await Consultant.find();
    return await validationStatus201WithData(res, consultants);
  } catch (error) {
    console.log(error);
    await validationStatus500(res);
  }
};

// POST consultant INTO DB
const createConsultant = async (req, res) => {
  try {
    // if (await consultantUniqueValuesValidation({email:req.body.email}, res) ){
    //   return;
    // }
    consultant = new Consultant(req.body);

    await consultant.save();
    return await validationStatus201(res, 'El consultante se creó exitosamente');
  } catch (error) {
    console.log(error);
    await validationStatus500(res);
  }
};

const consultantUniqueValuesValidation = async (data, res) => {
  let consultant = await consultant.findOne(data);
  if (consultant) {
     await validationStatus400(res,`The email already exist`);
     return true;
  }
}



module.exports = {
  getConsultants,
  createConsultant,
};