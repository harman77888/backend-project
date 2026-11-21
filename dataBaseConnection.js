const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())

// mongoDB connection:

mongoose.connect("mongodb://127.0.0.1:27017/MERN")
.then(()=>console.log("database conneted"))
.catch(()=>console.log(err))


// schema:

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
// Model :

const user=mongoose.model("user", userSchema)

// Api 
app.post("/create",async(req,res)=>{
    const userData=new user(req.body)
    const result =await userData.save()
    console.log(result);

})

app.get("/user",async(req,res)=>{
    const result=await user.find()
    res.send(result)
})

app.listen(9000)