const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const asyncHandler = require("express-async-handler");
const { Property } = require("../model/propertiesModel");

exports.getCheckoutSession = asyncHandler(async (req, res, next) => {
  // 1. Get the currently booked tour
  const amount = req.body.amount;
  const id = req.body.id;
  const property = await Property.findById(id);
  

  // 2. Create the checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    // success_url: `${req.protocol}://${req.get('host')}/?tour=${
    //   req.params.tourID
    // }&user=${req.user.id}&price=${tour.price}`,
    success_url: `https://vrtourpilgrimage.netlify.app/`,
    cancel_url: `https://vrtourpilgrimage.netlify.app/`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourID,
    mode: 'payment',
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: 'inr',
          unit_amount: amount,
          product_data: {
            name: `${property.title}`,
            // description: tour.summary,
            images: [
              `${property.properyImage}`,
            ],
          },
        },
      },
    ],
  });
  // 3. Send session as response
  res.status(200).json({
    status: 'success',
    session,
  });
});