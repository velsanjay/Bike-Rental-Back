const EditBikeDetail = require('express').Router()
const BikeModel = require('../../model/BikeModel')

EditBikeDetail.patch('/edit',async(req,res)=>{
    const{model, year, manufacture, mileage, available, _id, img, seats, bikeType, amount} = req.body
    
    const bike = await BikeModel.findOne({_id}).then().catch((error)=>{
        res.status(400).send({
            success:false,
            message:"Bike Not Found",
            error
        })
    }) 

    if(bike){
        if(model){bike.model = model;}
        if(year){ bike.year = year; }
        if(manufacture){ bike.manufacture = manufacture; }
        if(mileage){ bike.mileage = mileage; }
        if(img){ bike.img = img; }
        if(seats){ bike.seats = seats; }
        if(bikeType){ bike.bikeType = bikeType; }
        if(amount){ bike.amount = amount; }
        if(available !=null){ bike.available = available }
        
        // bike.updatedAt = new Date()
    
        bike.save().then((responce)=>{
            res.status(200).send({
                success:true,
                message:"Edited Your Detail!!!",
                data:responce         
            })
        }).catch((error)=>{
            res.status(400).send({
                success:false,
                message:"Failed to Edit Detail!!!",
                error
            })
        })
    }else{
        res.status(401).send({
            success:false,
            message:"Bike Not Found!!!"
        })
    }
})

module.exports = EditBikeDetail