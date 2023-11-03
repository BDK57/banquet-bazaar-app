import Vendor from '@/models/VendorModel';
import { connect } from '@/configDb/configDb';
import { NextResponse } from 'next/server';
import Hall from '@/models/HallMode';
export const POST = async (req) => {
    connect();
    const {vendorid,name,Description,capacity,Price,coverimage,galleryImage} = await req.json();

    try {
        
        const vendor = await Vendor.findOne({_id:vendorid})
        console.log("vernd",vendor)
        if(!vendor){
            return NextResponse.json({status:404,msg:"You have to be Vendor in order to Add halls"})
        }

        const newhall = await Hall.create({
            name: name,
            Description:Description, 
            vendorid:vendorid,
            capacity:capacity,
            Price:Price,
            coverimage:coverimage,
            galleryImage:galleryImage,
        })
       
        console.log("Hall data is",newhall)
        if(newhall){
                return NextResponse.json({status:200,msg:"Hall has beeen Added"})
        }

        return NextResponse.json({status:400,msg:"Hall not Added"})

        
    } catch (error) {
        return NextResponse.json({status:400,msg:error})

    }
} 