require('dotenv').config();
const express=require('express');
const app=express();
const PORT=3000; //i am not using this port


app.get('/',(req,res)=>{
    res.send("Main Page");
})

app.get('/login',(req,res)=>{
    res.send("login page");
})

app.get('/signup',(req,res)=>{
    res.send("sign up page");
})

app.listen(process.env.PORT,()=>{
    console.log(`example app listening to port ${process.env.PORT}`);
})
