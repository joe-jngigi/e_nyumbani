const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  res.status(200).json({ message: "get users route" });
});

module.exports = router;
