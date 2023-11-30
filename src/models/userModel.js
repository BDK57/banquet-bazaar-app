import mongoose from "mongoose";
import moment from "moment";
const crypto = require("crypto");



const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your username"],
  },
  isSocialUser: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  usertype: {
    type: String,
    default: "user",
  },
  verifyToken: String,
  verifyTokenExpiry: Date,
  activeStatus: {
    type: Boolean,
    default: true,
  },
  createdTime: {
    type: Date,
    default: ()=>moment(),
  },
  updatedTime: {
    type: Date,
    default: ()=>moment(),
  },
});

userSchema.methods.getResetToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  console.log("reset token", resetToken);
  const verifyToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const verifyTokenExpiry = Date.now() + 15 * 6 * 1000;

  return { resetToken, verifyToken, verifyTokenExpiry };
};
const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
