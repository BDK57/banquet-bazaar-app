
import { NextResponse } from "next/server";
import { connect } from "@/configDb/configDb";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
    await connect();
    try {
        const body = await request.json();

        const { email, password } = body;
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "User doesn't exists" },
                { status: 400 },
            );
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return NextResponse.json(
                { error: "Invalid Credentials" },
                { status: 401 },
            );
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        };
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