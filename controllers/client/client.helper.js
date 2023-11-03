const Client = require("../../models/Client.model");
const {validationStatus400, validationStatus201, validationStatus500, validationStatus201WithData} = require("../validations.controller");





// This methotd recieve 2 params, and search if there are any register with the same value
const clientUniqueValuesValidation = async (searchValue, fieldName, res) => {
    let client = await Client.findOne(searchValue);
    if (client) {
       await validationStatus400(res,`El campo ${fieldName} ya existe`);
       return true;
    }
  }


module.exports = {
    clientUniqueValuesValidation
};