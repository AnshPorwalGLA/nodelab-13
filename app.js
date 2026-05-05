const express=require("express");
const app=express();
const path= 3000;
app.listen(path,(req,res)=>{
    console.log("listen");
})
app.get("/login",(req,res)=>{
    res.render("Login.ejs");
})