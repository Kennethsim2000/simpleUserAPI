const express=require('express');
const app=express();
const connectDB=require('./database/connection');
const bodyparser=require('body-parser');
const router=require('./routes/router');

connectDB();

app.use(bodyparser.urlencoded({extended:true}));
app.use('/user', router);



app.listen(3000,()=>{console.log(`server is running on http://localhost:${3000}`)});