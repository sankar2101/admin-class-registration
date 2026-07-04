const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const auth = require("../middleware/auth");

const {
  registerStudent,
  getRegistrations,
  approveRegistration,
  rejectRegistration,
} = require("../controllers/registrationController");

router.post("/register",upload.single("paymentProof"),registerStudent);
router.get("/all", auth, getRegistrations);
router.put("/approve/:id", auth, approveRegistration);
router.put("/reject/:id", auth, rejectRegistration);



module.exports = router;