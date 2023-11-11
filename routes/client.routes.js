/**
    Client routes
    host + /api/clients
 */

    const { Router } = require("express");
    const { check } = require("express-validator");
    const router = Router();
    // const { validateInputs } = require("../middlewares/validate-Fields.middleware");
    
    const { createClient,getClients } = require("../controllers/client/client.controller");
    

    router.get("", getClients);
    router.post(
      "/new",
      [
        //middlewares
        check("identification", "The name is required").not().isEmpty(),
        // check("legalIdentityCard", "The identification is required").not().isEmpty(),
        // check("domain", "The domain is required").not().isEmpty(),
        // check("owner","The owner is required").not().isEmpty(),
        // validateInputs,
      ],
      createClient
    );
    
    module.exports = router;
    