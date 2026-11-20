// console.log("Hellon I am Harman")


// const user=require("./osArch");
// console.log(user.name)
// console.log(user.phone)
// const user2=require("./osArch")
// console.log(user2.name)




// const express=require("express");
// const app=express();
// const userRoutes=require("./routes/userRoutes")
// const loginRoutes=require("./routes/loginRoutes")
// app.get("/",(req,res)=>{
//     res.send("Data")
// })

// app.use("/user",userRoutes)


// app.get("/login",(req,res)=>{
//     res.send("login Page")
// })
// app.use("/log",loginRoutes)
// app.listen(9000,()=>{
//      console.log("server runing on 9000 ")
// }) 

// const express=require("express")
// const app=express()
// const registerPage=require("./registerPage")
// app.use("/reg",registerPage)
// app.get("/register",(req,res)=>{
//     res.send("Register Sucessfully")
// })
// app.listen(9000,()=>{
//     console.log("Running port at 9000")
// })

const express=require("express")
const app =express()
const uploads=require("./18nov")
app.use("/up",uploads)
app.listen(3000,()=>{
    console.log("Running at 6000")
})