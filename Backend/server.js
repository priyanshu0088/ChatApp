// const express = require("express");
import express  from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); // to parse the incoming requests from json payloads(from req.body)

app.use("/api/auth",authRoutes)


// app.post("/", (req,res) => {
//     //root route http://localhost:5000//
//     res.send("hello world!!!");
// });



app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`server running on port ${PORT}`)
});