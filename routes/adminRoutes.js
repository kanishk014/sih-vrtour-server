const express = require("express");
const adminRouter = express.Router();

const adminController = require("../controller/adminController");

adminRouter.route("/addProperty").post(adminController.addProperty);

module.exports = adminRouter;