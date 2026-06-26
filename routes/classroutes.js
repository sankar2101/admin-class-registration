const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  createClass,
  getClasses,
  updateClass,
  deleteClass,
} = require("../controllers/classcontroller");

router.post("/create", auth, createClass);
router.get("/all", getClasses);
router.put("/update/:id", auth, updateClass);
router.delete("/delete/:id", auth, deleteClass);

module.exports = router;