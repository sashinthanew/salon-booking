const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const User = require("../models/User");
// const bcrypt = require("bcrypt"); // Recommended to use bcrypt for hashed passwords

router.post("/login", async (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    email = email.trim().toLowerCase();

    // Check Admin
    const admin = await Admin.findOne({ email });
    if (admin) {
      // For production, replace with bcrypt compare:
      // const match = await bcrypt.compare(password, admin.password);
      if (password === admin.password) {
        return res.status(200).json({
          message: "Login successful",
          role: "admin",
          email: admin.email,
          name: admin.name || "Admin",
        });
      }
    }

    // Check User
    const user = await User.findOne({ email });
    if (user) {
      // For production, replace with bcrypt compare:
      // const match = await bcrypt.compare(password, user.password);
      if (password === user.password) {
        return res.status(200).json({
          message: "Login successful",
          role: "user",
          email: user.email,
          name: user.name,
        });
      }
    }

    return res.status(401).json({ message: "Invalid email or password" });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
