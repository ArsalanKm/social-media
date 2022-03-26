const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hey it is user routes");
});
module.exports = router;
