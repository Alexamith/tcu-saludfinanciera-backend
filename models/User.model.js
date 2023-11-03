const {Schema, model} = require('mongoose');

const UserSchema = Schema({

    name:{type:String, require:true},
    charge:{type:String},
    personalPhone:{type:String},
    oficePhone:{type:String},
    email:{type:String, require:true, unique:true},
    password:{type:String, require:true},
    administrator:{type:Boolean, require:true},
    companyId:{type:String, require:true},

});

module.exports = model('User', UserSchema);