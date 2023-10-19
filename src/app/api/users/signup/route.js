
import { NextResponse } from "next/server";
import { connect } from "@/configDb/configDb";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

export async function POST(request) {
    await connect();
    try {
        const body = await request.json();
        const { username, email, password } = body;

        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({status:400,error:"User already exists"})
        }

    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ username, email, password: hashedPassword });
        const savedUser = await newUser.save();
        return NextResponse.json({ message: "User created successfully", success: true, status:200 });
    } catch (error) {
        return NextResponse.json({status:500,error:error.message});
    }
}