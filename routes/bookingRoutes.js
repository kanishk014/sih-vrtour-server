const express = require("express");
const bookingRouter = express.Router();

const {authProtect} = require("../middleware/authMiddleware");

const bookingController = require("../controller/bookingController");

bookingRouter.route("/bookTicket").post(authProtect, bookingController.bookTicket);

module.exports = bookingRouter;