const express=require('express')
const router=express.Router()
const coinController=require('../controller/coinController')

router.get('/cryptoCoins',coinController.getCoins)

module.exports=router