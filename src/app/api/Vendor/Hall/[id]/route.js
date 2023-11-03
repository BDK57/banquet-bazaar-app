import { connect } from '@/configDb/configDb'
import Hall from '@/models/HallMode'
import { NextResponse } from 'next/server';
export const GET = async (reques, { params }) => {
    try {
        console.log("asdansdl",params.id)
        connect();
        const Halldata = await Hall.findById(params.id)
        if(Halldata){
            return new NextResponse.json({data:Halldata,status:200})
        }        
        return new NextResponse.json({msg:"No hall with Specified Id",status:400})

    } catch (error) {
        return new NextResponse.json({Error:"Internal Server Error",  status: 500 });
    }
}


export const PATCH = async (request,{params}) => {
  try {

    await connect();
    const {name,Description,capacity,Price,coverimage,galleryImage} = await request.json();
    const existingHall = await Hall.findById(params.id)
    if(!existingHall){
        return new NextResponse.json({msg:"No hall has been found",status:404})
    }
   
    const updatedudata = await Hall.findByIdAndUpdate(params.id,{
        name: name,
        Description:Description, 
        capacity:capacity,
        Price:Price,
        coverimage:coverimage,
        galleryImage:galleryImage

    },{new:true})
    if(updatedudata){
        return new NextResponse.json({msg:"Hall data has been Updated",status:200})
    }

    return new NextResponse.json({msg:"Hall data not Updated Try Agin!",status:404})
   
  } catch (error) {
    return new NextResponse.json({error:"Internal Server Error",status:500})

  }
}


export const DELETE = async (request, { params }) => {
    try {
        console.log(params.id)
        await connect()
        const data = await Hall.findByIdAndRemove(params.id);
        if(data){
            return new NextResponse.json({msg:"Hall has been deleted successfully",status:200});
        }
        return new NextResponse.json({msg:"Hall not Found",status:200});
    } catch (error) {
        return new NextResponse.json({Error:"Error deleting prompt",status: 500});
    }
};