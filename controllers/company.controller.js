const Company = require("../models/Company.model");
const {validationStatus400, validationStatus201} = require("./validations.controller");

const createCompany = async (req, res) => {
  try {
    if (await companyUniqueValuesValidation({domain:req.body.domain},'domain', res) ){
      return;
    }
    if (await companyUniqueValuesValidation({legalIdentityCard:req.body.legalIdentityCard},'legal identity card', res) ){
      return;
    }
    let company = new Company(req.body);
    await company.save();
    return await validationStatus201(res, "The company was created successfull");
  } catch (error) {
    console.log(error);
    await validationStatus500(res);
  }
};

const companyUniqueValuesValidation = async (data,name, res) => {
  let company = await Company.findOne(data);
  if (company) {
     await validationStatus400(res,`The ${name
    } already exist`);
     return true;
  }
}

module.exports = {
  createCompany,
};