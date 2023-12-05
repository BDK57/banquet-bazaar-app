import { NextResponse } from "next/server";
import { connect } from "@/configDb/configDb";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import EmailValidator from "email-deep-validator";
import { sendVerifyEmail } from "@/app/common/sendVerifyEmail";
import { verify } from "jsonwebtoken";

export async function POST(request) {
  await connect();
  try {
    const body = await request.json();
    const { username, email, password } = body;
    const newemail = new EmailValidator();
    const { wellFormed, validDomain, validMailbox } = await newemail.verify(
      email
    );
    if (!wellFormed || !validDomain || !validMailbox) {
      console.log("hllo");
      return NextResponse.json({ status: 400, error: "Not A valid Email" });
    }

    const user = await User.findOne({ email });
    if (user) {
      if (!user.isVerified) {
        await sendVerifyEmail(user.email, user._id);
        return NextResponse.json({
          status: 400,
          error:
            "User already exists, verification email has been sent to your email",
        });
      }

      return NextResponse.json({
        status: 400,
        error:
          "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      activeStatus: false,
    });
    const savedUser = await newUser.save();

    //send an email to user until that user data remains in database but will not be allowed to login
    const verifyEmail = await sendVerifyEmail(savedUser.email, savedUser._id);

    if (!verifyEmail)
      return NextResponse.json({
        status: 400,
        error: "failed to send verification email on given email address",
      });

    return NextResponse.json({
      status: 200,
      message: "verification email sent to email",
    });

    // return NextResponse.json({ message: "User created successfully", success: true, status:200 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ status: 500, error: error.message });
  }
}
