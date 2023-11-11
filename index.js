const express = require('express');
const {dbConection} = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// create express server
const app = express();


// create db conection
dbConection();

// CORS

app.use(cors())

// Public directory

app.use(express.static('public'));

// Body parse

app.use(express.json());

//Routes

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/companies', require('./routes/company.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/clients', require('./routes/client.routes'));

// listen request

app.listen(process.env.PORT || 5000, ()=> {
    console.log(`Express server running on port ${process.env.PORT}`);
});