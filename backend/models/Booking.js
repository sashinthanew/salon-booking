const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Booking", bookingSchema);
