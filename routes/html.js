const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "../public/index.html"));
});

router.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "../public/exercise.html"));
});

router.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "../public/status.html"));
});

module.exports = router;
