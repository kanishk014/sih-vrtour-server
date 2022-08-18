const express = require("express");
const bookingRouter = express.Router();

const bookingController = require("../controller/bookingController");

bookingRouter.route("/bookTicket").post(bookingController.bookTicket);

module.exports = bookingRouter;