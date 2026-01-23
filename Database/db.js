import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected sucessfully")
    }
    catch(error){
        console.log("Error in connecting database", error)
    }
}

export default connectDB;