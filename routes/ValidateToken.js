const { validate } = require('../common/auth')

const ValidateTokenRouter = require('express').Router()

ValidateTokenRouter.get('/validate', validate , (req,res,next)=>{
    res.status(200).send({
        message:"Token is Valid!!!"
    })
})

module.exports = ValidateTokenRouter