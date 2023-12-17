import booking from "@/models/bookingModel";
import { NextResponse } from "next/server";
import { connect } from "@/configDb/configDb";

export async function GET(request, { params }) {
  try {
    await connect()
    const hallId = params.id;

    const hallBookings = await booking.find({ _id: hallId });
    if (!hallBookings)
      return NextResponse.json({ status: 404, message: "no bookings found" });
    return NextResponse.json({ status: 200, booking: hallBookings });

  } catch (error) {
    return NextResponse.json({ status: 400, error: error.message });
  }
}
