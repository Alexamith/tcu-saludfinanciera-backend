const Client = require("../../models/Client.model");
const {clientUniqueValuesValidation} = require("./client.helper");
const {validationStatus400, validationStatus201, validationStatus500, validationStatus201WithData} = require("../validations.controller");


// GET CLIENTS INTO DB
const getClients = async (req, res) => {
  try {
    let clients;
    if (req.query['id']){
      let id = req.query['id'];
      clients = await Client.findById(id);
      return await validationStatus201WithData(res, clients);
    }
    clients = await Client.find();
    return await validationStatus201WithData(res, clients);
  } catch (error) {
    console.log(error);
    await validationStatus500(res);
  }
};



const createClient = async (req, res) => {
  try {
    if (await clientUniqueValuesValidation({indetification:req.body.indetification},'identification', res) ){
      return;
    }
    let client = new Client(req.body);
    await client.save();
    return await validationStatus201(res, "El cliente se creó con éxito");
  } catch (error) {
    console.log(error);
    await validationStatus500(res);
  }
};



module.exports = {
    createClient,
    getClients
};