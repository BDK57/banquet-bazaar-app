import jwt from "jsonwebtoken";

const { NextRequest } = require("next/server");

export const getTokendata = (request) => {
    try {
        const token = request.cookies.get("token")?.value || ""
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET)
        return decoded.id

    } catch (error) {
        console.log(error)
    }
}