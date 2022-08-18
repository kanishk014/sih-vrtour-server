const asyncHandler = require("express-async-handler");
const Booking = require("../model/bookingModel");

exports.bookTicket = asyncHandler(async (req, res) => {
  try{

    const {user} = req.user;

    const {
      name,      
      date,
      mobileNo,
      monumentId,
      noOfPersons,
      nationality,
      totalAmount
    } = req.body;

    const payload = {
      userId: user._id,
      name,
      date,
      mobileNo,
      monumentId,
      noOfPersons,
      nationality,
      totalAmount
    };

    const result = await Booking.create(payload);

    return res.json({
      message: "Success",
      data: payload,
    })
  }
  catch(err){
    res.status(400);

		throw new Error(e.message);
  }
})