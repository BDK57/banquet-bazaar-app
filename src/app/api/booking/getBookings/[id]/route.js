import booking from "@/models/bookingModel";
import { NextResponse } from "next/server";
import { connect } from "@/configDb/configDb";

export async function POST(request, { params }) {
  try {
    await connect();
    const hallId = params.id;
    const body = await request.json();

    const currentDate = new Date();
    const dayBeforeToday = new Date(currentDate);
    dayBeforeToday.setDate(currentDate.getDate() - 3);
    console.log(dayBeforeToday);

    const hallBookings = await booking.find({
      hallId: hallId,
      confirmed: body.confirmed,
      date: { $gte: dayBeforeToday },
    });

    if (!hallBookings || hallBookings == [])
      return NextResponse.json({ status: 404, message: "no bookings found" });
    return NextResponse.json({ status: 200, booking: hallBookings });
  } catch (error) {
    return NextResponse.json({ status: 400, error: error.message });
  }
}
