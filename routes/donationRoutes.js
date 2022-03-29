const express = require("express");
const donationRouter = express.Router();

const donationController = require("../controller/donationController");

donationRouter.get('/checkout-session', donationController.getCheckoutSession);

module.exports = donationRouter;