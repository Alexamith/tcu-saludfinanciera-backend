const mongoose = require('mongoose');

const dbConection = async() =>{

    try {

        await mongoose.connect(process.env.DB);
        console.log('Db conected');

    } catch (error) {
        console.log(error);
        throw new Error('Database conection failed');
    }

};

module.exports = {
    dbConection
}