import { connect } from "@/configDb/configDb";
import { getTokendata } from "@/helpers/getTokendata";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
export async function POST(request) {
  try {
    await connect();
    const body = await request.json();
    const userId = await getTokendata(request);
    console.log(body.vendorId);
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $push: { favourites: { $each: [body.vendorId] } } },
      { new: true }
    );
    console.log(user);
    if (!user)
      return NextResponse.json({
        status: 400,
        message: "failed to add to favourites",
      });
    return NextResponse.json({ status: 200, message: "added to favourites" });
  } catch (error) {
    return NextResponse.json({ status: 400, error: error.message });
  }
}
