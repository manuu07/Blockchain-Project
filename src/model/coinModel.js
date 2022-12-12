// {  "symbol" // String and Unique
// "name": // String and Unique
// "marketCapUsd": // String  ( not Number)
//  "priceUsd": //String
// }

const mongoose=require('mongoose')

const coinSchema=new mongoose.Schema({
    symbol:{type:String,unique:true},
    name:{type:String, unique:true },
    marketCapUsd:{type:String},
    priceUsd:{type:String}
},{timestamps:true})

module.exports=mongoose.model('Crypto',coinSchema)