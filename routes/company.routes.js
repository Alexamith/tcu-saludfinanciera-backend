/**
    Company routes
    host + /api/companies
 */

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const { validateInputs } = require("../middlewares/validate-Fields.middleware");

const { createCompany } = require("../controllers/company.controller");

router.post(
  "/new",
  [
    //middlewares
    check("name", "The name is required").not().isEmpty(),
    check("legalIdentityCard", "The identification is required").not().isEmpty(),
    check("domain", "The domain is required").not().isEmpty(),
    check("owner","The owner is required").not().isEmpty(),
    validateInputs,
  ],
  createCompany
);

module.exports = router;
