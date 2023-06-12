const GetBikeRouter = require('express').Router()
const BikeModel = require('../../model/BikeModel')

GetBikeRouter.get('/',async(req,res)=>{
    const bike = await BikeModel.find({})

    if(bike){
        res.status(200).send({
            success:true,
            message:"Bike Detail Found!!!",
            data:bike
        })
    }else{
        res.status(401).send({
            success:false,
            message:"No Data Found!!!"
        })
    }
})

module.exports = GetBikeRouter