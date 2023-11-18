/**
    User routes
    host + /api/users
 */

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const { validateInputs } = require("../middlewares/validate-Fields.middleware");

const { createConsultant,getConsultants } = require("../controllers/consultant.controller");

router.get("", getConsultants);
router.post(
  "/new",
  [
    //middlewares
    // check("name", "The name is required").not().isEmpty(),
    // check("firstLastName", "The first kastName is required").not().isEmpty(),
    // check("secondLastName", "The second last name is required").not().isEmpty(),
    // check("email", "The email is required").isEmail(),
    // check("password", "The password is required").not().isEmpty(),
    // check("administrator", "The administrator is required").not().isEmpty(),
    // validateInputs,
  ],
  createConsultant
);

module.exports = router;
