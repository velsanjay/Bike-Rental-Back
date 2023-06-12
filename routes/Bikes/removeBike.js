const RemoveBikeRouter = require('express').Router()
const BikeModel = require('../../model/BikeModel')

RemoveBikeRouter.delete('/remove',async(req,res)=>{
    const {_id}= req.body;

    await BikeModel.deleteOne({_id}).then((responce)=>{
        if(responce.deletedCount != 0){
       res.status(200).send({
            success:true,
            message:"Bike Removed Successfully!!!",
            data:responce
        })
    }else{
        res.status(400).send({
            success:false,
            message:"Bike Not Found!!!"
        })
    }
    
    }).catch((error)=>{
        res.status(400).send({
            success:false,
            message:"Bike Not Found!!!",
            error
        })
    })
    
})

module.exports = RemoveBikeRouter