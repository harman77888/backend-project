const express=require("express");
const app =express()
const path=require("path")
app.use(express.static(path.join(__dirname,'./index.html')))
const formData=(req,res,next)=>{
    if(req.method==='POST'){
        console.log('Form data',req.body);
    }
    next()
}
app.use(formData)

app.post("/login",(req,res)=>{
    const f_name=req.body
    const l_name=req.body
    const email=req.body
    const pass=req.body
    res.send("Login page")
})

app.listen(8000)