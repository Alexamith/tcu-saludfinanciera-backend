
const {validationStatus400, validationStatus201,validationStatus201WithData, validationStatus500} = require("../controllers/validations.controller");



const modelValuesValidation = async (Model, data, res) => {
    let objectModel = await Model.findOne(data);
    console.log(objectModel);
    // if (objectModel) {
    //    await validationStatus400(res,`The email already exist`);
    //    return true;
    // }
}


module.exports = {
    modelValuesValidation
  };