import Hall from '@/models/HallMode';
import { connect } from '@/configDb/configDb';
import { NextResponse } from 'next/server';
import User from '@/models/userModel';
export const GET = async () => {
  try {
   await connect();
    const Halldata = await Hall.find();
    if(Halldata){
        const response = {
            Halldata,
           status: 200,
        }; 
        return NextResponse.json({ data:response });
    }
    return NextResponse.json({msg:"No halls yet been added To show",status:201})
  } catch (error) {
    return  NextResponse({status:500,msg:error})
  }
}