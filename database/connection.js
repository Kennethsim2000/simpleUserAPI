const mongoose=require('mongoose');
const express=require("express");

const PORT=process.envPORT||8000;

const uri=process.env.ATLAS_URI;

const connectDB=()=>{
    try{
        const con=mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log(`MongoDB connected:${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB;