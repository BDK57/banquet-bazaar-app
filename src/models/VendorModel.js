import mongoose from "mongoose";
import { Schema } from "mongoose";
import moment from "moment";



const VendorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your username"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  phone: {
    type: Number,
  },
  activeStatus: {
    type: Boolean,
    default: true,
  },
  createdTime: {
    type: Date,
    default: () => moment(),
  },
  updatedTime: {
    type: Date,
    default: () => moment(),
  },
});

const Vendor = mongoose.models.vendor || mongoose.model("vendor", VendorSchema);
export default Vendor;
