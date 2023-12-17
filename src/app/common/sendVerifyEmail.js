import { sendEmail } from "@/helpers/sendemaillink";

export async function sendVerifyEmail(email,userId){
    const url = `http://localhost:3000/api/users/verifyEmail/${userId}`;

    const verifyEmail = await sendEmail(
      email,
      "Banquet Bazaar",
      `click the following link to verify and setup you account: ${url}`
    );

    return verifyEmail

}