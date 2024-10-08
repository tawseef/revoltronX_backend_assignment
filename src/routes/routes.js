const express = require("express");

const router = express.Router();
const { handleGetInfo } = require("../controller/controller");

router.get("/getdata", handleGetInfo);

module.exports = router;
