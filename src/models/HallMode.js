import mongoose from "mongoose";
import { Schema } from "mongoose";
import moment from "moment/moment";



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

  name: {
    type: String,
    unique: true,
  },
  Description: {
    type: String,
  },
  location: {
    type: String,
  },
  vendorid: {
    type: Schema.Types.ObjectId,
    ref: "vendor",
  },
  capacity: {
    type: Number,
  },
  Price: {
    type: Number,
  },
  coverimage: {
    type: String,
  },
  galleryImage: [
    {
      type: String,
    },
  ],
  activeStatus: {
    type: Boolean,
    default: true,
  },
  createdTime: {
    type: Date,
    default: () => moment(),
  },
  updatedTime: {
    type: Date,
    default: ()=>moment(),
  },
});

const Hall = mongoose.models.Halls || mongoose.model("Halls", HallSchema);
export default Hall;
