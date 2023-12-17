import Booking from "@/models/bookingModel";
import { NextResponse } from "next/server";
import Hall from "@/models/HallMode";
import mongoose from "mongoose";
import { sendEmail } from "@/helpers/sendemaillink";
import { connect } from "@/configDb/configDb";
import { getTokendata } from "@/helpers/getTokendata";
import User from "@/models/userModel";

// import Vendor from "@/models/VendorModel";

export async function POST(request, { params }) {
  try {
    await connect();
    const hallId = params.id;
    const body = await request.json();
    const userId = await getTokendata(request);
    body.userId = userId;
    body.hallId = hallId;

    const createdBooking = await Booking.create(body);
    if (!createdBooking)
      return NextResponse.json({ status: 400, error: "failed to book" });
    //send success email to vendor and msg to user

    //success email to vendor

    console.log(`hallId: ${hallId}`);
    const ObjectId = mongoose.Types.ObjectId;
    const hallObjectId = new ObjectId(hallId);
    const details = await Hall.aggregate([
      {
        $match: {
          _id: hallObjectId,
        },
      },
      {
        $lookup: {
          from: "vendors", // Collection name for Vendor model
          localField: "vendorid",
          foreignField: "_id",
          as: "vendorDetails",
        },
      },
    ]);
    //get user details of person who has booked the hall
    const user = await User.findOne({ _id: userId });

    //used the aggregate functin to get vendor details via hall model
    const vendorEmail = details[0].vendorDetails[0].email;
    let emailSent = await sendEmail(
      vendorEmail,
      "Booking Confirmation",
      `We hope this message finds you well.

    We are delighted to inform you that a new booking has been made for ${createdBooking.date} at ${details[0].name}. This booking has been confirmed and your services have been requested by our valued customer.
    
    Details of the booking:
    
    Event: ${createdBooking.eventType}
    Date: ${createdBooking.date}
    Venue: ${details[0].name}
    Customer Name: ${user.username}
    Contact Information: ${user.email}`
    );

    if (!emailSent)
      return NextResponse.json({
        status: 400,
        error: "failed to send confirmation email to vendor",
      });

    //success email to user
    emailSent = await sendEmail(
      user.email,
      "Acknowledgement Request Forwarded",
      `
      Dear ${user.username},

      I hope this message finds you well.

      I wanted to inform you that your request for booking has been duly acknowledged and forwarded to our associated vendor for their immediate attention and necessary action. 
      We highly value your request and are committed to ensuring its timely and effective resolution.
      Details of the booking:
    
      Event: ${createdBooking.eventType}
      Date: ${createdBooking.date}
      Venue: ${details[0].name}`
    );

    if (!emailSent)
      return NextResponse.json({
        status: 400,
        error: "failed to send confirmation email to user",
      });

      //else send 200 status to user
    return NextResponse.json({
      status: 200,
      message:
        "succesfully requested, now wait until the vendor has confirmed the booking",
    });
  } catch (error) {
    return NextResponse.json({ status: 400, error: error.message });
  }
}
