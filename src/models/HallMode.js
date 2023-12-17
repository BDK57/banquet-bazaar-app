import mongoose from 'mongoose'
import { Schema } from 'mongoose'
const HallSchema = new mongoose.Schema({
    name: {
        type: String,
        unique:true
    },
    description: {
        type: String,
    },
    location:{
        type:String
    },
    vendorid:{
        type: Schema.Types.ObjectId, 
        ref: 'vendor' 
    },
    capacity:{
        type:Number,
    },
    price:{
        type:Number,
    },
    coverimage:{
        type:String,
    },
    galleryImage:[{
        type:String,
    }],
    

})


const Hall = mongoose.models.Halls || mongoose.model("Halls", HallSchema)
export default Hall