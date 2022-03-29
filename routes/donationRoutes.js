const express = require("express");
const donationRouter = express.Router();

const { donationController } = require("../controller/donationController");

donationRouter.get('/checkout-session/:id/:amount', donationController.getCheckoutSession);

module.exports = donationRouter;