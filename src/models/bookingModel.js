import mongoose from "mongoose";
import { Schema } from "mongoose";
const bookingSchema = new mongoose.Schema({
  hallId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  date: { type: Date, required: true },
  eventType: { type: String },
  capacity: { type: Number },
  price: { type: Number },
  description: { type: String },
  catering: { type: String },
  confirmed: { type: Boolean, default: false },
});

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;
