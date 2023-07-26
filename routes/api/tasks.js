const express = require("express");
const router = express.Router();

// @route   Get api/tasks
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Tasks route"));

module.exports = router;
