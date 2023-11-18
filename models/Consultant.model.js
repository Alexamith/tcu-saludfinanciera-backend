const {Schema, model} = require('mongoose');

const ConsultantSchema = Schema({
    date:{type:String},
    fullName:{type:String},
    identification:{type:String},
    birthdate:{type:String},
    age:{type:String},
    sex:{type:String},
    civilStatus: {type:String},
    nationality: {type:String},
    workingCondition: {type:String},
    academicDegree: {type:String},
    step: {type:Number}
});

module.exports = model('Consultant', ConsultantSchema);