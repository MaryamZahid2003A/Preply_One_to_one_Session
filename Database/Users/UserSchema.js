import mongoose, { trusted } from "mongoose";

const userSchema = mongoose.Schema({
    first_name : {
        type:String,
        required:true,
        minLength:5,
        maxlength:15,
        trim:true
        
    },
    last_name:{
        type:String,
        default:""
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:"String",
        enum:["Operational Manager","Admin","QA","Developer","User"],
        default:"User"
    },
    phoneNumber:{
        type:Number,
        
    },
    skills:{
        type:[String]
    },
    education:[
        {
            //key:value
           degree:{
            type:String,
            
           },
           year:{
            type:Number
            },
            university:{
                type:String
            }
        },

    ]
  
},{
    timestamps:true
})

const User = mongoose.model('User',userSchema);
export default User;




