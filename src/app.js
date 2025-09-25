const express=require('express');
const app=express();

app.use("/admin",(req,res,next)=>{
    const mytoken="xyz";
    const comptoken=mytoken==="xyz"
    if(!comptoken){
        res.status(401).send("nope")
    }
     else{
        next();
     }   
        
});

app.get("/admin/dashboard",(req,res)=>{
    res.send("your dashboard is here")
})
app.get("/admin/delete",(req,res)=>{
    res.send("youg have  permission to delete the data")
});


app.use("/user",(req,res,next)=>{
    console.log("hello user")
    const token="abc"
    const token1=token="abc"
    if(!token1){
        res.status(401).send("the user is not valid")
    }
    else{
        next();
    }
})

app.get("/user1",(req,res)=>{
    res.send("hello anil");
})


app.listen(8888,()=>{
    console.log("your server is running")
});