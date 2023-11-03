/**
    Auth routes
    host + /api/auth
 */

const {Router} = require('express');
const {check} = require('express-validator');
const router = Router();
const {validateInputs} = require('../middlewares/validate-Fields.middleware');
const {validateJWT} = require("../middlewares/validate-JWT.middleware");

const {login, renewToken} = require('../controllers/auth.controller')


router.post('/login',[
    //middlewares
    check('email','The email is required').isEmail(),
    check('password','The password is required').not().isEmpty(),
], login);

router.get('/renew',validateJWT, renewToken);


module.exports = router;