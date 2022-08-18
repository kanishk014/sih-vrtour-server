const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  monumentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  noOfPersons: {
    type: Number,
    required: true,
  },
  nationality: {
    type: Number,    // 1 - Indian,    // 2 -> Foreigner
  },
  totalAmount: {
    type: Number,    
  },

})

module.exports = mongoose.model("booking", bookingSchema);