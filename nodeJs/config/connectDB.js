import mongoose from "mongoose";
import Dotenv from "dotenv";

Dotenv.config()

const connectDB = async()=>{
   try {
    const connect = await mongoose.connect(process.env.MONGO_URL)
    console.log(connect.connection.host);
   } catch (error) {
    console.log('baglanmadi');
   }
}

export default connectDB