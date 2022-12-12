const express=require('express')
const route=require('./routes/route')
const mongoose=require('mongoose')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.set('strictQuery', false)

mongoose.connect("mongodb+srv://manu_db:g7o90loK4x1HTpI7@cluster0.pqmg1aw.mongodb.net/blockchainProject",
{useNewUrlParser:true})
.then(()=> console.log("MongoDb is connected"))
.catch(err=> console.log(err.message))

app.use('/',route)

app.listen(process.env.PORT || 3000, function(){
    console.log("Express is running on port " + (process.env.PORT || 3000))
})