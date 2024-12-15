// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import DB_NAME from "./constants.js";

// import express from "express"
import connectDB from "./db/ind.js";

dotenv.config({ path: "./env" });

console.log(`Database Name: ${DB_NAME}`);

connectDB()

.then(() => {
    console.log("MongoDB connection successful")
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1)
})












// first approach
/*
const app=express()
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Connected to MongoDB")
        app.on("error",()=>{
            console.log("Error occurred",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log("Server is running on port",process.env.PORT)
        })
    }
    catch(error){
        console.error("error",error);
        throw err
    }
    
})()

*/