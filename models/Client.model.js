const {Schema, model} = require('mongoose');

const ClientSchema = Schema({

    name:{type:String},
    indetificationType:{type:Number},
    indetification:{type:String},
    phone:{type:String},
    email:{type:String},
    address:{type:String},
    company:{type:String},
    nationality:{type:String},
    birthDate:{type:Date},
    purchasedPackages:{type:Number},

});

module.exports = model('Client', ClientSchema);