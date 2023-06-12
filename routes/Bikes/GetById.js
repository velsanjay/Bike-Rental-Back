const GetByIdRouter = require('express').Router()
const userModel = require('../../model/UserModel')
const BikeModel = require('../../model/BikeModel')
const BookUser = require('../../model/BookUser')

GetByIdRouter.get('/get/:id', async(req,res)=>{
    const {id} = req.params;
    // let id = '647841e1c534b3e1a99291e4'
    let user = await userModel.findOne({_id:id}).then().catch()
    if(user==null){
        let user1 = await BookUser.findOne({_id:id}).then().catch()
        if(user1==null){
            await BikeModel.findOne({_id:id}).then((responce)=>{
                res.status(200).send({
                    success:true,
                    message:"it's Worked !!!",
                    data:responce
                })
            }).catch((error)=>{
                res.status(401).send({
                    success: false,
                    error
                })
            })
        }else{
            res.status(200).send({
            success:true,
            message:"it's Worked",
            data:user1
        })
        }
    }else{
        res.status(200).send({
            success:true,
            message:"it's Worked Successfully!!!",
            data:user
        })
    }
    
})

module.exports = GetByIdRouter