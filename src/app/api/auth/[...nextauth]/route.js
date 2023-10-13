import { connect } from "@/configDb/configDb";
import User from "@/models/userModel";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers:[
    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks:{
    async session({session}){
        const sessionuser = await User.findOne({
           email:session.user.email
        })

        console.log("session",session)
        // session.user.id = sessionuser._id.toString();
        return sessionuser;
       },
       async signIn({profile}){
         try {
           await connect();
   
           const userexists = await User.findOne({
               email:profile.email
           })
           console.log(userexists)
           if(!userexists){
               await User.create({
                   email:profile.email,
                   username:profile.name.replace(" ","").toLowerCase(),
                   password:profile.at_hash
               })
           }
           return true
         } catch (error) {
           console.log("......",error)
           return false
         }
       },
}
})

export { handler as GET, handler as POST }