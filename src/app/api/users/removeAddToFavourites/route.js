import { NextResponse } from "next/server";
import { connect } from "@/configDb/configDb";
import { getTokendata } from "@/helpers/getTokendata";
import User from "@/models/userModel";
export async function POST(request) {
   
  try {
    await connect();
   
    const body = await request.json();
    const userId = await getTokendata(request);

    if(!body.hallId) return NextResponse.json({status:400,error:'hall id was not sent'})

    const user = await User.findOneAndUpdate(
      { _id: userId },
      {
        $pull: {
          favourites: body.hallId,
        },
      }
    );

    console.log(`user: ${user}`);

    if (!user)
      return NextResponse.json({
        status: 400,
        error: "failed to remove from favourites",
      });
    return NextResponse.json({ status: 200, message: "removed successfully" });
  } catch (error) {
    return NextResponse.json({ status: 400, error: error.message });
  }
}
