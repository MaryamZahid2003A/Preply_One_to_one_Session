import http from 'http';
import dotenv from 'dotenv';
import connectDB from './Database/db.js';
import User from './Database/Users/UserSchema.js';
import Project from './Database/Users/Projects.js';
dotenv.config();

console.log(process.env.MONGO_URL);


const startServer = async()=>{
    connectDB();
    const server = http.createServer((req,res)=>{
        res.write("Hey My name is Maryam");
        res.end();
    })
    server.listen(process.env.PORT , ()=>{
            console.log("Server is running on port 5000")
    })

    const newUser = new User({
        first_name:" ABCDEF ",
        email:"abc@gmail.com",
        phoneNumber:123455,
        skills:[
            "Mongo",
            "Node",
            "React"
        ],
        education:[
            {
                degree:"Computer Sciences",
                year:2026,
                university:"ABC"
            },
             {
                degree:"Computer ",
                year:2022,
                university:"ABC"
            },
        ]
    })
    await newUser.save();
    const newProject = new Project({
        projectName:"Devops",
        createdBy:newUser._id

    })
    await newProject.save();
    console.log("User and Product Added Successfully")

}
startServer();
