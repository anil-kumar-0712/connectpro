const express=require('express');
const app=express();

app.use('/test,',(req,res)=>{
    res.send("hello world");
})

app.use('/,test',(req,res)=>{
    res.send("hello hello")
})

app.use('/contact/hii',(req,res)=>{
    res.send("hoii hiii")
})

app.use("/",(req,res)=>{
    res.send("hello anil")
})


app.listen(7777,()=>{
    console.log("your server is running")
});