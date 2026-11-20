const express=require("express");
const app =express()
const fs=require("fs")
const router=express.Router()
router.use(express.json())
router.get("/",(req,res)=>{
    res.send("Login page")
})
router.get("/login",(req,res)=>{
    fs.readFile("index.html","utf-8",(err,data)=>{
        res.send(data);
    })
})
module.exports=router