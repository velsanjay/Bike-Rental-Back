let BookBikeRouter = require('express').Router()
let BookUser = require('../../model/BookUser')

BookBikeRouter.post('/book', async(req,res)=>{
    let {firstName, bikeId, lastName, email, plan, phoneNo, startDate, endDate, startTime, endTime} = req.body

    let BookBike = new BookUser({
        firstName,
        bikeId,
        lastName,
        email,
        phoneNo,
        plan,
        startDate,
        endDate,
        startTime,
        endTime
    })
    BookBike.save().then((responce)=>{
        res.status(200).send({
            success:true,
            message:"User Created Successfully!!!",
            data:responce
        })
    }).catch((error)=>{
        res.status(401).send({
            success:false,
            error
        })
    })
})

module.exports = BookBikeRouter