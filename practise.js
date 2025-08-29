const express=require('express');
const app=express();

app.use('/test',(req,res)=>{
    res.send("hello anil")
})

app.listen(3010,()=>{
    console.log("server is running successfully");

})