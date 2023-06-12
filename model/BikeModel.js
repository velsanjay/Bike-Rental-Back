const mongoose = require('mongoose')

const BikeModel = mongoose.Schema({
    model:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    manufacture:{
        type:String,
        required:true
    },
    mileage:{
        type:Number,
        required:true
    },
    seats:{
        type:Number,
        required:true
    },
    bikeType:{
        type:String,
        required:true
    },
    available:{
        type:Boolean,
        default:true
    },
    amount:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date
    // },
    // updatedAt:{
    //     type:Date,
    //     default:null
    }
})

module.exports = mongoose.model('bikes', BikeModel)