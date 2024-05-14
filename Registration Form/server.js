const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3091

const app = express();

app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/Registration')
const db = mongoose.connection
db.once('open',()=>{
    console.log("connected to database")
})

const userSchema = new mongoose.Schema({
    username:String,
        fname:String,
        lname:String,
        email:String,
        mobile:String,
        age:String,
        gender:String,
        male:String,
        female:String,
        password:String
})

const Users = mongoose.model("data",userSchema)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/post',async(req,res)=>{
    const{ username,
        fname,
        lname,
        email,
        mobile,
        age,
        gender,
        male,
        female,
        password}= req.body
    const user = new Users({
        username,
        fname,
        lname,
        email,
        mobile,
        age,
        gender,
        male,
        female,
        password
    })
    await user.save()
    console.log(user)
    res.send("Form Submission Successfully")
})

app.listen(port,()=>{
    console.log("server started")
})