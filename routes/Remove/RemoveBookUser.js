const RemoveBookUserRoter = require('express').Router()
const BookUser = require('../../model/BookUser')

RemoveBookUserRoter.post('/remove' , async(req,res)=>{
    const {id}= req.body

    let user = await BookUser.deleteOne({_id:id}).then((responce)=>{
            res.status(200).send({
            data:responce,
            message:"data Fetched!!!"
        })
        }).catch((error)=>{
        res.status(401).send({
            error,
            message:"No Data Found!!!"
        })
    })
    
})

module.exports = RemoveBookUserRoter