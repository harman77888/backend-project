// for single file upload 

// const express=require("express")
// const app=express()
// const multer=require("multer")
// const router=express.Router()
// const upload=multer({
//     storage:multer.diskStorage({
//         destination:function(req,res,cb){
//             cb(null,"upload")
//         },
//         filename:function(req,file,cb){
//             cb(null,file.fieldname+Date.now()+".jpg")
//         }
//     }) 
// }).single("user_file")
// router.post("/upload", upload,(req,res)=>{
//     res.send("File Uploaded")
// })
// module.exports=router;


//  for multiple files uploaded k liye 


const express=require("express")
const app=express()
const multer=require("multer")
const router=express.Router()
const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,res,cb){
            cb(null,"upload")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+Date.now()+".jpg")
        }
    }) 
}).array("user_file")
router.post("/upload", upload,(req,res)=>{
    res.send("File Uploaded")
})
module.exports=router;