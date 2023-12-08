import { NextResponse } from "next/server";
import { connect } from "@/configDb/configDb";
import User from "@/models/userModel";
import jwt from "jsonwebtoken";

export async function POST(request) {
    await connect();

    try {
        const body = await request.json();

        const { displayName, email, accessToken } = body;
        // Find user by email (for default signup)
        let user = await User.findOne({ email }).select('-password -isVerified');

        if (user) {
            // If user already exists, update details for social login
            user = await User.findOneAndUpdate(
                { email },
                {
                    $set: {
                        username: displayName,
                        password: accessToken,
                        isSocialUser: true,
                    },
                },
                { new: true }
            ).select('-password -isVerified');
        } else {
            // If user doesn't exist, create a new user
            user = await User.create({
                username: displayName,
                email: email,
                password: accessToken,
                isSocialUser: true,
            });
        }
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        };

        const token = await jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET, {
            expiresIn: "1d",
        });

        // Create JSON response
        const response = NextResponse.json({
            message: "Logged in successfully",
            success: true,
            user,
        });

        // Set JWT token as an HTTP-only cookie
        response.cookies.set("token", token, { httpOnly: true });

        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}