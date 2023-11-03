/**
    User routes
    host + /api/users
 */

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const { validateInputs } = require("../middlewares/validate-Fields.middleware");

const { createUser,getUsers } = require("../controllers/user.controller");

router.get("", getUsers);
router.post(
  "/new",
  [
    //middlewares
    check("name", "The name is required").not().isEmpty(),
    check("email", "The email is required").isEmail(),
    check("password", "The password is required").not().isEmpty(),
    check("companyId", "The companyId is required").not().isEmpty(),
    check("administrator", "The administrator is required").not().isEmpty(),
    validateInputs,
  ],
  createUser
);

module.exports = router;
