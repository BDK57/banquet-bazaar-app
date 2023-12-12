import { NextResponse } from "next/server";
import { connect } from "@/configDb/configDb";
import { getTokendata } from "@/helpers/getTokendata";
import User from "@/models/userModel";
export const POST = async (request,{params}) => {
   
  try {
    await connect();
   
    console.log("params",params)
    const userId = await getTokendata(request);

    if(!params.id) return NextResponse.json({status:400,error:'hall id was not sent'})

    const user = await User.findOneAndUpdate(
      { _id: userId },
      {
        $pull: {
          favourites: params.id,
        },
      
      },
      {new:true}
    );

    console.log(`user: ${user}`);

    if (!user)
      return NextResponse.json({
        status: 400,
        error: "failed to remove from favourites",
        
      });
    return NextResponse.json({ status: 200, message: "removed successfully",data:user });
  } catch (error) {
    return NextResponse.json({ status: 400, error: error.message });
  }
}