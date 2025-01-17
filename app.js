const express = require('express')
const addDays=require("date-fns/addDays");
const app=express()

app.get("/",(request,response)=>{
    const date=new Date();
    const result=addDays(date.getFullYear(),date.getMonth(),getDate(),100);
    response.send(`${result.getDate()}/${result.getMonth()+1}/${result.getFullYear()}`);
});
module.exports=app;
