const express = require("express");
// import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.get("/happy",(req,res)=>{
  res.send("This is happy Route")
  console.log("this is happy")
})

// app.get("/twitter",()=>{})
app.get("/twitter",(req,res)=>{
    res.send("Abhishek Pal");
})

app.get("/login",(req,res)=>{
  res.send("<h1>this is the heading</h1>")
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })

app.listen(port,()=>{
    console.log(`This is Example of ${port}`)
})
