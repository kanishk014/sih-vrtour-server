const express = require("express");
const donationRouter = express.Router();

const donationController = require("../controller/donationController");

donationRouter.post('/checkout-session', donationController.getCheckoutSession);

module.exports = donationRouter;