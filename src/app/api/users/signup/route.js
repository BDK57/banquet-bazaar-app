
import { NextResponse } from "next/server";
import { connect } from "@/configDb/configDb";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

export async function POST(request) {
    await connect();
    try {
        const body = await request.json();
        const { username, email, password } = body;
        // let's check if the user already exists, if that's case we don't want to create a duplicate user
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }
        // // hash the password, you don't want to save it as a plain text
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // // save the user
        const newUser = new User({ username, email, password: hashedPassword });
        const savedUser = await newUser.save();
        return NextResponse.json({ message: "User created successfully", success: true, savedUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return request;
}