const mongoose = require('mongoose')

const BookUser = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    bikeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"bikes",
        required:true
    },
    plan:{
        type:Number
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

module.exports = mongoose.model('bookuser',BookUser)