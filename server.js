const express= require('express')
const app=express()
const connectDB=require("./config/connectDB")
//middelware
app.use(express.json())
//connect database
connectDB()

//run server
const port=process.env.PORT||5000
app.listen(port,err=>
    err? console.log("erreur"):console.log(`server is running on port ${port}`)
    )