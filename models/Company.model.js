const {Schema, model} = require('mongoose');

const CompanySchema = Schema({

    name:{type:String, require:true},
    legalIdentityCard:{type:String, require:true, unique:true},
    domain:{type:String, require:true, unique:true},
    address:{type:String},
    owner:{type:String, require:true},
    officeNumber:{type:String},

});

module.exports = model('Company', CompanySchema);