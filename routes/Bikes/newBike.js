const NewBikeRouter = require('express').Router()
const BikeModel = require('../../model/BikeModel')

NewBikeRouter.post('/new',async(req,res)=>{
    const{model, year, manufacture, mileage, img, seats, bikeType, amount} = req.body

    const bike = new BikeModel({
        model,
        year,
        manufacture,
        img,
        mileage,
        seats,
        bikeType,
        amount
    })
    bike.save().then((responce)=>{
        res.status(200).send({
            success:true,
            message:"New Bike Added Successfully!!!",
            data:responce
        })
    }).catch((error)=>{
        res.status(401).send({
            success:false,
            message:"Unable to add Bike!!!",
            error
        })
    })
})

module.exports = NewBikeRouter