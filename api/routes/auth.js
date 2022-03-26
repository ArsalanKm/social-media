const router = require("express").Router();
const User = require("../models/User");
// const bcrypt = require("bcrypt");

// register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const {
      body: { username, email, password },
    } = req;
    const newUser = new User({
      username,
      email,
      password,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.json({ err });
  }
});

module.exports = router;
