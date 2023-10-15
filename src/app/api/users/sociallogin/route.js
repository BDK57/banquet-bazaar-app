import { NextResponse } from "next/server";
import { connect } from "@/configDb/configDb";
import User from "@/models/userModel";
import jwt from "jsonwebtoken";
export async function POST(request) {
    await connect();
    try {
        const body = await request.json();

        const { displayName, email, accessToken } = body;
        console.log("display name",displayName)
        console.log("email",email)
        console.log("access token", accessToken)
        let user;
        user = await User.findOne({ email });
        if (!user) {
            console.log("hello")
            user = await User.create({
                username: displayName,
                email: email,
                password: accessToken,
                isSocialUser:true
            })
        }
       
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        };

        console.log("saves",tokenData)
        const token = await jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET, {
            expiresIn: "1d",
        });
        
        const response = NextResponse.json({
                message: "Logged in successfully",
                success: true,
        });

        response.cookies.set("token", token, { httpOnly: true });
        
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}