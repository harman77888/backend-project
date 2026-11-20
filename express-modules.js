// const express =require("express");
// const fs=require("fs")
// const app=express();


// app.get("/",(req,res)=>{
//     res.send("hello this is server")
// })
// app.get("/home",(req,res)=>{
//     // res.send("hello home page")
//     fs.readFile("index.html","utf-8",(err,data)=>{
//         res.send(data)
//     })
// })
// app.listen(9000,()=>{
//     console.log("server running at 9000")
// })


// function check(req,res,next){
//     console.log("This is middleware routing")
//     next()
// }
// app.get("/",(req,res)=>{
//     res.send("This is homePage")
// })
// app.get("/profile",check,(req,res)=>{
//     res.send("This is middleware ")
// })

// app.listen(9000,()=>{
//     console.log("This is running")
// })