import mongoose from "mongoose";
import User from "./UserSchema.js";

const ProjectSchema = mongoose.Schema({
    projectName:{
        type:String
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
},{
    timestamps:true
})

const Project = mongoose.model("Project",ProjectSchema);
export default Project;