import mongoose from "mongoose";
import {DATA_BASE} from "../constants.js";



const connectDB = async() =>{
    try{
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DATA_BASE}`)
        console.log(`\n MogoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MONGODB connection Failed",error);
        process.exit(1);
    }
}

export default connectDB;